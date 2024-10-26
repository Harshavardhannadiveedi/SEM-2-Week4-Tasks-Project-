const express = require('express');
const router = express.Router();
const { Interaction } = require('../models/index');
router.post('/interactions', async (req, res) => {
    try {
        const { userId, type, details } = req.body;
        const interaction = await Interaction.create({ userId, type, details });
        res.status(201).json(interaction);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
router.get('/interactions/user/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const interactions = await Interaction.findAll({ where: { userId } });
        res.status(200).json(interactions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
