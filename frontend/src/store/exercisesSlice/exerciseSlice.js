import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  allExercises: [],
  favoriteExercise: [],
  favoriteExerciseActual: {},
  oneExerciseInfo: null,
  loading: true,
  error: null,
};

export const loadAsyncExercises = createAsyncThunk(
  'exercises/loadAsyncExercises',
  async () => {
    const response = await fetch('/exercises');
    if (response.status >= 400) {
      const { error } = await response.json();
      throw error;
    } else {
      const data = await response.json();
      return data;
    }
  }
);

export const oneExerciseAsyncInfo = createAsyncThunk(
  'oneExerciseInfo/oneExerciseAsyncInfo',
  async (exerciseId) => {
    const response = await fetch(`/exercises/${exerciseId}`);
    if (response.status >= 400) {
      const { error } = await response.json();
      throw error;
    } else {
      const data = await response.json();
      return data;
    }
  }
);
export const loadAllFavoriteExrcisesAsync = createAsyncThunk(
  'favoriteExercise/loadAllFavoriteExrcisesAsync',
  async () => {
    const response = await fetch('/allfavorite');
    if (response.status >= 400) {
      const { error } = await response.json();
      throw error;
    } else {
      const data = await response.json();
      return data;
    }
  }
);

export const addToFavoriteAsync = createAsyncThunk(
  'favoriteExercise/addToFavoriteAsync',
  async ({ userId, exerciseId }) => {
    const response = await fetch('/allfavorite', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, exerciseId }),
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
export const deleteToFavoriteAsync = createAsyncThunk(
  'favoriteExercise/deleteToFavoriteAsync',
  async ({ userId, exerciseId }) => {
    const response = await fetch('/allfavorite', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, exerciseId }),
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

const exercisesSlice = createSlice({
  name: 'allExercises',
  initialState,
  reducers: {
    clearlastExercise: (state) => {
      state.oneExerciseInfo = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadAsyncExercises.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(loadAsyncExercises.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadAsyncExercises.fulfilled, (state, action) => {
        state.loading = false;
        state.allExercises = action.payload;
      })
      .addCase(oneExerciseAsyncInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(oneExerciseAsyncInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.oneExerciseInfo = action.payload;
      })
      .addCase(loadAllFavoriteExrcisesAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(loadAllFavoriteExrcisesAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.favoriteExercise = action.payload;
      })
      .addCase(addToFavoriteAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addToFavoriteAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.favoriteExercise.push(action.payload.favoriteExercise);
      })
      .addCase(deleteToFavoriteAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteToFavoriteAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.favoriteExercise = state.favoriteExercise.filter(
          (favorite) => favorite.exerciseId !== action.payload.exerciseId
        );
        state.favoriteExerciseActual = action.payload;
      });
  },
});

export default exercisesSlice.reducer;
export const { clearlastExercise } = exercisesSlice.actions;
