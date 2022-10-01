import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  loadAsyncExercises,
  loadAllFavoriteExrcisesAsync,
} from '../store/exercisesSlice/exerciseSlice';
import { loadAsyncArticles } from '../store/articlesSlice/articlesSlice';
import { loadUser } from '../store/userSlice/userSlice';
import { loadSmiley, addSmiley } from '../store/moodSlice/moodSlice';
import { loadChats } from '../store/chatsSlice/chatsSlice';
import Layout from './Layout/Layout';
import UserPage from './UserPage/UserPage';
import Mood from './Mood/MoodSmiley';
import Registration from './Registration/Registration';
import Login from './Login/Login';
import Main from './Main/Main';
import Exercises from './Exercises/Exercises';
import ExerciseFullInformation from './Exercises/ExerciseFullInformation';
import ArticlesPage from './ArticlesPage/ArticlesPage';
import OneArticlePage from './ArticlesPage/OneArticlePage';
import ChatsPage from './Chats/ChatsPage';
import './App.css';
import UserDiary from './UserDiary/UserDiary';

function App() {
  // Alinas's part start
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAsyncExercises());
    dispatch(loadAllFavoriteExrcisesAsync());
    dispatch(loadAsyncArticles());
    dispatch(loadUser());
    dispatch(loadSmiley());
    dispatch(addSmiley());
    dispatch(loadChats());
  }, []);
  // Alinas's part end
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/lk/:login" element={<UserPage />} />
        <Route path="/mood" element={<Mood />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/exercises/:id" element={<ExerciseFullInformation />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/articles/:id" element={<OneArticlePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chats" element={<ChatsPage />} />
        <Route path="/userdiary" element={<UserDiary />} />

        {/* <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notfound" element={<Error404 />} />
        <Route path="*" element={<Error404 />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
