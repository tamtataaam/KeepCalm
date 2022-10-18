import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  answer: [],
  error: null,
};

const addAnswerTestRorshaha = createAsyncThunk(
  'answer/addAnswerTestRorshaha',
  async (answerUser) => {
    const response = await fetch('/api/rorschachtest', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ answerUser }),
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
const testRorshahaSlice = createSlice({
  name: 'answer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addAnswerTestRorshaha.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addAnswerTestRorshaha.fulfilled, (state, action) => {
        state.answer.push(action.payload);
      });
  },
});
export default testRorshahaSlice.reducer;
export { addAnswerTestRorshaha };
