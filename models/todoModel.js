const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Todo = sequelize.define('Todos1', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  isCompleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Todo;
