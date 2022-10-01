const favoriteExercisesRouter = require('express').Router();
const { FavoriteExercise } = require('../../db/models');

module.exports = favoriteExercisesRouter
  .get('/', async (req, res) => {
    try {
      const allFavorite = await FavoriteExercise.findAll({
        order: [['id', 'ASC']],
      });
      res.json(allFavorite);
    } catch (error) {
      res.status(500).send(`${error.message}`);
    }
  })
  .post('/', async (req, res) => {
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
