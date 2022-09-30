import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  moodSmiley: [],
  error: null,
};

const loadSmiley = createAsyncThunk('mood/loadSmiley', async () => {
  const res = await fetch('/mood', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  });
  const data = await res.json();

  if (data.error) {
    throw new Error(data.error);
  } else {
    return data.data;
  }
});

const moodSlice = createSlice({
  name: 'mood',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loadSmiley.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(loadSmiley.fulfilled, (state, action) => {
        state.moodSmiley = action.payload;
      });
  },
});
export default moodSlice.reducer;

export { loadSmiley };
