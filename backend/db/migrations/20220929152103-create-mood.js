module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Moods', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      mood: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      moodUrl: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Moods');
  },
};
