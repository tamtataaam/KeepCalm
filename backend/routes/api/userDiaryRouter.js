const userDiaryRouter = require('express').Router();
const { UserDiary } = require('../../db/models');

module.exports = userDiaryRouter
  .get('/', async (req, res) => {
    try {
      const allnotes = await UserDiary.findAll({ order: [['id', 'DESC']] });
      res.json(allnotes);
    } catch (error) {
      res.status(500).send(`${error.message}`);
    }
  })
  .delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const data = await UserDiary.destroy({ where: { id } });
      res.json({ data, id });
    } catch (error) {
      res.status(500).send(`${error.message}`);
    }
  });
