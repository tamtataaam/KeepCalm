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
    await queryInterface.bulkInsert('Chats', [
      {
        userId: 1,
        title: 'Депрессия',
        telegramUrl: 'https://t.me/+-4o1Psl-3Yk5NjEy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        title: 'Панические атаки',
        telegramUrl: 'https://t.me/+FLFRJOlR7GIxZDdi',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        title: 'Переутомление',
        telegramUrl: 'https://t.me/+aZ4m3yEraz8yOWNi',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        title: 'Бессонница',
        telegramUrl: 'https://t.me/+iiQqAFKJbpFiYTU6',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        title: 'Одиночество',
        telegramUrl: 'https://t.me/+1Wa_dkGZyik4ZTQy',
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
    await queryInterface.bulkDelete('Chats', null, {});
  },
};
