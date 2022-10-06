import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  recommendations: [],
  conditions: [],
  lastCondition: null,
  error: null,
};

export const loadCondsitionAsync = createAsyncThunk(
  'conditions/loadCondsitionAsync',
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
export const loadRecomendationsAsync = createAsyncThunk(
  'recomendations/loadRecomendationsAsync ',
  async () => {
    const response = await fetch('/userrecomendationsstore');
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

export const loadLastConditionAsync = createAsyncThunk(
  'conditions/loadLastConditionAsync',
  async () => {
    const response = await fetch('/welcometest/recommendations');
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
  name: 'conditions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCondsitionAsync.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(loadCondsitionAsync.fulfilled, (state, action) => {
        if (action.payload.status) {
          state.conditions = action.payload.allConditions;
        } else {
          state.conditions = false;
        }
      })
      .addCase(loadRecomendationsAsync.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(loadRecomendationsAsync.fulfilled, (state, action) => {
        state.recomendations = action.payload;
      })
      .addCase(loadLastConditionAsync.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(loadLastConditionAsync.fulfilled, (state, action) => {
        if (action.payload.status) {
          state.lastCondition = action.payload.findLast;
          state.recommendations = action.payload.recomendations;
        } else {
          state.lastCondition = false;
        }
      });
  },
});

export default welcomeTestSlice.reducer;
