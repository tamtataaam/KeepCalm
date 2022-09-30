import { configureStore } from '@reduxjs/toolkit';
import exercisesSlice from './Exercises/exerciseSlice';
import userSliceReducer from './userSlice/userSlice';
import moodSliceReducer from './moodSlice/moodSlice';
import articlesSlice from './articlesSlice/articlesSlice';

const store = configureStore({
  reducer: {
    exersices: exercisesSlice,
    user: userSliceReducer,
    mood: moodSliceReducer,
    articles: articlesSlice,
  },
});

export default store;
