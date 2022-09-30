'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('WelcomeTestAnswers', [
      {
        questionId: 1,
        answerVariant: 1,
        answerPoint: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionId: 1,
        answerVariant: 2,
        answerPoint: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionId: 1,
        answerVariant: 3,
        answerPoint: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionId: 2,
        answerVariant: 1,
        answerPoint: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionId: 2,
        answerVariant: 2,
        answerPoint: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionId: 2,
        answerVariant: 3,
        answerPoint: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionId: 3,
        answerVariant: 1,
        answerPoint: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionId: 3,
        answerVariant: 2,
        answerPoint: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionId: 3,
        answerVariant: 3,
        answerPoint: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('WelcomeTestAnswers', null, {});
  },
};
