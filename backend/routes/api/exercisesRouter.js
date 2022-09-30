const exercisesRouter = require('express').Router();

const { Exercise } = require('../../db/models');


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
  });
