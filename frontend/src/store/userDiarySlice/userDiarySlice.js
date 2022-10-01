import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  allnotes: [],
  error: null,
};

export const loadUserDiaryNotesAsync = createAsyncThunk(
  'allnotes/loadUserDiaryArticlesAsync',
  async () => {
    const response = await fetch('/userdiary');
    if (response.status >= 400) {
      const { error } = await response.json();
      throw error;
    } else {
      const data = await response.json();
      return data;
    }
  }
);

export const deleteOneNoteAsync = createAsyncThunk(
  'allnotes/deleteOneNoteAsync',
  async (noteId) => {
    const response = await fetch(`/userdiary/${noteId}`, {
      method: 'DELETE',
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

const userDiarySlice = createSlice({
  name: 'allnotes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadUserDiaryNotesAsync.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(loadUserDiaryNotesAsync.fulfilled, (state, action) => {
        state.allnotes = action.payload;
      })
      .addCase(deleteOneNoteAsync.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteOneNoteAsync.fulfilled, (state, action) => {
        if (action.payload.data) {
          state.allnotes = state.allnotes.filter(
            (note) => note.id !== Number(action.payload.id)
          );
        }
      });
  },
});

export default userDiarySlice.reducer;
