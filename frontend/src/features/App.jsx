/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadAllFavoriteExrcisesAsync } from '../store/exercisesSlice/exerciseSlice';
import { loadUser } from '../store/userSlice/userSlice';
import { loadSmiley, addSmiley } from '../store/moodSlice/moodSlice';
import { loadUserDiaryNotesAsync } from '../store/userDiarySlice/userDiarySlice';
import { loadChats } from '../store/chatsSlice/chatsSlice';
import {
  loadCondsitionAsync,
  loadRecomendationsAsync,
} from '../store/welcomeTestSlice/welcomeTestSlice';
import Layout from './Layout/Layout';
import UserPage from './UserPage/UserPage';
import Mood from './Mood/MoodSmiley';
import Registration from './Registration/Registration';
import Login from './Login/Login';
import Exercises from './Exercises/Exercises';
import ExerciseFullInformation from './Exercises/ExerciseFullInformation';
import ArticlesPage from './ArticlesPage/ArticlesPage';
import OneArticlePage from './ArticlesPage/OneArticlePage';
import ChatsPage from './Chats/ChatsPage';
import MainAuth from './Main/MainAuth';
import AddChatPage from './Chats/AddChatPage';
import UserDiary from './UserDiary/UserDiary';
import Meditation from './Meditation/Meditation';
import WelcomePage from './WelcomePage/WelcomePage';
import './App.css';
import WelcomeTest from './WelcomeTest/WelcomeTest';
import Recommendations from './WelcomeTest/Recommendations';
import BreathExercise from './BreathExercise/BreathExercise';
import TestRorshaha from './testRorshaha/testRorshaha';
import SleepPage from './SleepPage/SleepPage';
import PsychologistPage from './PsychologistPage/PsychologistPage';
import TestPreview from './WelcomeTest/TestPreview';
import ErrorPage from './ErrorPage/ErrorPage';
import LoadingPage from './LoadingPage/LoadingPage';

function App() {
  const { isUser } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, []);

  useEffect(() => {
    if (isUser) {
      dispatch(loadUserDiaryNotesAsync());
      dispatch(loadSmiley());
      dispatch(addSmiley());
      dispatch(loadChats());
      dispatch(loadCondsitionAsync());
      dispatch(loadAllFavoriteExrcisesAsync());
      dispatch(loadRecomendationsAsync());
    }
  }, [isUser]);

  if (isUser === null) {
    return <LoadingPage />;
  }

  return (
    <>
      {isUser ? (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<WelcomePage />} />
            <Route path="/mood" element={<Mood />} />
            <Route path="/lk" element={<UserPage />} />
            <Route path="/exercises" element={<Exercises />} />
            <Route
              path="/exercises/:id"
              element={<ExerciseFullInformation />}
            />
            <Route path="/registration" element={<Registration />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/articles/:id" element={<OneArticlePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/chats" element={<ChatsPage />} />
            <Route path="/addchat" element={<AddChatPage />} />
            <Route path="/userdiary" element={<UserDiary />} />
            <Route path="/welcometest" element={<WelcomeTest />} />
            <Route path="/rorschachtest" element={<TestRorshaha />} />
            <Route path="*" element={<ErrorPage />} />

            <Route path="/testpreview" element={<TestPreview />} />
            <Route
              path="/welcometest/recommendations"
              element={<Recommendations />}
            />
            <Route path="/search" element={<PsychologistPage />} />
            <Route path="/breath" element={<BreathExercise />} />
          </Route>
          <Route path="/meditation" element={<Meditation />} />
          <Route path="/sleep" element={<SleepPage />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainAuth />} />
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
