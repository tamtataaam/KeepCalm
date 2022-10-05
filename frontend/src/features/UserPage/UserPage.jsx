import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import MoodGraph from '../MoodGraph/MoodGraph';
import UserEdit from './UserEdit';
import UserInfo from './UserInfo';
import style from './UserPage.module.scss';

function UserPage() {
  const user = useSelector((store) => store.user.data);
  const [info, setInfo] = useState(true);
  return (
    <div className={style.main_container}>
      { info
        ? (
          <>
            <div>
              <UserInfo user={user} setInfo={setInfo} />
            </div>
            <div className={style.graph_container}>
              <MoodGraph />
            </div>
          </>
        )
        : <UserEdit user={user} setInfo={setInfo} />}
    </div>
  );
}

export default UserPage;
