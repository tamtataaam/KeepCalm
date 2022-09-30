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
    await queryInterface.bulkInsert('Articles', [
      {
        title: 'Article 1',
        content: 'Lorem ipsum',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Article 2',
        content: 'Lorem ipsum',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Article 3',
        content: 'Lorem ipsum',
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
    await queryInterface.bulkDelete('Articles', null, {});
  },
};
