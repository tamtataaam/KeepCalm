import React from 'react';
import { useSelector } from 'react-redux';
import Mood from '../Mood/MoodSmiley';
import MainAuth from './MainAuth';
// import MainUser from './MainUser';

function Main() {
  const user = useSelector((store) => store.user.isUser);

  return (
    <div>
      { user ? <Mood /> : <MainAuth /> }
    </div>
  );
}
export default Main;
