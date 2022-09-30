import React from 'react';
import { useSelector } from 'react-redux';
import MainAuth from './MainAuth';
import MainUser from './MainUser';

function Main() {
  const user = useSelector((store) => store.user.isUser);

  return (
    <div>
      { user ? <MainUser /> : <MainAuth /> }
    </div>
  );
}
export default Main;
