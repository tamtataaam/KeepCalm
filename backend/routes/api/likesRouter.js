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
  });
