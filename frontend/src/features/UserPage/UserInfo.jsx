import React from 'react';
// import { NavLink } from 'react-router-dom';
import style from './UserPage.module.scss';

function UserInfo({ user, setInfo }) {
  return (
    <div className={style.user_info_container}>
      <div>
        {(user && user.photo)
          ? <img src={user.photo} alt="avatar" />
          : <img src="no_avatar.webp" alt="avatar" />}
      </div>

      <div>
        <h4 className="my_data">Мои данные</h4>
      </div>
      <div>
        {' '}
        Имя:
        {user && user.name}
      </div>
      <div>
        Почта:
        {user && user.email}
      </div>
      <button type="button" className="edit_btn font_button" onClick={() => setInfo((prev) => !prev)}>Редактировать ✐</button>
    </div>
  );
}
export default UserInfo;
