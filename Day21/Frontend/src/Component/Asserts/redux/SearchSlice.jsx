// In your SearchSlice.js
import { createSlice } from '@reduxjs/toolkit';

const SearchSlice = createSlice({
  name: 'Searchjob',
  initialState: {
    jobs: [],
  },
  reducers: {
    addJob: (state, action) => {
      state.jobs.push(action.payload);
    },
    setJobPostings: (state, action) => {
      state.jobs = action.payload;
    },
  },
});

export const { addJob, setJobPostings } = SearchSlice.actions;

export default SearchSlice;
