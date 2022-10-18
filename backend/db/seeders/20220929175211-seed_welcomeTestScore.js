module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('WelcomeTestScores', [
      {
        userId: 1,
        conditionId: 1,
        testScore: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('WelcomeTestScores', null, {});
  },
};
