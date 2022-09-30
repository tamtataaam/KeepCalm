import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadAsyncExercises } from '../store/Exercises/exerciseSlice';
import { loadAsyncArticles } from '../store/articlesSlice/articlesSlice';
import Layout from './Layout/Layout';
import UserPage from './UserPage/UserPage';
import Mood from './Mood/MoodSmiley';
import Registration from './Registration/Registration';
import Main from './Main/Main';
import Exercises from './Exercises/Exercises';
import ArticlesPage from './ArticlesPage/ArticlesPage';
import './App.css';

function App() {
  // Alinas's part start
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAsyncExercises());
    dispatch(loadAsyncArticles());
  }, []);
  // Alinas's part end
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/lk/:login" element={<UserPage />} />
        <Route path="home" element={<Main />} />
        <Route path="mood" element={<Mood />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/articles" element={<ArticlesPage />} />

        {/* <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notfound" element={<Error404 />} />
        <Route path="*" element={<Error404 />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
