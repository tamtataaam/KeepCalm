module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserMoods', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        // primaryKey: true,
        // allowNull: false,
        references: {
          model: 'Users',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      moodId: {
        type: Sequelize.INTEGER,
        // primaryKey: true,
        // allowNull: false,
        references: {
          model: 'Moods',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
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
    await queryInterface.dropTable('UserMoods');
  },
};
