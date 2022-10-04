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
    await queryInterface.bulkInsert('Conditions', [
      {
        condition:
          'Депрессивных симптомов нет. С вашим психическим здоровьем всё в порядке.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        condition: 'Вероятна лёгкая депрессия (субдепрессия).',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        condition: 'Умеренная депрессия.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        condition:
          'Тяжёлая депрессия (29-63 балла), Состояние тем сложнее, чем больше количество баллов.',
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
    await queryInterface.bulkDelete('Conditions', null, {});
  },
};
