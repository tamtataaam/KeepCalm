import { configureStore } from '@reduxjs/toolkit';
import exercisesSlice from './Exercises/exerciseSlice';

const store = configureStore({
  reducer: {
    exersices: exercisesSlice,
  },
});

export default store;
