/* eslint-disable consistent-return */
const authRouter = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

authRouter.get('/', async (req, res) => {
  const { user } = req.session;
  if (user) {
    const loadUser = await User.findOne({ where: { id: user.id } });
    res.json({ isUser: true, loadUser });
  } else {
    res.json({ isUser: false });
  }
});

authRouter.post('/registration', async (req, res) => {
  try {
    const {
      name, email, password, repeatPassword,
    } = req.body;

    if (
      name.length < 1
      || email.length < 1
      || password.length < 1
      || repeatPassword.length < 1
    ) {
      return res.json({ message: 'Заполните все поля' });
    }
    if (await User.findOne({ where: { email } })) {
      return res.json({ message: 'Пользователь с таким email уже существует' });
    }
    if (password.length < 7) {
      return res.json({ message: 'Минимальная длина пароля - 8 символов' });
    }
    if (password !== repeatPassword) {
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
      name,
      email,
      password: hash,
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

authRouter.post('/login', async (req, res) => {
  if (req.body.email.length < 1 || req.body.password.length < 1) {
    return res.json({ message: 'Заполните все поля' });
  }

  if (req.body.email.length > 4 && req.body.password.length > 7) {
    let user;
    try {
      user = await User.findOne({
        where: { email: req.body.email },
      });
      if (!user) {
        res.json({ message: 'Неверный email и/или пароль' });
        return;
      }
    } catch (error) {
      res.json({ error: error.message });
      return;
    }
    try {
      const compPass = await bcrypt.compare(req.body.password, user.password);
      if (!compPass) {
        res.json({ message: 'Неверный email и/или пароль' });
        return;
      }
    } catch (error) {
      res.json({ error: error.message });
      return;
    }

    req.session.user = {
      id: user.id,
    };
    res.json(user);
  } else {
    res.json({ message: 'Слишком короткий email и/или пароль' });
  }
});

authRouter.delete('/logout', (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      res.json({ error: 'Не удалось выйти' });
      return;
    }
    res.clearCookie('user_sid');
    res.json({ message: 'success' });
  });
});

module.exports = authRouter;
