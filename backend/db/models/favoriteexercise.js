const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FavoriteExercise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Exercise, User }) {
      FavoriteExercise.Exercise = FavoriteExercise.belongs(Exercise, {
        foreignKey: 'exerciseId',
      });
      FavoriteExercise.User = FavoriteExercise.belongs(User, {
        foreignKey: 'userId',
      });
    }
  }
  FavoriteExercise.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.INTEGER,
        // allowNull: false,
        primaryKey: true,
        references: {
          model: 'Users',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      exerciseId: {
        type: DataTypes.INTEGER,
        // allowNull: false,
        primaryKey: true,
        references: {
          model: 'Exercises',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      status: {
        type: DataTypes.BOOLEAN,
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
      modelName: 'FavoriteExercise',
      tableName: 'FavoriteExercises',
    }
  );
  return FavoriteExercise;
};
