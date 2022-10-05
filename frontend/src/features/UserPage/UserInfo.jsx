import React from 'react';
// , { useState }
// import { NavLink } from 'react-router-dom';
import style from './UserPage.module.scss';

function UserInfo({ user, setInfo }) {
  return (
    <div className={style.user_info_container}>
      <div>
        <img src={user.avatar} alt="avatar" />
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
