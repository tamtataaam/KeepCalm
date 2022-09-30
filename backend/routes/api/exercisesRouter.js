const exercisesRouter = require('express').Router();

const { Exercise } = require('../../db/models');

module.exports = exercisesRouter.get('/', async (req, res) => {
  try {
    const allExercises = await Exercise.findAll();
    console.log(allExercises);
    res.json(allExercises);
  } catch (error) {
    res.status(500).send(`${error.message}`);
  }
});
