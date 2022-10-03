import React from 'react';
import MoodGraph from '../MoodGraph/MoodGraph';
import style from './UserPage.module.scss';

function UserPage() {
  return (
    <div className={style.graph_container}>
      <MoodGraph />
    </div>
  );
}

export default UserPage;
