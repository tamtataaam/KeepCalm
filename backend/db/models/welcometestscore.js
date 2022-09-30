const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WelcomeTestScore extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Condition }) {
      WelcomeTestScore.belongsTo(User, {
        foreignKey: 'userId',
      });
      WelcomeTestScore.belongsTo(Condition, { foreignKey: 'conditionId' });
    }
  }
  WelcomeTestScore.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
        },
      },
      conditionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Conditions',
        },
      },
      testScore: {
        type: DataTypes.INTEGER,
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
      modelName: 'WelcomeTestScore',
      tableName: 'WelcomeTestScores',
    }
  );
  return WelcomeTestScore;
};
