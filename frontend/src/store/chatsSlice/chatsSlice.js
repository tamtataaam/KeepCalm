import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  allChats: [],
  error: null,
};

const loadChats = createAsyncThunk(
  'chats/loadChats',
  async () => {
    const response = await fetch('/api/chats');
    if (response.status >= 400) {
      const { error } = await response.json();
      throw error;
    } else {
      const data = await response.json();
      return data;
    }
  }
);

const addChat = createAsyncThunk(
  'chats/addChats',
  async (data) => {
    const response = await fetch('/api/chats/addchat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (response.status >= 400) {
      const { error } = await response.json();
      throw error;
    } else {
      const body = await response.json();
      return body;
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
      })
      .addCase(addChat.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addChat.fulfilled, (state, action) => {
        state.allChats.push(action.payload);
      });
  },
});

export default chatsSlice.reducer;

export { loadChats, addChat };
