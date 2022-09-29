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
      questionId: DataTypes.INTEGER,
      answerVariant: DataTypes.INTEGER,
      answerPoint: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'WelcomeTestAnswer',
      tableName: 'WelcomeTestAnswers',
    }
  );
  return WelcomeTestAnswer;
};
