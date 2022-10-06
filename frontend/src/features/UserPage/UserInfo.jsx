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
      <div className={style.userPhoto}>
        <Avatar src={user.avatar} sx={{ width: '250px', height: '250px' }} />
        {/* <img className={style.userPhoto} src={user.avatar} alt="avatar" /> */}
      </div>

      <div>
        <h4 className={style.h4}>Мои данные:</h4>
      </div>
      <div>
        {user && user.name}
      </div>
      <div>
        {user && user.email}
      </div>
      <button type="button" className={style.button} onClick={() => setInfo((prev) => !prev)}>Редактировать ✐</button>
    </div>
  );
}
export default UserInfo;
