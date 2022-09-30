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

const loadUser = createAsyncThunk(
  'user/loadUser',
  () => fetch('/auth')
    .then((response) => response.json())
    .then((body) => {
      if (!body.isUser) {
        throw new Error(body.isUser);
      }
      return body.user;
    }),
);

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

const logUser = createAsyncThunk(
  'user/logUser',
  (data) => fetch('/auth/login', {
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
      .addCase(loadUser.rejected, (state) => {
        state.isUser = false;
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.isUser = true;
        state.data = action.payload;
      })
      .addCase(regUser.rejected, (state, action) => {
        state.helpMessage = action.error.message;
      })
      .addCase(regUser.fulfilled, (state, action) => {
        state.isUser = true;
        state.data = action.payload;
      })
      .addCase(logUser.rejected, (state, action) => {
        state.helpMessage = action.error.message;
      })
      .addCase(logUser.fulfilled, (state, action) => {
        state.isUser = true;
        state.data = action.payload;
      });
  },
});

export default userSlice.reducer;

export const { disableHelpMessage } = userSlice.actions;

export { loadUser, regUser, logUser };
