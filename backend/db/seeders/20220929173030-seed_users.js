module.exports = {
  async up(queryInterface) {
    /**
     * Add seed commands here.
     *
     * Example:
     await queryInterface.bulkInsert('People', [{
     name: 'John Doe',
     isBetaMember: false
     }], {});
    */

    await queryInterface.bulkInsert('Users', [
      {
        name: 'User1',
        email: 'user1@user.ru',
        password:
          '$2b$10$rhbXKBH97asPOBEIbQobAeYSW/RfdqPCfA5Op1hepLohq1GqyqmeC',
        secretWord: 'user',
        avatar: 'photos/no_avatar.webp',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'User2',
        email: 'user2@user.ru',
        password:
          '$2b$10$rhbXKBH97asPOBEIbQobAeYSW/RfdqPCfA5Op1hepLohq1GqyqmeC',
        secretWord: 'user',
        avatar: 'photos/no_avatar.webp',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Admin',
        email: 'admin2@admin.ru',
        password:
          '$2b$10$6RQVQVrtEUn9NFmVpCF2o./Qcrv0sEZYOHMqQHDWCLdTAZj1pBYBm',
        secretWord: 'user',
        avatar: 'photos/no_avatar.webp',
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
    await queryInterface.bulkDelete('Users', null, {});
  },
};
