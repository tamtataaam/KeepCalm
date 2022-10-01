/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-no-undef */
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadAsyncExercises } from '../store/exercisesSlice/exerciseSlice';
import { loadAsyncArticles } from '../store/articlesSlice/articlesSlice';
import { loadUser } from '../store/userSlice/userSlice';
import { loadSmiley, addSmiley } from '../store/moodSlice/moodSlice';
import { loadChats } from '../store/chatsSlice/chatsSlice';
import Layout from './Layout/Layout';
import UserPage from './UserPage/UserPage';
import Mood from './Mood/MoodSmiley';
import Registration from './Registration/Registration';
import Login from './Login/Login';
// import Main from './Main/Main';
import Exercises from './Exercises/Exercises';
import ExerciseFullInformation from './Exercises/ExerciseFullInformation';
import ArticlesPage from './ArticlesPage/ArticlesPage';
import OneArticlePage from './ArticlesPage/OneArticlePage';
import ChatsPage from './Chats/ChatsPage';
import MainAuth from './Main/MainAuth';
import './App.css';
import AddChatPage from './Chats/AddChatPage';
import UserDiary from './UserDiary/UserDiary';
import { loadUserDiaryNotesAsync } from '../store/userDiarySlice/userDiarySlice';

function App() {
  const { isUser } = useSelector((store) => store.user);

  // Alinas's part start
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAsyncExercises());
    dispatch(loadAsyncArticles());
    dispatch(loadUserDiaryNotesAsync());
    dispatch(loadUser());
    dispatch(loadSmiley());
    dispatch(addSmiley());
    dispatch(loadChats());
  }, []);
  // Alinas's part end
  return (
    <>
      {isUser ? (
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Route index element={<Main />} /> */}
            <Route index element={<Exercises />} />
            <Route path="/lk" element={<UserPage />} />
            <Route path="/mood" element={<Mood />} />
            <Route path="/exercises" element={<Exercises />} />
            <Route path="/exercises/:id" element={<ExerciseFullInformation />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/articles/:id" element={<OneArticlePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/chats" element={<ChatsPage />} />
            <Route path="/addchat" element={<AddChatPage />} />
            <Route path="/userdiary" element={<UserDiary />} />
          </Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainAuth />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
