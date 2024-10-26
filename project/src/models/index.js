const Sequelize = require('sequelize');
const sequelize = require('../Config/config');

const User = require('./user')(sequelize, Sequelize.DataTypes);

module.exports = {
    User,
    sequelize,
};
