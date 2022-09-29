const authRouter = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

authRouter.post('/registration', async (req, res) => {
  try {
    const {
      name, email, password, repeatPass,
    } = req.body;

    if (
      name.length < 1
      || email.length < 1
      || password.length < 1
      || repeatPass.length < 1
    ) {
      return res.json({ message: 'Заполните все поля' });
    }
    if (await User.findOne({ where: { email } })) {
      return res.json({ message: 'Пользователь с таким email уже существует' });
    }
    if (password.length < 7) {
      return res.json({ message: 'Минимальная длина пароля - 8 символов' });
    }
    if (password !== repeatPass) {
      return res.json({ message: 'Пароли не совпадают' });
    }
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      res.json({
        message: 'Почта должна быть указана в формате email@mail.com',
      });
      return;
    }
    if (!password || !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password)) {
      res.json({
        message:
          'Пароль должен быть не менее 8 символов, а также содержать не менее одной цифры, одной прописной и одной строчной буквы',
      });
      return;
    }

    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({
      password: hash,
      email,
      name,
      isAdmin: false,
      secretWord: '',
      status: true,
    });

    req.session.user = {
      id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      secretWord: user.secretWord,
      status: user.status,
    };

    res.json({ user: req.session.user });
  } catch (error) {
    res.json({ error: error.message });
  }
});

