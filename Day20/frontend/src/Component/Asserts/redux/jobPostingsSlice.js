// jobPostingsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const jobPostingsSlice = createSlice({
  name: 'jobPostings',
  initialState: [],
  reducers: {
    addJobPosting: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addJobPosting } = jobPostingsSlice.actions;
export default jobPostingsSlice.reducer;
