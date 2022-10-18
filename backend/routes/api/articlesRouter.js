const articlesRouter = require('express').Router();

const { Article, Comment, User } = require('../../db/models');

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

  .get('/:id/comments', async (req, res) => {
    const articleId = Number(req.params.id);
    try {
      const comments = await Comment.findAll({
        where: { articleId },
        order: [['createdAt', 'ASC']],
        include: [
          {
            model: User,
            attributes: [
              'name',
            ],
          },
        ],
      });
      const data = comments.map((comment) => comment.dataValues);
      res.json({ data });
    } catch (error) {
      res.json({
        error: error.message,
      });
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
  })

  .put('/:id/comments', async (req, res) => {
    const { commentText, commentId } = req.body;
    try {
      const updatedComment = await Comment.update({
        commentText,
      }, {
        where: { id: commentId },
        returning: true,
      });
      res.json({
        data: {
          ...updatedComment[1][0].dataValues,
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
  })

  .delete('/:id/comments', async (req, res) => {
    const { commentId } = req.body;
    try {
      await Comment.destroy({ where: { id: commentId } });
      res.json({
        data: {
          commentId,
        },
      });
    } catch (error) {
      res.json({
        error: error.message,
      });
    }
  });
