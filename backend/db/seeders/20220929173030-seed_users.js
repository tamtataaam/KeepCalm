module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Test User',
        email: 'test@test.com',
        password:
          '$2b$10$rhbXKBH97asPOBEIbQobAeYSW/RfdqPCfA5Op1hepLohq1GqyqmeC', // password: Qwerty12
        secretWord: 'user',
        avatar: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
