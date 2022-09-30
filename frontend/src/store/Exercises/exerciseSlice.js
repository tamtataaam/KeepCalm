/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  allExercises: [],
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

const exercisesSlice = createSlice({
  name: 'exercises',
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
      });
  },
});

export default exercisesSlice.reducer;
