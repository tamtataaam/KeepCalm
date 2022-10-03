const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Mood extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, UserMood }) {
      Mood.belongsToMany(User, {
        through: UserMood,
        foreignKey: 'moodId',
        otherKey: 'userId',
      });
    }
  }
  Mood.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      mood: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      moodUrl: {
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
      modelName: 'Mood',
      tableName: 'Moods',
    },
  );
  return Mood;
};
