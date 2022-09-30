const exercisesRouter = require('express').Router();

const { Exercise, FavoriteExercise } = require('../../db/models');

module.exports = exercisesRouter
  .get('/', async (req, res) => {
    try {
      const allExercises = await Exercise.findAll();
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
      console.log(userId, exerciseId);
      const findFavorite = await FavoriteExercise.findOne({
        where: { userId, exerciseId },
      });
      if (findFavorite) {
        const deleteFavorite = await FavoriteExercise.destroy({
          where: {
            userId,
            exerciseId,
          },
        });
        res.json({ userId, exerciseId, status: false });
      } else {
        const favoriteExercise = await FavoriteExercise.create({
          userId,
          exerciseId,
        });
        res.json({ favoriteExercise, status: true });
      }
    } catch (error) {
      res.status(500).send(`${error.message}`);
    }
  });
