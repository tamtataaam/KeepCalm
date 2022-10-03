const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      WelcomeTestScore,
      Comment,
      Like,
      Chat,
      UserMood,
      FavoriteExercise,
      UserDiary,
      PersonalRecomendationStore,
    }) {
      User.WelcomeTestScore = User.hasMany(WelcomeTestScore, {
        foreignKey: 'userId',
      });
      User.Comment = User.hasMany(Comment, {
        foreignKey: 'userId',
      });
      User.Like = User.hasMany(Like, {
        foreignKey: 'userId',
      });
      User.hasMany(Chat, { foreignKey: 'userId' });
      User.UserModd = User.hasMany(UserMood, {
        foreignKey: 'userId',
      });
      User.FavoriteExercise = User.hasMany(FavoriteExercise, {
        foreignKey: 'userId',
      });
      User.PersonalRecomendationStore = User.hasMany(
        PersonalRecomendationStore,
        {
          foreignKey: 'userId',
        }
      );
      User.hasMany(UserDiary, { foreignKey: 'userId' });
    }
  }
  User.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      email: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      secretWord: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
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
      modelName: 'User',
      tableName: 'Users',
    }
  );
  return User;
};
