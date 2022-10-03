const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Condition extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ WelcomeTestScore, Recommendation }) {
      Condition.hasMany(Recommendation, { foreignKey: 'conditionId' });
      Condition.WelcomeTestScore = Condition.hasMany(WelcomeTestScore, {
        foreignKey: 'conditionId',
      });
    }
  }

  Condition.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      condition: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'Condition',
      tableName: 'Conditions',
    }
  );
  return Condition;
};
