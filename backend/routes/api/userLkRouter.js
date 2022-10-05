const userLkRouter = require('express').Router();
const { UserMood } = require('../../db/models');

userLkRouter.get('/', async (req, res) => {
  try {
    const { user } = req.session;
    const personSmiley = await UserMood.findAll({
      where: { userId: user.id },
      raw: true,
    });
    res.json(personSmiley);
  } catch (error) {
    res.json(error.message);
  }
});

module.exports = userLkRouter;
