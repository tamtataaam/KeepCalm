import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  allChats: [],
  chatInfo: null,
  error: null,
};

export const loadChats = createAsyncThunk(
  'chats/loadChats',
  async () => {
    const response = await fetch('/chats');
    if (response.status >= 400) {
      const { error } = await response.json();
      throw error;
    } else {
      const data = await response.json();
      return data;
    }
  }
);

const chatsSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadChats.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(loadChats.fulfilled, (state, action) => {
        state.allChats = action.payload;
      });
  },
});

export default chatsSlice.reducer;
