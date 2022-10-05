const userrecomendationsstoreRouter = require('express').Router();

const { PersonalRecomendationStore } = require('../../db/models');

module.exports = userrecomendationsstoreRouter.get('/', async (req, res) => {
  try {
    const { id } = req.session.user;
    const allRecommendationsFromStore =
      await PersonalRecomendationStore.findAll({
        where: { userId: id },
        order: [['id', 'ASC']],
        raw: true,
      });
    res.json(allRecommendationsFromStore);
  } catch (error) {
    res.status(500).send(`${error.message}`);
  }
});
