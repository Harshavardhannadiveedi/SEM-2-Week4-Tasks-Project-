require('dotenv').config();

const express = require('express');
const { sequelize } = require('./src/models/index');  
const userRoutes = require('../BE/src/routes/userRoutes'); 

const app = express();
app.use(express.json());

app.use('/api', userRoutes);

sequelize.sync().then(() => {
    const port = process.env.PORT || 3000;  
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);  
    });
}).catch(error => {
    console.error('Unable to connect to the database:', error);
});
