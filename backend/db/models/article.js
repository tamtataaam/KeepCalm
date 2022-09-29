const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Comment, Like, User }) {
      Article.hasMany(Comment, { foreignKey: 'articleId' });
      Article.hasMany(Like, { foreignKey: 'articleId' });
      Article.belongsToMany(User, {
        through: Like,
        foreignKey: 'articleId',
        otherKey: 'likeId',
      });
      Article.belongsToMany(User, {
        through: Comment,
        foreignKey: 'articleId',
        otherKey: 'commentId',
      });
    }
  }
  Article.init(
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
      content: {
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
      modelName: 'Article',
      tableName: 'Articles',
    }
  );
  return Article;
};
