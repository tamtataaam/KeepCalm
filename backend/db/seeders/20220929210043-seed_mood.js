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
    await queryInterface.bulkInsert('Moods', [
      {
        mood: 'Ужасно',
        moodUrl: '5.svg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        mood: 'Плохо',
        moodUrl: '4.svg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        mood: 'Так себе',
        moodUrl: '3.svg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        mood: 'Хорошо',
        moodUrl: '2.svg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        mood: 'Супер',
        moodUrl: '1.svg',
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
    await queryInterface.bulkDelete('Moods', null, {});
  },
};
