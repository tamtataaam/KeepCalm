const welcometestScoreRouter = require('express').Router();
const { Op } = require('sequelize');
const {
  WelcomeTestScore,
  Condition,
  Recommendation,
  PersonalRecomendationStore,
} = require('../../db/models');

module.exports = welcometestScoreRouter
  .get('/', async (req, res) => {
    try {
      const { id } = req.session.user;
      const allConditions = await WelcomeTestScore.findAll({
        where: { userId: id },
      });
      if (allConditions) {
        res.json({ allConditions, status: true });
      } else {
        res.json({ status: false });
      }
    } catch (error) {
      res.status(500).send(`${error.message}`);
    }
  })
  .post('/', async (req, res) => {
    try {
      const { userId, score } = req.body;
      if (userId === req.session.user.id) {
        if (score <= 48) {
          await WelcomeTestScore.create({
            userId,
            conditionId: 1,
            testScore: score,
          });
          const condition = await Condition.findByPk(1);
          const recommendations = await Recommendation.findAll({
            where: { conditionId: 1 },
          });
          const writeRec = async (rec) => {
            const result = await PersonalRecomendationStore.create({
              userId,
              recommendationId: rec.id,
            });
            return result;
          };
          const newRec = recommendations.map(writeRec);
          res.json({ status: true });
        } else if (score > 48 && score <= 60) {
          await WelcomeTestScore.create({
            userId,
            conditionId: 2,
            testScore: score,
          });
          const condition = await Condition.findByPk(2);
          const recommendations = await Recommendation.findAll({
            where: { conditionId: 2 },
          });
          const writeRec = async (rec) => {
            const result = await PersonalRecomendationStore.create({
              userId,
              recommendationId: rec.id,
            });
            return result;
          };
          const newRec = recommendations.map(writeRec);
          res.json({ status: true });
        } else if (score > 61 && score <= 72) {
          await WelcomeTestScore.create({
            userId,
            conditionId: 3,
            testScore: score,
          });
          const condition = await Condition.findByPk(3);
          const recommendations = await Recommendation.findAll({
            where: { conditionId: 3 },
          });
          const writeRec = async (rec) => {
            const result = await PersonalRecomendationStore.create({
              userId,
              recommendationId: rec.id,
            });
            return result;
          };
          const newRec = recommendations.map(writeRec);
          res.json({ status: true });
        } else {
          await WelcomeTestScore.create({
            userId,
            conditionId: 4,
            testScore: score,
          });
          const condition = await Condition.findByPk(4);
          const recommendations = await Recommendation.findAll({
            where: { conditionId: 4 },
          });
          const writeRec = async (rec) => {
            const result = await PersonalRecomendationStore.create({
              userId,
              recommendationId: rec.id,
            });
            return result;
          };
          const newRec = recommendations.map(writeRec);
          res.json({ status: true });
        }
      } else {
        res.json({ status: false });
      }
    } catch (error) {
      res.status(500).send(`${error.message}`);
    }
  })
  .get('/recommendations', async (req, res) => {
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
        }, 50);

        let recomendations;

        setTimeout(async () => {
          recomendations = await Recommendation.findAll({
            where: {
              id: {
                [Op.in]: recommendationsLast,
              },
            },
            raw: true,
          });
        }, 100);

        setTimeout(() => {
          res.json({ findLast, recomendations, status: true });
        }, 150);
      } else {
        res.json({ status: false });
      }
    } catch (error) {
      res.status(500).send(`${error.message}`);
    }
  });
