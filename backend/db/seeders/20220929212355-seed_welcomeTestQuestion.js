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
    await queryInterface.bulkInsert('WelcomeTestQuestions', [
      {
        question: 'question: 1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'question: 2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'question: 3',
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
    await queryInterface.bulkDelete('WelcomeTestQuestions', null, {});
  },
};
