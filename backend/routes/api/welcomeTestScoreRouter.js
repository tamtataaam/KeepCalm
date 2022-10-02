const welcometestScoreRouter = require('express').Router();
const {
  WelcomeTestScore,
  Condition,
  Recommendation,
} = require('../../db/models');

module.exports = welcometestScoreRouter
  .get('/', async (res, req) => {
    try {
      const allConditions = await WelcomeTestScore.findAll({});
      req.json(allConditions);
    } catch (error) {
      res.status(500).send(`${error.message}`);
    }
  })
  .post('/', async (req, res) => {
    try {
      const { userId, score } = req.body;
      console.log(userId, score);
      if (score <= 17) {
        await WelcomeTestScore.create({
          userId,
          conditionId: 1,
          testScore: score,
        });
        const condition = await Condition.findByPk(1);
        const recommendations = await Recommendation.findAll({
          where: { conditionId: 1 },
        });
        res.json({ condition, recommendations });
      } else if (score > 17 && score <= 25) {
        await WelcomeTestScore.create({
          userId,
          conditionId: 2,
          testScore: score,
        });
        const condition = await Condition.findByPk(2);
        const recommendations = await Recommendation.findAll({
          where: { conditionId: 2 },
        });
        res.json({ condition, recommendations });
      } else if (score > 15 && score <= 37) {
        await WelcomeTestScore.create({
          userId,
          conditionId: 3,
          testScore: score,
        });
        const condition = await Condition.findByPk(2);
        const recommendations = await Recommendation.findAll({
          where: { conditionId: 3 },
        });
        res.json({ condition, recommendations });
      } else {
        await WelcomeTestScore.create({
          userId,
          conditionId: 4,
          testScore: score,
        });
        const condition = await Condition.findByPk(2);
        const recommendations = await Recommendation.findAll({
          where: { conditionId: 4 },
        });
        res.json({ condition, recommendations });
      }
    } catch (error) {
      res.status(500).send(`${error.message}`);
    }
  });
