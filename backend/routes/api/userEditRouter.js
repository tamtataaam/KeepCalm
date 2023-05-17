const userEditRouter = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');
const storageFileupload = require('../../storage/storageFileupload');

userEditRouter.put('/info', async (req, res) => {
  try {
    const { name, email, userid } = req.body;
    const { id } = req.session.user;
    if (id === userid) {
      await User.update({
        name,
        email,
      }, {
        where: { id },
        returning: true,
      });
      const user = {
        name,
        email,
      };
      res.json(user);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

userEditRouter.put('/password', async (req, res) => {
  try {
    const { password, repeatPassword, userid } = req.body;
    const { id } = req.session.user;
    if (id === userid) {
      if (password === repeatPassword) {
        if (password.length > 7) {
          await User.update({
            password: await bcrypt.hash(password, 10),
          }, {
            where: { id },
            returning: true,
          });
          res.json({ status: true });
        } else {
          res.json({ message: 'Минимальная длина пароля - 8 символов' });
        }
      } else { res.json({ message: 'Пароли не совпадают' }); }
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

userEditRouter.put('/photo/:id', async (req, res) => {
  const { id } = req.params;
  const file = req.files;
  const url = await storageFileupload(file);
  await User.update({ avatar: url }, { where: { id } });
  const user = await User.findOne({ where: { id }, raw: true });
  res.json(user);
});

module.exports = userEditRouter;
