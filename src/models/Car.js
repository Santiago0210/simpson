const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Car = sequelize.define('car', {
    brand: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Car;