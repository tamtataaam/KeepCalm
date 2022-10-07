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
        name: 'Sanya',
        email: 'sanya@korolcss.com',
        password:
          '$2b$10$rhbXKBH97asPOBEIbQobAeYSW/RfdqPCfA5Op1hepLohq1GqyqmeC',
        secretWord: 'user',
        avatar: 'https://ca.slack-edge.com/T03JMRMKG9W-U03LUTF4MNJ-9a2ed2081b6e-512',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Anya',
        email: 'anya@reactonelove.com',
        password:
          '$2b$10$rhbXKBH97asPOBEIbQobAeYSW/RfdqPCfA5Op1hepLohq1GqyqmeC',
        secretWord: 'user',
        avatar: 'https://ca.slack-edge.com/T03JMRMKG9W-U03MFMM56FJ-5cfebfdbfd43-512',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Danya',
        email: 'danya@turkey.com',
        password:
          '$2b$10$rhbXKBH97asPOBEIbQobAeYSW/RfdqPCfA5Op1hepLohq1GqyqmeC',
        secretWord: 'user',
        avatar: 'https://ca.slack-edge.com/T03JMRMKG9W-U03LUUQD03D-2eb4e2e863bb-512',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Vadim',
        email: 'vadik@dedinside.com',
        password:
          '$2b$10$rhbXKBH97asPOBEIbQobAeYSW/RfdqPCfA5Op1hepLohq1GqyqmeC',
        secretWord: 'user',
        avatar: 'https://ca.slack-edge.com/T03JMRMKG9W-U03Q45GLBFS-dee6c2dc4b00-512',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Tamara',
        email: 'tamara@proectgotov.net',
        password:
          '$2b$10$rhbXKBH97asPOBEIbQobAeYSW/RfdqPCfA5Op1hepLohq1GqyqmeC',
        secretWord: 'user',
        avatar: 'https://ca.slack-edge.com/T03JMRMKG9W-U03P9014J23-a4222300ef1b-512',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Alina',
        email: 'alina@lovereact.com',
        password:
          '$2b$10$rhbXKBH97asPOBEIbQobAeYSW/RfdqPCfA5Op1hepLohq1GqyqmeC',
        secretWord: 'user',
        avatar: 'https://ca.slack-edge.com/T03JMRMKG9W-U03SM2UPU20-b31b9a4dad1a-512',
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
