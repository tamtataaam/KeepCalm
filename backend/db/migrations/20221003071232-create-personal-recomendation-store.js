module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PersonalRecomendationStores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
        },
      },
      recommendationId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Recommendations',
        },
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
    await queryInterface.dropTable('PersonalRecomendationStores');
  },
};
