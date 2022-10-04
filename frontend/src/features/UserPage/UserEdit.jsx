import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EditInfo, passwordEdit } from '../../store/userSlice/userSlice';

function UserEdit({ user, setInfo }) {
  const helpMessage = useSelector((state) => state.user.helpMessage);
  const dispatch = useDispatch();
  const EditUser = (e) => {
    e.preventDefault();

    const info = {
      name: e.target.name.value,
      email: e.target.email.value,
      userid: user.id
    };
    dispatch(EditInfo(info));
    setInfo((prev) => !prev);
  };
  const EditPassword = (e) => {
    const pass = {
      password: e.target.password.value,
      repeatPassword: e.target.repeatPassword.value,
      userid: user.id
    };
    dispatch(passwordEdit(pass));
    e.preventDefault();
  };

  return (
    <>
      <div>
        {(user && user.photo)
          ? <img src={user.photo} alt="avatar" />
          : <img src="no_avatar.webp" alt="avatar" />}
      </div>
      <form onSubmit={EditUser}>
        <input type="text" name="name" defaultValue={user.name} required />
        <input
          type="email"
          name="email"
          defaultValue={user.email}
          pattern="^\S+@\S+\.\S+$"
          title="Почта должна быть указана в формате email@mail.com"
          required
        />
        <button type="submit">Изменить</button>
      </form>

      <form onSubmit={EditPassword}>
        <input
          type="password"
          name="password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Пароль должен быть не менее 8 символов, а также содержать не менее одной цифры, одной прописной и строчной буквы"
        />
        <input type="password" name="repeatPassword" />
        <button type="submit">Изменить пароль</button>
      </form>
      { helpMessage ? <div className="helpText">{helpMessage}</div> : <div />}
    </>
  );
}
export default UserEdit;
