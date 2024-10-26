const { DataTypes } = require("sequelize");
const sequelize = require("../Config/config");

module.exports = (sequelize, DataTypes) => {
    const Interaction = sequelize.define('Interaction', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users', 
                key: 'id',
            },
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        details: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        timestamp: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    });
    return Interaction;
};
