import { configureStore } from '@reduxjs/toolkit';
import moodSliceReducer from './moodSlice/moodSlice';

const store = configureStore({
  reducer: {
    mood: moodSliceReducer,
  },
});

export default store;
