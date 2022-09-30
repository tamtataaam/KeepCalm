const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WelcomeTestAnswer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ WelcomeTestQuestion }) {
      WelcomeTestAnswer.belongsTo(WelcomeTestQuestion, {
        foreignKey: 'questionId',
      });
    }
  }
  WelcomeTestAnswer.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      questionId: {
        type: DataTypes.INTEGER,
        // allowNull: false,
        references: {
          model: 'WelcomeTestQuestions',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      answerVariant: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      answerPoint: {
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
      modelName: 'WelcomeTestAnswer',
      tableName: 'WelcomeTestAnswers',
    }
  );
  return WelcomeTestAnswer;
};
