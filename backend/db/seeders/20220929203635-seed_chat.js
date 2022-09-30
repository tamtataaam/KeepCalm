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
        title: 'chat for cat lovers',
        telegramUrl: 'https://t.me/+tn5fmQT1LcswNmQy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        title: 'chat for meditaion',
        telegramUrl: 'https://t.me/+tn5fmQT1LcswNmQy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        title: 'chat for different things',
        telegramUrl: 'https://t.me/+tn5fmQT1LcswNmQy',
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
