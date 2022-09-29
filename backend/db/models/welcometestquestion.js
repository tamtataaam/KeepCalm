const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WelcomeTestQuestion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ WelcomeTestAnswer }) {
      WelcomeTestQuestion.hasMany(WelcomeTestAnswer, {
        foreignKey: 'questionid',
      });
    }
  }
  WelcomeTestQuestion.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      question: {
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
      modelName: 'WelcomeTestQuestion',
      tableName: 'WelcomeTestQuestions',
    }
  );
  return WelcomeTestQuestion;
};
