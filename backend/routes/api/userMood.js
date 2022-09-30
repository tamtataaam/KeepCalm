const userMoodrout = require('express').Router();
const { Mood, UserMood } = require('../../db/models');

userMoodrout.get('/', async (req, res) => {
  try {
    // const { user } = req.session;
    const moodSmile = await Mood.findAll({
      where: { moodId: 1 },
      include: [
        {
          model: UserMood,
          include: UserMood.id,
        },
      ],
    });
    res.json({ data: moodSmile });
  } catch (error) {
    res.json({ error: error.message });
  }
});
module.exports = userMoodrout;
