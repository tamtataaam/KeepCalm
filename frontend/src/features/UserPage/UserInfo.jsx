import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadUser } from '../../store/userSlice/userSlice';
import style from './UserPage.module.scss';

function UserInfo({ user, setInfo }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <div className={style.user_info_container}>
      <div>
        <img className={style.userPhoto} src={user.avatar} alt="avatar" />
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
