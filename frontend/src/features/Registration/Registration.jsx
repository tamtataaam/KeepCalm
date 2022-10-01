/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye, AiTwotoneLock } from 'react-icons/ai';
import { HiUserCircle } from 'react-icons/hi';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { regUser, disableHelpMessage } from '../../store/userSlice/userSlice';
import styleReg from './Registration.module.scss';

function Registration({ setLogin }) {
  const dispatch = useDispatch();
  const isUser = useSelector((state) => state.user.isUser);
  const helpMessage = useSelector((state) => state.user.helpMessage);
  const navigate = useNavigate();
  const [state, setState] = useState(false);
  const [state2, setState2] = useState(false);

  // Удаление helpMessage при размонтировании компонента
  useEffect(() => () => {
    dispatch(disableHelpMessage());
  }, [dispatch]);

  function regSubmit(event) {
    event.preventDefault();
    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
      repeatPassword: event.target.repeatPassword.value,
    };
    dispatch(regUser(data));
  }

  useEffect(() => {
    if (isUser) {
      navigate('/exercises');
    }
  }, [isUser, navigate]);

  const toggleBtn = () => {
    setState((prev) => !prev);
  };

  const toggleBtn2 = () => {
    setState2((prev) => !prev);
  };

  return (
    <div className={styleReg.registration_container}>
      <div className={styleReg.registration_form_div}>
        <form className={styleReg.registration_form} onSubmit={regSubmit}>
          <h2>Регистрация</h2>

          <div>
            <HiUserCircle className={styleReg.icon_user} />
            <input type="text" name="name" id="nameInput" placeholder="Имя" required />
          </div>

          <div>
            <MdOutlineAlternateEmail className={styleReg.icon_email} />
            <input
              type="email"
              name="email"
              id="emailInput"
              placeholder="Email"
              pattern="^\S+@\S+\.\S+$"
              title="Почта должна быть указана в формате email@mail.com"
              required
            />
          </div>

          <div>
            <AiTwotoneLock className={styleReg.icon_lock} />
            <input
              type={state ? 'text' : 'password'}
              name="password"
              id="passwordInput"
              placeholder="Пароль"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Пароль должен быть не менее 8 символов, а также содержать не менее одной цифры, одной прописной и строчной буквы"
              required
            />
            <button type="button" onClick={toggleBtn} className={styleReg.password_button}>
              { state ? <AiOutlineEye /> : <AiOutlineEyeInvisible /> }
            </button>
          </div>

          <div>
            <AiTwotoneLock className={styleReg.icon_lock} />
            <input
              type={state2 ? 'text' : 'password'}
              name="repeatPassword"
              id="repeatPasswordInput"
              placeholder="Повторите пароль"
              required
            />
            <button type="button" onClick={toggleBtn2} className={styleReg.password_button}>
              { state2 ? <AiOutlineEye /> : <AiOutlineEyeInvisible /> }
            </button>
          </div>

          { helpMessage && <div className="helpText">{helpMessage}</div>}
          <button className={styleReg.registration_button} type="submit">Зарегистрироваться</button>
          <div>
            Уже есть аккаунт?
            {' '}
            <Link to={1} onClick={() => setLogin((login) => !login)}>Войди</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
