const chatsRouter = require('express').Router();

const { Chat } = require('../../db/models');

module.exports = chatsRouter
  .get('/', async (req, res) => {
    try {
      const allChats = await Chat.findAll();
      res.json(allChats);
    } catch (error) {
      res.status(500).send(`${error.message}`);
    }
  })

  .get('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const oneChat = await Chat.findByPk(id);
      res.json(oneChat);
    } catch (error) {
      res.status(500).send(`${error.message}`);
    }
  })

  .post('/addchat', async (req, res) => {
    const { title, telegramUrl } = req.body;
    try {
      const newChat = await Chat.create({
        userId: req.session.user.id,
        title,
        telegramUrl,
      });
      res.json(newChat);
    } catch (error) {
      res.status(500).send(`${error.message}`);
    }
  });
