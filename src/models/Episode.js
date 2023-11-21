const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Episode = sequelize.define('episode', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Episode;