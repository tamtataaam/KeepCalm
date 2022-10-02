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
    await queryInterface.bulkInsert('Recommendations', [
      {
        conditionId: 1,
        recommendation: 'Recommendation 1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        conditionId: 1,
        recommendation: 'Recommendation 2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        conditionId: 1,
        recommendation: 'Recommendation 3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        conditionId: 2,
        recommendation: 'Recommendation 1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        conditionId: 2,
        recommendation: 'Recommendation 2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        conditionId: 2,
        recommendation: 'Recommendation 3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        conditionId: 3,
        recommendation: 'Recommendation 1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        conditionId: 3,
        recommendation: 'Recommendation 2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        conditionId: 3,
        recommendation: 'Recommendation 3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        conditionId: 4,
        recommendation: 'Recommendation 1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        conditionId: 4,
        recommendation: 'Recommendation 2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        conditionId: 4,
        recommendation: 'Recommendation 3',
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
    await queryInterface.bulkDelete('Recommendations', null, {});
  },
};
