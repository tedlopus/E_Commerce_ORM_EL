// use Model and Datatypes from sequelize
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connnection');

// create the Tag model
class Tag extends Model {}

// creates the id and tag name for the model
Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tag_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag'
  }
);

module.exports = Tag;