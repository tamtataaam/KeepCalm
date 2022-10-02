const usersRouter = require('express').Router();
const { Op } = require('sequelize');
const { UserMood, Mood } = require('../../db/models');

usersRouter.get('/', async (req, res) => {
  try {
    const { user } = req.session;

    const personSmiley = await UserMood.findAll({
      where: { userId: user.id },
      raw: true,
    });
    // console.log(personSmiley);
    const idArr = personSmiley.map((el) => el.moodId);
    const smales = await Mood.findAll({
      where: { id: { [Op.in]: idArr } },
      raw: true,
    });
    const allSmilesfilter = idArr.map((el) => smales.filter((e) => el === e.id));
    const smilesUsers = allSmilesfilter.flat();
    // const allSmiley = smilesUsers.map((el) => el);
    // console.log(smilesUsers);
    res.json({ data: smilesUsers });
  } catch (error) {
    res.json(error.message);
  }
});

module.exports = usersRouter;
