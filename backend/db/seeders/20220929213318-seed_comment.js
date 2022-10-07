module.exports = {
  async up(queryInterface) {
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
        userId: 3,
        articleId: 1,
        commentText: 'Крутая статья! Она мне очень помогла)',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        articleId: 2,
        commentText: 'Все равно хочу в окно(((',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 4,
        articleId: 3,
        commentText: 'Лучшая статья',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        articleId: 4,
        commentText: 'Статья так себе, мне не зашло(',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // {
      //   userId: 4,
      //   articleId: 5,
      //   commentText: 'Крутая статья! Она мне очень помогла)',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   userId: 2,
      //   articleId: 6,
      //   commentText: 'Все равно хочу в окно(((',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   userId: 3,
      //   articleId: 7,
      //   commentText: 'Лучшая статья',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   userId: 2,
      //   articleId: 8,
      //   commentText: 'Статья так себе, мне не зашло(',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
    ]);
  },

  async down(queryInterface) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Comments', null, {});
  },
};
