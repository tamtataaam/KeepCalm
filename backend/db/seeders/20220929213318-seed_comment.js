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
    await queryInterface.bulkInsert('Comments', [
      {
        userId: 1,
        articleId: 2,
        commentText: 'Comment 1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        articleId: 1,
        commentText: 'Comment 1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        articleId: 2,
        commentText: 'Comment 2',
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
    await queryInterface.bulkDelete('Comments', null, {});
  },
};
