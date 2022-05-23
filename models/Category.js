// use Model and Datatypes and require connection to sequelize
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connnection');

// create the Category model
class Category extends Model {}

// creates the id and category name for the model
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;