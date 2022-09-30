/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  exercises: [],
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
      console.log(data);
      return data.exercise;
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
      .addCase(
        loadAsyncExercises.fulfilled,
        (state, action) => (state.exercises = action.payload)
      );
  },
});

export default exercisesSlice.reducer;
