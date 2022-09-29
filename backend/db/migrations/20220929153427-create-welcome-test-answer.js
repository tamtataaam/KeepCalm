module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('WelcomeTestAnswers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      questionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'WelcomeTestQuestions',
        },
      },
      answerVariant: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      answerPoint: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('WelcomeTestAnswers');
  },
};
