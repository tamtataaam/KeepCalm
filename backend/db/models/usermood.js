const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserMood extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Mood }) {
      UserMood.User = UserMood.belongsTo(User, {
        foreignKey: 'userId',
      });
      UserMood.Mood = UserMood.belongsToy(Mood, {
        foreignKey: 'moodId',
      });
    }
  }
  UserMood.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: 'Users',
        },
      },
      moodId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: 'Moods',
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
      modelName: 'UserMood',
      tableName: 'UserMoods',
    }
  );
  return UserMood;
};
