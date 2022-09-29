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
    await queryInterface.bulkInsert('WelcomeTestScores', [
      {
        // userId: 1,
        conditionId: 1,
        testScore: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // userId: 3,
        conditionId: 2,
        testScore: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // userId: 2,
        conditionId: 3,
        testScore: 60,
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
    await queryInterface.bulkDelete('WelcomeTestScores', null, {});
  },
};
