/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  articles: null,
  oneArticleInfo: null,
  error: null,
};

export const loadAsyncArticles = createAsyncThunk(
  'articles/loadAsyncArticles',
  async () => {
    const response = await fetch('/articles');
    if (response.status >= 400) {
      const { error } = await response.json();
      throw error;
    } else {
      const data = await response.json();
      return data;
    }
  }
);

export const oneArticleAsyncInfo = createAsyncThunk(
  'oneArticleInfo/oneArticleAsyncInfo',
  async (articleId) => {
    const response = await fetch(`/articles/${articleId}`);
    if (response.status >= 400) {
      const { error } = await response.json();
      throw error;
    } else {
      const data = await response.json();
      return data;
    }
  }
);

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadAsyncArticles.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(
        loadAsyncArticles.fulfilled, (state, action) => {
          state.articles = action.payload;
        })
      .addCase(oneArticleAsyncInfo.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(oneArticleAsyncInfo.fulfilled, (state, action) => {
        state.oneArticleInfo = action.payload;
      });
  },
});

export default articlesSlice.reducer;
