const userrecomendationsstoreRouter = require('express').Router();
const { Op } = require('sequelize');
const {
  PersonalRecomendationStore,
  WelcomeTestScore,
  Condition,
  Recommendation,
} = require('../../db/models');

module.exports = userrecomendationsstoreRouter
  .get('/', async (req, res) => {
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
  })
  .get('/lastcondition', async (req, res) => {
    try {
      const { id } = req.session.user;
      const allConditionsUser = await WelcomeTestScore.findAll({
        where: { userId: id },
        order: [['id', 'ASC']],
        raw: true,
      });

      if (allConditionsUser) {
        const lastCondition =
          allConditionsUser[allConditionsUser.length - 1].conditionId;
        const findLast = await Condition.findByPk(lastCondition);
        const allRecomendationsForUser =
          await PersonalRecomendationStore.findAll({
            where: { userId: id },
            order: [['id', 'DESC']],
            raw: true,
          });
        let recommendationsLast;

        setTimeout(() => {
          recommendationsLast = allRecomendationsForUser
            .slice(0, 3)
            .map((el) => el.recommendationId);
        }, 500);
        const recomendations = await Recommendation.findAll({
          where: {
            id: {
              [Op.in]: recommendationsLast,
            },
          },
          raw: true,
        });

        res.json({ findLast, recomendations, status: true });
      } else {
        res.json({ status: false });
      }
    } catch (error) {
      res.status(500).send(`${error.message}`);
    }
  });
