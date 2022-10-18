module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Comments', [
      {
        userId: 1,
        articleId: 1,
        commentText: 'Test comment',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Comments', null, {});
  },
};
