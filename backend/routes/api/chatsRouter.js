const exercisesRouter = require('express').Router();

const { Chat } = require('../../db/models');

module.exports = exercisesRouter
  .get('/', async (req, res) => {
    try {
      const allExercises = await Chat.findAll();
      res.json(allExercises);
    } catch (error) {
      res.status(500).send(`${error.message}`);
    }
  })
  .get('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const oneExercise = await Chat.findByPk(id);
      res.json(oneExercise);
    } catch (error) {
      res.status(500).send(`${error.message}`);
    }
  });
