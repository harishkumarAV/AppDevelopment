import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice"; 
import jobReducer from './jobSlice';
import SearchSlice from "./SearchSlice";
import jobPostingsSlice from "./jobPostingsSlice";

export default configureStore({
  reducer: {
    user: userSlice.reducer, 
    job: jobReducer,
    jobPostings: jobPostingsSlice.reducer,
    Searchjob: SearchSlice.reducer,
  },
});
