const articlesRouter = require('express').Router();

const { Article } = require('../../db/models');

module.exports = articlesRouter.get('/', async (req, res) => {
  try {
    const allArticles = await Article.findAll();
    // console.log(allArticles);
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
  });
