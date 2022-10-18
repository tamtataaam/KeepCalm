module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Likes', [
      {
        userId: 1,
        articleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Likes', null, {});
  },
};
