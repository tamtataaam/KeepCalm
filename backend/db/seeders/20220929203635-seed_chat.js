/* eslint-disable max-len */
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
    await queryInterface.bulkInsert('Chats', [
      {
        userId: 1,
        title: 'Депрессия',
        // description:
        //   'это сообщество людей, для участия в котором достаточно единственного – желания выздороветь от ',
        telegramUrl: 'https://t.me/+-4o1Psl-3Yk5NjEy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        title: 'Панические атаки',
        // description:
        //   'если у вас бывают панические атаки и вам не скем это обсудить, то присоединяйтесь к этому чату',
        telegramUrl: 'https://t.me/+FLFRJOlR7GIxZDdi',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        title: 'Переутомление',
        // description:
        //   'тут обсуждаем, как бороться с переутомлением и больше отдыхать',
        telegramUrl: 'https://t.me/+aZ4m3yEraz8yOWNi',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        title: 'Бессонница',
        // description: 'когда таблетки уже не помогают, можно зайти в чат',
        telegramUrl: 'https://t.me/+iiQqAFKJbpFiYTU6',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        title: 'Одиночество',
        // description:
        //   'тут очень много людей, кому одиноко, давайте пообщаемся и больше не будем одиноки',
        telegramUrl: 'https://t.me/+1Wa_dkGZyik4ZTQy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Chats', null, {});
  },
};
