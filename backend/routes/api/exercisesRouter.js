const exercisesRouter = require('express').Router();
const { Exercise, FavoriteExercise } = require('../../db/models');

module.exports = exercisesRouter
  .get('/', async (req, res) => {
    try {
      const allExercises = await Exercise.findAll({ order: [['id', 'ASC']] });
      res.json(allExercises);
    } catch (error) {
      res.status(500).send(`${error.message}`);
    }
  })
  .get('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const oneExercise = await Exercise.findByPk(id);
      res.json(oneExercise);
    } catch (error) {
      res.status(500).send(`${error.message}`);
    }
  })
  .post('/favorite', async (req, res) => {
    try {
      const { userId, exerciseId } = req.body;
      const findFavorite = await FavoriteExercise.findOne({
        where: { userId, exerciseId },
      });
      if (findFavorite) {
        if (findFavorite.status) {
          findFavorite.status = false;
          await findFavorite.save();
          res.json(findFavorite);
        } else {
          findFavorite.status = true;
          await findFavorite.save();
          res.json(findFavorite);
        }
      } else {
        const favoriteExercise = await FavoriteExercise.create({
          userId,
          exerciseId,
          status: true,
        });
        res.json(favoriteExercise);
      }
    } catch (error) {
      res.status(500).send(`${error.message}`);
    }
  });
