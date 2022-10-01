import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  // loading: false,
  error: null,
};

const addComment = createAsyncThunk(
  'comments/addComment',
  (data) => fetch('/comments', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((body) => {
      if (body.error) {
        throw new Error(body.error);
      }
      return body.data;
    }),
);

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload);
      });
  },
});

export default commentsSlice.reducer;

export { addComment };
