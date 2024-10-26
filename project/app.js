require('dotenv').config();
const express = require('express');
const { sequelize } = require('./src/models/index');
const userRoutes = require('./src/routes/userRoutes');
const interactionRoutes = require('./src/routes/interactionRoutes');

const app = express();
app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', interactionRoutes); 

sequelize.sync().then(() => {
    const port = process.env.PORT || 6000;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch(error => {
    console.error('Unable to connect to the database:', error);
});
