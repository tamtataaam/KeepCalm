module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('UserDiaries', [
      {
        userId: 1,
        title: 'Day 1',
        content: 'Lorem ipsum',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        title: 'Day 2',
        content: 'Lorem ipsum',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        title: 'Day 3',
        content: 'Lorem ipsum',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        title: 'Day 4',
        content: 'Lorem ipsum',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('UserDiaries', null, {});
  },
};
