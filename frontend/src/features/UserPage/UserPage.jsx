import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import MoodGraph from '../MoodGraph/MoodGraph';
import style from './UserPage.module.scss';

function UserPage() {
  const user = useSelector((store) => store.user.data);

  return (
    <div className={style.main_container}>
      <div className={style.graph_container}>
        <MoodGraph />
      </div>

      <div className={style.user_info_container}>
        <div>
          {(user && user.photo)
            ? <img src={user.photo} alt="avatar" />
            : <img src="avatar.png" alt="avatar" />}
        </div>

        <div>
          <h4 className="my_data">Мои данные</h4>
          <NavLink className="edit_btn font_button" to="/settings">Редактировать ✐</NavLink>
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
      </div>

    </div>
  );
}

export default UserPage;
