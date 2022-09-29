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
    await queryInterface.bulkInsert('FavoriteExercises', [
      {
        userId: 1,
        exerciseId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        exerciseId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        exerciseId: 1,
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
    await queryInterface.bulkDelete('FavoriteExercises', null, {});
  },
};
