import { configureStore } from '@reduxjs/toolkit';
import exercisesSlice from './exercisesSlice/exerciseSlice';
import userSliceReducer from './userSlice/userSlice';
import moodSliceReducer from './moodSlice/moodSlice';
import articlesSlice from './articlesSlice/articlesSlice';
import chatsSliceReducer from './chatsSlice/chatsSlice';

const store = configureStore({
  reducer: {
    exercises: exercisesSlice,
    user: userSliceReducer,
    mood: moodSliceReducer,
    articles: articlesSlice,
    chats: chatsSliceReducer,
  },
});

export default store;
