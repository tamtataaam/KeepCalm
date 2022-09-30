const userMoodrout = require('express').Router();
const { Mood } = require('../../db/models');

userMoodrout.get('/', async (req, res) => {
  try {
    // const { user } = req.session;
    const moodSmile = await Mood.findAll();
    return res.json({ data: moodSmile });
  } catch (error) {
    res.json({ error: error.message });
  }
});
module.exports = userMoodrout;
