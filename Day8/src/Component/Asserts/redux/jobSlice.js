
import { createSlice } from '@reduxjs/toolkit';

const jobSlice = createSlice({
  name: 'job',
  initialState: [],
  reducers: {
    postJob: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { postJob } = jobSlice.actions;
export default jobSlice.reducer;
