/* eslint-disable consistent-return */
const userMoodrout = require('express').Router();
const { Mood, UserMood } = require('../../db/models');

userMoodrout
  .get('/', async (req, res) => {
    try {
      const moodSmile = await Mood.findAll();
      return res.json({ data: moodSmile });
    } catch (error) {
      res.json({ error: error.message });
    }
  })
  .post('/', async (req, res) => {
    try {
      const { user } = req.session;
      const { smiley } = req.body;

      const findAlllSmiles = await UserMood.findAll({
        where: { userId: user.id },
      });
      const dateNow = new Date().toString().slice(0, 15);
      const findActualSmile = findAlllSmiles.filter(
        (elem) => elem.createdAt.toString().slice(0, 15) === dateNow
      );
      if (findActualSmile) {
        await UserMood.destroy({
          where: { userId: user.id, moodId: findActualSmile[0].moodId },
        });
      }
      const newSmiley = await UserMood.create({
        userId: user.id,
        moodId: smiley,
      });
      res.json({ data: newSmiley });
    } catch (error) {
      res.json({ error: error.message });
    }
  });

module.exports = userMoodrout;
