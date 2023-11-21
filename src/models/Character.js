const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Character = sequelize.define('character', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image : {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Character;