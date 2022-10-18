/* eslint-disable max-len */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Chats', [
      {
        userId: 1,
        title: 'Депрессия',
        telegramUrl: '#',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        title: 'Панические атаки',
        telegramUrl: '#',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        title: 'Переутомление',
        telegramUrl: '#',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        title: 'Бессонница',
        telegramUrl: '#',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Chats', null, {});
  },
};
