import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadAsyncExercises } from '../store/Exercises/exerciseSlice';
import Layout from './Layout/Layout';
import UserPage from './UserPage/UserPage';
import Registration from './Registration/Registration';

import Main from './Main/Main';
import './App.css';
import Exercises from './Exercises/Exercises';

function App() {
  // Alinas's part start
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAsyncExercises());
  }, []);
  // Alinas's part end
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/:login" element={<UserPage />} />
        <Route path="home" element={<Main />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/registration" element={<Registration />} />
        {/* <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notfound" element={<Error404 />} />
        <Route path="*" element={<Error404 />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
