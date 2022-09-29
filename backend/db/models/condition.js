const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Condition extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ WelcomeTestScore, Recommendation }) {
      Condition.hasOne(WelcomeTestScore, { foreignKey: 'conditionId' });
      Condition.hasMany(Recommendation, { foreignKey: 'conditionId' });
    }
  }

  Condition.init(
    {
      condition: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Condition',
      tableName: 'Conditions',
    }
  );
  return Condition;
};
