import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  moodSmiley: [],
  moodSmileyGraph: [],
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
  console.log(data);
  if (data.error) {
    throw new Error(data.error);
  } else {
    return data.data;
  }
});
const addSmiley = createAsyncThunk('mood/addSmiley', async (smiley) => {
  const response = await fetch('/mood', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ smiley }),
  });
  // if (response.status >= 400) {
  //   const { error } = await response.json();
  //   throw error;
  // } else {
  const data = await response.json();
  return data.data;
  // }
});
// const loadSmileyUserLk = createAsyncThunk(
//   'mood/loadSmileyUserLk',
//   async () => {}
// );

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
      })
      .addCase(addSmiley.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addSmiley.fulfilled, (state, action) => {
        state.moodSmileyGraph.push(action.payload);
      });
  },
});
export default moodSlice.reducer;

export { loadSmiley, addSmiley };
