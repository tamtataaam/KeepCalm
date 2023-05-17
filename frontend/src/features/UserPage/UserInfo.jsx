import React, { useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
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
      <div className={style.userPhoto_info}>
        <Avatar src={user.avatar} sx={{ width: '300px', height: '300px' }} />
      </div>
      <div className={style.my_info}>
        <div>
          <h2 className={style.h4}>Мои данные:</h2>
        </div>
        <div>
          {user && user.name}
        </div>
        <div>
          {user && user.email}
        </div>
      </div>
      <button type="button" className={style.button_edit_page} onClick={() => setInfo((prev) => !prev)}>Редактировать ✐</button>
    </div>
  );
}
export default UserInfo;
