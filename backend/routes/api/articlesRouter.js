const articlesRouter = require('express').Router();

const { Article, Comment } = require('../../db/models');

module.exports = articlesRouter
  .get('/', async (req, res) => {
    try {
      const allArticles = await Article.findAll();
      res.json(allArticles);
    } catch (error) {
      res.status(500).send(`${error.message}`);
    }
  })
  .get('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const oneArticle = await Article.findByPk(id);
      res.json(oneArticle);
    } catch (error) {
      res.status(500).send(`${error.message}`);
    }
  })
  .post('/:id/comments', async (req, res) => {
    const { articleId, commentText } = req.body;
    try {
      const newComment = await Comment.create({
        userId: req.session.user.id,
        articleId,
        commentText,
      });
      res.json({
        data: {
          ...newComment.dataValues,
          User: {
            name: req.session.user.name,
          },
        },
      });
    } catch (error) {
      res.json({
        error: error.message,
      });
    }
  });
