import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { loadSmileyUserLk } from '../../store/moodSlice/moodSlice';

import MoodGraph from '../MoodGraph/MoodGraph';
import LastRecommend from './LastRecommend';
import UserEdit from './UserEdit';
import UserInfo from './UserInfo';
// import Recommendations from '../WelcomeTest/Recommendations';
import style from './UserPage.module.scss';

function UserPage() {
  const user = useSelector((store) => store.user.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSmileyUserLk());
  }, []);

  const [info, setInfo] = useState(true);
  return (
    <div className={style.grand_main_container}>
      <div className={style.main_container}>
        <div className={style.lk_user_page}>
          {!info ? (
            <UserEdit user={user} setInfo={setInfo} />
          ) : (
            <UserInfo user={user} setInfo={setInfo} />
          )}
        </div>
        <div className={style.graph_container}>
          <MoodGraph />
        </div>
        <div className={style.rec_and_fav_div}>
          <LastRecommend />
        </div>
      </div>
    </div>
  );
}

export default UserPage;
