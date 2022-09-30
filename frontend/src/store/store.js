import { configureStore } from '@reduxjs/toolkit';
import exercisesSlice from './Exercises/exerciseSlice';

import userSliceReducer from './userSlice/userSlice';

const store = configureStore({
  reducer: {
    exersices: exercisesSlice,
    user: userSliceReducer,
  },
});

export default store;
