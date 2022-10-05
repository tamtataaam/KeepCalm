import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  allnotes: [],
  error: null,
};

export const loadUserDiaryNotesAsync = createAsyncThunk(
  'allnotes/loadUserDiaryArticlesAsync',
  async () => {
    const response = await fetch('/api/userdiary');
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
  async ({ noteId, userId }) => {
    const response = await fetch(`/api/userdiary/${noteId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId }),
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

export const addOneNoteAsync = createAsyncThunk(
  'allnotes/addOneNoteAsync',
  async ({ title, content, userId }) => {
    const response = await fetch('/api/userdiary/newnote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content, userId }),
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

export const changeOneNoteAsync = createAsyncThunk(
  'allnotes/changeOneNoteAsync',
  async ({ userId, noteId, changeInputTitle, changeInputContent }) => {
    const response = await fetch('/api/userdiary/note', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId,
        noteId,
        changeInputTitle,
        changeInputContent,
      }),
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
        if (action.payload.id) {
          state.allnotes = state.allnotes.filter(
            (note) => note.id !== Number(action.payload.id)
          );
        }
      })
      .addCase(addOneNoteAsync.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addOneNoteAsync.fulfilled, (state, action) => {
        state.allnotes.unshift(action.payload);
      })
      .addCase(changeOneNoteAsync.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(changeOneNoteAsync.fulfilled, (state, action) => {
        state.allnotes = state.allnotes.map((note) =>
          note.id === action.payload.id ? action.payload : note
        );
      });
  },
});

export default userDiarySlice.reducer;
