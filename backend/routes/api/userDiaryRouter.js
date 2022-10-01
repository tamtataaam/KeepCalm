const userDiaryRouter = require('express').Router();
const { UserDiary } = require('../../db/models');

module.exports = userDiaryRouter.get('/', async (req, res) => {
  try {
    const allnotes = await UserDiary.findAll({ order: [['id', 'ASC']] });
    res.json(allnotes);
  } catch (error) {
    res.status(500).send(`${error.message}`);
  }
});
