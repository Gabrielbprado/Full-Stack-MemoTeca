'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Thought extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Thought.init({
    thought: DataTypes.STRING,
    author: DataTypes.STRING,
    customModel: DataTypes.STRING,
    favorite: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Thought',
  });
  return Thought;
};