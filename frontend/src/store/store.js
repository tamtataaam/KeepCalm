import { configureStore } from '@reduxjs/toolkit';
import exerciseSlice from './Exercises/exerciseSlice';

const store = configureStore({
  reducer: {
    exersices: exerciseSlice,
  },
});

export default store;
