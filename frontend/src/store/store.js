import { configureStore } from '@reduxjs/toolkit';
import exercisesSlice from './Exercises/exerciseSlice';
import userSliceReducer from './userSlice/userSlice';
import moodSliceReducer from './moodSlice/moodSlice';

const store = configureStore({
  reducer: {
    exersices: exercisesSlice,
    user: userSliceReducer,
    mood: moodSliceReducer,
  },
});

export default store;
