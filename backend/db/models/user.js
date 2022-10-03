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
      Condition,
      Article,
      Comment,
      Like,
      Chat,
      UserMood,
      Mood,
      FavoriteExercise,
      Exercise,
      UserDiary,
      Recommendation,
      PersonalRecomendationStore,
    }) {
      User.belongsToMany(Condition, {
        through: WelcomeTestScore,
        foreignKey: 'userId',
        otherKey: 'conditionId',
      });
      User.Comments = User.hasMany(Comment, {
        foreignKey: 'userId',
      });
      User.belongsToMany(Article, {
        through: Like,
        foreignKey: 'userId',
        otherKey: 'likeId',
      });
      User.hasMany(Chat, { foreignKey: 'userId' });
      User.belongsToMany(Mood, {
        through: UserMood,
        foreignKey: 'userId',
        otherKey: 'moodId',
      });
      User.belongsToMany(Exercise, {
        through: FavoriteExercise,
        foreignKey: 'userId',
        otherKey: 'exerciseId',
      });
      User.belongsToMany(Recommendation, {
        through: PersonalRecomendationStore,
        foreignKey: 'userId',
        otherKey: 'recommendationId',
      });
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
    },
  );
  return User;
};
