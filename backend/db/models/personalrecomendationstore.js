/* eslint-disable max-len */
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PersonalRecomendationStore extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Recommendation }) {
      PersonalRecomendationStore.User = PersonalRecomendationStore.belongsTo(
        User,
        {
          foreignKey: 'userId',
        },
      );
      PersonalRecomendationStore.Recommendation =
        PersonalRecomendationStore.belongsTo(Recommendation, {
          foreignKey: 'recommendationId',
        });
    }
  }
  PersonalRecomendationStore.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
        },
      },
      recommendationId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Recommendations',
        },
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'PersonalRecomendationStore',
      tableName: 'PersonalRecomendationStores',
    },
  );
  return PersonalRecomendationStore;
};
