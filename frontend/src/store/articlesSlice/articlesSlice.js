/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  articles: null,
  favoriteArticles: [],
  favoriteArticlesActual: {},
  oneArticleInfo: null,
  loading: true,
  error: null,
};

export const loadAsyncArticles = createAsyncThunk(
  'articles/loadAsyncArticles',
  async () => {
    const response = await fetch('/api/articles');
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
    const response = await fetch(`/api/articles/${articleId}`);
    if (response.status >= 400) {
      const { error } = await response.json();
      throw error;
    } else {
      const data = await response.json();
      return data;
    }
  }
);

export const loadLikes = createAsyncThunk(
  'articles/loadLikes',
  async () => {
    const response = await fetch('/api/favoritearticles');
    if (response.status >= 400) {
      const { error } = await response.json();
      throw error;
    } else {
      const data = await response.json();
      return data;
    }
  }
);

export const toggleLike = createAsyncThunk(
  'articles/toggleLike',
  async ({ userId, articleId }) => {
    const response = await fetch('/api/favoritearticles', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, articleId }),
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

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadAsyncArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(loadAsyncArticles.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadAsyncArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
      })
      .addCase(oneArticleAsyncInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(oneArticleAsyncInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(oneArticleAsyncInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.oneArticleInfo = action.payload;
      })
      .addCase(loadLikes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(loadLikes.fulfilled, (state, action) => {
        state.loading = false;
        state.favoriteArticles = action.payload;
      })
      .addCase(toggleLike.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(toggleLike.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.data) {
          state.favoriteArticles.push(action.payload.data);
          return;
        }
        state.favoriteArticles = state.favoriteArticles
          .filter((favoriteArticle) => favoriteArticle.id !== action.payload);
      });
  },
});

export default articlesSlice.reducer;
