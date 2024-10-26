const express = require('express');
const router = express.Router();
const { User } = require('../models/index');

// POST /users - Create a new user
router.post('/users', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = await User.create({ username, email, password });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET /users - Retrieve all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// PUT /users/:id - Update a user by ID
router.put('/users/:id', async (req, res) => {
    const { id } = req.params;
    const { username, email, password } = req.body;

    try {
        const [updated] = await User.update(
            { username, email, password },
            { where: { id } }
        );

        if (updated) {
            const updatedUser = await User.findOne({ where: { id } });
            res.status(200).json(updatedUser);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// DELETE /users/:id - Delete a user by ID
router.delete('/users/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deleted = await User.destroy({ where: { id } });

        if (deleted) {
            res.status(204).send(); // No content response
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
