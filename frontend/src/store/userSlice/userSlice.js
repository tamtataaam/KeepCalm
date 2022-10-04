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

const loadUser = createAsyncThunk('user/loadUser', () =>
  fetch('/api/auth')
    .then((response) => response.json())
    .then((body) => {
      if (!body.isUser) {
        throw new Error(body.isUser);
      }
      return body.loadUser;
    })
);

const regUser = createAsyncThunk('user/regUser', (data) =>
  fetch('/api/auth/registration', {
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
    })
);

const logUser = createAsyncThunk('user/logUser', (data) =>
  fetch('/api/auth/login', {
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
      return body;
    })
);

const logoutUser = createAsyncThunk(
  'user/logoutUser',
  () => fetch('/api/auth/logout', {
    method: 'delete',
  })
    .then((response) => response.json())
    .then((body) => {
      if (body.error) {
        throw new Error(body.error);
      }
      return body.message;
    }),
);

const EditInfo = createAsyncThunk('user/EditInfo',
  async (info) => {
    const response = await fetch('/api/useredit/info', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(info)
    });
    const data = await response.json();
    return data;
  });

const passwordEdit = createAsyncThunk('user/passwordEdit',
  async (pass) => {
    const response = await fetch('/api/useredit/password', {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(pass)
    });
    const data = await response.json();
    if (data.message) {
      throw new Error(data.message);
    }
    return data.status;
  });

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
        state.data.id = action.payload.id;
        state.data.name = action.payload.name;
        state.data.email = action.payload.email;
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
        state.data.id = action.payload.id;
        state.data.name = action.payload.name;
        state.data.email = action.payload.email;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isUser = false;
        state.data = {
          id: null,
          name: null,
          email: null,
        };
      })
      .addCase(EditInfo.rejected, (state, action) => {
        state.helpMessage = action.error.message;
      })
      .addCase(EditInfo.fulfilled, (state, action) => {
        state.data.name = action.payload.name;
        state.data.email = action.payload.email;
      })
      .addCase(passwordEdit.rejected, (state, action) => {
        state.helpMessage = action.error.message;
      })
      .addCase(passwordEdit.fulfilled, (state) => {
        state.helpMessage = 'Пароль успешно изменён!';
      });
  }
});

export default userSlice.reducer;

export const { disableHelpMessage } = userSlice.actions;

export { loadUser, regUser, logUser, logoutUser, EditInfo, passwordEdit };
