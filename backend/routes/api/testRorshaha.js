const testRorshahaRouter = require('express').Router();
const { TestRorshaha } = require('../../db/models');

testRorshahaRouter.post('/rorschachtest', async (req, res) => {
  try {
    const { user } = req.session;
    const { answerUser } = req.body;
    const newAnswer = await TestRorshaha.create({
      answerUser,
      userId: user.id,
    });
    res.json({ data: newAnswer });
  } catch (error) {
    res.json({ error: error.message });
  }
});
module.exports = testRorshahaRouter;
