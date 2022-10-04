const likesRouter = require('express').Router();
const { Like } = require('../../db/models');

module.exports = likesRouter

  .get('/', async (req, res) => {
    try {
      const allLikes = await Like.findAll();
      // order: [['id', 'ASC']],
      res.json(allLikes);
    } catch (error) {
      res.status(500).send(`${error.message}`);
    }
  })

  .post('/', async (req, res) => {
    try {
      const { userId, articleId } = req.body;
      const isLiked = await Like.findOne({
        where: { userId, articleId },
      });
      if (isLiked) {
        await Like.destroy({ where: { id: isLiked.id } });
        res.json(isLiked.id);
      } else {
        const likeCreate = await Like.create({ userId, articleId });
        res.json({ data: likeCreate.dataValues });
      }
    } catch (error) {
      res.json({ error: error.message });
    }
  });
