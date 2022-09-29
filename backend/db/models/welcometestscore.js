'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WelcomeTestScore extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  WelcomeTestScore.init({
    userId: DataTypes.INTEGER,
    conditionId: DataTypes.INTEGER,
    testScore: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'WelcomeTestScore',
  });
  return WelcomeTestScore;
};