import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  data: {
    id: null,
    name: null,
    email: null,
  },
  isUser: null,
  helpMessage: null,
  error: null,
};

const regUser = createAsyncThunk(
  'user/regUser',
  (data) => fetch('/auth/registration', {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((body) => {
      if (body.error) {
        throw new Error(body.error);
      }
      if (body.message) {
        throw new Error(body.message);
      }
      return body.user;
    }),
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    disableHelpMessage: (state) => {
      state.helpMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(regUser.rejected, (state, action) => {
        state.helpMessage = action.error.message;
      })
      .addCase(regUser.fulfilled, (state, action) => {
        state.isUser = true;
        state.data = action.payload;
      });
  },
});

// Экспорт reducer-функции
export default userSlice.reducer;

// Экспорт action creator-функций
export const { disableHelpMessage } = userSlice.actions;

// Экспорт action creator-функций (thunk)
export { regUser };
