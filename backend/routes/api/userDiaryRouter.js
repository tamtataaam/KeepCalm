const userDiaryRouter = require('express').Router();
const { UserDiary } = require('../../db/models');

module.exports = userDiaryRouter
  .get('/', async (req, res) => {
    try {
      const { user } = req.session;
      const allnotes = await UserDiary.findAll({
        where: { userId: user.id },
        order: [['id', 'DESC']],
      });
      res.json(allnotes);
    } catch (error) {
      res.status(500).send(`${error.message}`);
    }
  })
  .delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { userId } = req.body;
      if (userId === req.session.user.id) {
        await UserDiary.destroy({ where: { id, userId } });
        res.json({ id });
      } else {
        res.json({ status: false });
      }
    } catch (error) {
      res.status(500).send(`${error.message}`);
    }
  })
  .post('/newnote', async (req, res) => {
    try {
      const { title, content, userId } = req.body;
      if (userId === req.session.user.id) {
        const newnote = await UserDiary.create({ title, content, userId });
        res.json(newnote);
      } else {
        res.json({ status: false });
      }
    } catch (error) {
      res.status(500).send(`${error.message}`);
    }
  })
  .put('/note', async (req, res) => {
    try {
      const { userId, noteId, changeInputTitle, changeInputContent } = req.body;
      if (userId === req.session.user.id) {
        const note = await UserDiary.findOne({
          where: {
            userId,
            id: noteId,
          },
        });
        note.title = changeInputTitle;
        note.content = changeInputContent;
        await note.save();
        res.json(note.dataValues);
      } else {
        res.json({ status: false });
      }
    } catch (error) {
      res.status(500).send(`${error.message}`);
    }
  });
