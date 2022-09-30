const userMoodrout = require('express').Router();
const { Mood, UserMood } = require('../../db/models');

userMoodrout
  .get('/', async (req, res) => {
    try {
      // const { user } = req.session;
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
