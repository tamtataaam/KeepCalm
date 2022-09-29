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
    await queryInterface.bulkInsert('Conditions', [
      {
        condition: 'Deep depression',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        condition: 'Neutral',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        condition: 'Extra exided',
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
    await queryInterface.bulkDelete('Conditions', null, {});
  },
};
