'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recommendations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Recommendations.init({
    conditionId: DataTypes.INTEGER,
    recommendation: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Recommendations',
  });
  return Recommendations;
};