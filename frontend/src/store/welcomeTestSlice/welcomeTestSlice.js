import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  recomendations: [],
  conditions: [],
  error: null,
};

export const loadCondsitionAsync = createAsyncThunk(
  'score/loadCondsitionAsync',
  async () => {
    const response = await fetch('/welcometest');
    if (response.status >= 400) {
      const { error } = await response.json();
      throw error;
    } else {
      const data = await response.json();
      return data;
    }
  }
);

export const addScoreAsync = createAsyncThunk(
  'score/addScoreAsync',
  async ({ score, userId }) => {
    const response = await fetch('/welcometest', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ score, userId }),
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

const welcomeTestSlice = createSlice({
  name: 'allnotes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCondsitionAsync.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(loadCondsitionAsync.fulfilled, (state, action) => {
        state.conditions = action.payload;
      })
      .addCase(addScoreAsync.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addScoreAsync.fulfilled, (state, action) => {
        state.recomendations = action.payload.recomendations;
      });
  },
});

console.log(initialState);

export default welcomeTestSlice.reducer;
