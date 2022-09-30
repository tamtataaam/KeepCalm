/* eslint-disable operator-linebreak */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  allExercises: [],
  favoriteExercise: [],
  status: false,
  oneExerciseInfo: null,
  error: null,
};

export const loadAsyncExercises = createAsyncThunk(
  'exercises/loadAsyncExercises',
  async () => {
    const response = await fetch('/exercises');
    if (response.status >= 400) {
      const { error } = await response.json();
      throw error;
    } else {
      const data = await response.json();
      return data;
    }
  }
);

export const oneExerciseAsyncInfo = createAsyncThunk(
  'oneExerciseInfo/oneExerciseAsyncInfo',
  async (exerciseId) => {
    const response = await fetch(`/exercises/${exerciseId}`);
    if (response.status >= 400) {
      const { error } = await response.json();
      throw error;
    } else {
      const data = await response.json();
      return data;
    }
  }
);

export const addToFavoriteAsync = createAsyncThunk(
  'favoriteExercise/addToFavoriteAsync',
  async ({ userId, exerciseId }) => {
    const response = await fetch('/exercises/favorite', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, exerciseId }),
    });
    if (response.status >= 400) {
      const { error } = await response.json();
      throw error;
    } else {
      const data = await response.json();
      return data;
    }
  }
);

const exercisesSlice = createSlice({
  name: 'allExercises',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadAsyncExercises.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(loadAsyncExercises.fulfilled, (state, action) => {
        state.allExercises = action.payload;
      })
      .addCase(oneExerciseAsyncInfo.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(oneExerciseAsyncInfo.fulfilled, (state, action) => {
        state.oneExerciseInfo = action.payload;
      })
      .addCase(addToFavoriteAsync.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addToFavoriteAsync.fulfilled, (state, action) => {
        if (action.payload.status) {
          state.favoriteExercise.push(action.payload.favoriteExercise);
        } else {
          state.favoriteExercise.filter(
            (favorite) =>
              favorite.userId !== action.payload.userId &&
              favorite.exerciseId !== action.payload.exerciseId
          );
        }
      });
  },
});

export default exercisesSlice.reducer;
