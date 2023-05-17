import { configureStore } from '@reduxjs/toolkit';
import exercisesSlice from './exercisesSlice/exerciseSlice';
import userSliceReducer from './userSlice/userSlice';
import moodSliceReducer from './moodSlice/moodSlice';
import articlesSlice from './articlesSlice/articlesSlice';
import chatsSliceReducer from './chatsSlice/chatsSlice';
import userDiarySlice from './userDiarySlice/userDiarySlice';
import commentsSliceReducer from './commentsSlice/commentsSlice';
import welcomeTestSlice from './welcomeTestSlice/welcomeTestSlice';
import testRorshahaSlice from './testRorshahaSlice/testRorshahaSlice';

const store = configureStore({
  reducer: {
    exercises: exercisesSlice,
    user: userSliceReducer,
    mood: moodSliceReducer,
    articles: articlesSlice,
    chats: chatsSliceReducer,
    userDiary: userDiarySlice,
    comments: commentsSliceReducer,
    welcomeTest: welcomeTestSlice,
    testRorshaha: testRorshahaSlice,
  },
});

export default store;
