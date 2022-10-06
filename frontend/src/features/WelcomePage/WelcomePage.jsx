/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import LoadPage from '../LoadingPage/LoadingPage';
import style from './WelcomePage.module.scss';

function WelcomePage() {
  const user = useSelector((store) => store.user.data);
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // console.log(user);
  // useEffect(() => {
  //   dispatch(loadUser());
  // }, [user]);

  return (
    <>
      {user ? (
        <div className={style.welcome_container}>
          <h1 className={style.h1}>Привет, {user.name}!</h1>
          <h1 className={style.h1}>Добро пожаловать в KeepCalm</h1>
          <h2 className={style.h2}>Ты найдешь здесь спокойствие</h2>
          <div className={style.image_and_btn}>
            <img
              src="welcome_image.svg"
              alt="welcome"
              className={style.welcome_image}
            />
          </div>
          <button
            className={style.white_button}
            type="button"
            onClick={() => navigate('/mood')}
          >
            Начать
          </button>
        </div>
      ) : (
        <LoadPage />
      )}
    </>
  );
}

export default WelcomePage;
