module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('WelcomeTestScores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        // allowNull: false,
        references: {
          model: 'Users',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      conditionId: {
        type: Sequelize.INTEGER,
        // allowNull: false,
        references: {
          model: 'Conditions',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      testScore: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('WelcomeTestScores');
  },
};
