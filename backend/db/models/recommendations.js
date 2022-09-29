const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recommendation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Condition }) {
      Recommendation.belongsTo(Condition, { foreignKey: 'conditionId' });
    }
  }
  Recommendation.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      conditionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Conditions',
        },
      },
      recommendation: {
        type: DataTypes.TEXT,
        allowNull: false,
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
      modelName: 'Recommendation',
      tableName: 'Recommendations',
    }
  );
  return Recommendation;
};
