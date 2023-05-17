import { AiOutlineEyeInvisible, AiOutlineEye, AiTwotoneLock } from 'react-icons/ai';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logUser, disableHelpMessage } from '../../store/userSlice/userSlice';
import style from './Login.module.scss';

function Login({ setLogin }) {
  const dispatch = useDispatch();
  const isUser = useSelector((state) => state.user.isUser);
  const helpMessage = useSelector((state) => state.user.helpMessage);
  const navigate = useNavigate();
  const [state, setState] = useState(false);

  useEffect(
    () => () => {
      dispatch(disableHelpMessage());
    },
    [dispatch],
  );

  function logSubmit(event) {
    event.preventDefault();
    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    dispatch(logUser(data));
  }

  useEffect(() => {
    if (isUser) {
      navigate('/welcome');
    }
  }, [isUser, navigate]);

  const toggleBtn = () => {
    setState((prev) => !prev);
  };

  return (
    <div className="login_container">
      <div className="login_form_div">
        <form className={style.login_form} onSubmit={logSubmit}>
          <h2 className={style.h2}>Вход</h2>

          <div>
            <MdOutlineAlternateEmail className={style.icon_email} />
            <input
              className={style.input}
              type="email"
              name="email"
              id="emailInput"
              placeholder="Email"
              pattern="^\S+@\S+\.\S+$"
              title="Почта должна быть указана в формате email@mail.com"
              required
            />
          </div>

          <div className="password_input">
            <AiTwotoneLock className={style.icon_lock} />
            <input
              className={style.input}
              type={state ? 'text' : 'password'}
              name="password"
              id="passwordInput"
              placeholder="Пароль"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Пароль должен быть не менее 8 символов, а также содержать не менее одной цифры, одной прописной и строчной буквы"
              required
            />
            <button type="button" onClick={toggleBtn} className={style.password_button}>
              { state ? <AiOutlineEye /> : <AiOutlineEyeInvisible /> }
            </button>
          </div>

          {helpMessage && <div className="helpText">{helpMessage}</div>}
          <button className={style.button} type="submit">
            Войти
          </button>
          <div className={style.link}>
            Нет аккаунта?
            {' '}
            <Link to={1} onClick={() => setLogin((login) => !login)}>Зарегистрируйся</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
