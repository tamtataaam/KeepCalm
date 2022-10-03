const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Article }) {
      Comment.Article = Comment.belongsTo(Article, {
        foreignKey: 'articleId',
      });
      Comment.User = Comment.belongsTo(User, {
        foreignKey: 'userId',
      });
    }
  }
  Comment.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
        },
      },
      articleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Articles',
        },
      },
      commentText: {
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
      modelName: 'Comment',
      tableName: 'Comments',
    }
  );
  return Comment;
};
