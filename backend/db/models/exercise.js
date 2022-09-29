const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Exercise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, FavoriteExercise }) {
      Exercise.hasMany(FavoriteExercise, { foreignKey: 'exerciseId' });
      Exercise.belongsToMany(User, {
        through: FavoriteExercise,
        foreignKey: 'exerciseId',
        otherKey: 'userId',
      });
    }
  }
  Exercise.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      imageUrl: {
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
      modelName: 'Exercise',
      tableName: 'Exercises',
    }
  );
  return Exercise;
};
