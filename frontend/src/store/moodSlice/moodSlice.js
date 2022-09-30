import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  moodSmiley: [],
  error: null,
};

const loadSmiley = createAsyncThunk('mood/smiley', () =>
  fetch('/mood')
    .then((response) => response.json())
    .then((body) => {
      if (body.error) {
        throw new Error(body.error);
      }
      return body.data;
    })
);

const moodSlice = createSlice({
  name: 'mood',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loadSmiley.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(loadSmiley.fulfilled, (state, action) => {
        console.log(action);
        state.moodSmiley = action.payload;
      });
  },
});
export default moodSlice.reducer;

export { loadSmiley };
