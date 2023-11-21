const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Job = sequelize.define('job', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Job;