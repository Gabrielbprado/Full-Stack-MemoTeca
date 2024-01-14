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
        // eslint-disable-next-line no-unused-vars
        static associate(models) {
            // define association here
        }
    }
    Thought.init({
        thought: DataTypes.STRING,
        author: DataTypes.STRING,
        customModel: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Thought',
        tableName: 'thoughts'
    });
    return Thought;
};