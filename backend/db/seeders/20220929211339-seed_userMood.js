module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('UserMoods', [
      {
        userId: 1,
        moodId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        moodId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        moodId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        moodId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        moodId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        moodId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        moodId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        moodId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        moodId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        moodId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('UserMoods', null, {});
  },
};
