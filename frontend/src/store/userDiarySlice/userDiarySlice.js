import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  allnotes: [],
  error: null,
};

export const loadUserDiaryNotesAsync = createAsyncThunk(
  'allnotes/loadUserDiaryArticlesAsync',
  async () => {
    const response = await fetch('/diarynotes');
    if (response.status >= 400) {
      const { error } = await response.json();
      throw error;
    } else {
      const data = await response.json();
      return data;
    }
  }
);

const userDiarySlice = createSlice({
  name: 'allExercises',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadUserDiaryNotesAsync.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(loadUserDiaryNotesAsync.fulfilled, (state, action) => {
        state.allnotes = action.payload;
      });
  },
});

export default userDiarySlice.reducer;
