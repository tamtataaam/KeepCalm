module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('FavoriteExercises', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Users',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      exerciseId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Exercises',
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
    await queryInterface.dropTable('FavoriteExercises');
  },
};
