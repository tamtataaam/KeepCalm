import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const loadComments = createAsyncThunk(
  'comments/loadComments',
  (id) => fetch(`/articles/${id}/comments`)
    .then((response) => response.json())
    .then((body) => {
      if (body.error) {
        throw new Error(body.error);
      }
      return body.data;
    }),
);

const addComment = createAsyncThunk(
  'comments/addComment',
  (data) => fetch(`/articles/${data.articleId}/comments`, {
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

const deleteComment = createAsyncThunk(
  'comments/deleteComment',
  (data) => fetch(`/articles/${data.articleId}/comments`, {
    method: 'DELETE',
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

const changeComment = createAsyncThunk(
  'comments/changeComment',
  (data) => fetch(`/articles/${data.articleId}/comments`, {
    method: 'PUT',
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
      .addCase(loadComments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(loadComments.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(addComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload);
      })
      .addCase(deleteComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.loading = false;
        state.data = state.data
          .filter((comment) => comment.id !== action.payload.commentId);
      })
      .addCase(changeComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(changeComment.fulfilled, (state, action) => {
        state.loading = false;
        state.data = state.data.map((comment) => {
          if (comment.id === action.payload.id) {
            return action.payload;
          }
          return comment;
        });
      });
  }
});

export default commentsSlice.reducer;

export { addComment, loadComments, deleteComment, changeComment };
