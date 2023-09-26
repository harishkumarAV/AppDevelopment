import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice"; 
import jobReducer from './jobSlice';
import SearchSlice from "./SearchSlice";

export default configureStore({
  reducer: {
    user: userSlice.reducer, 
    job: jobReducer,
    Searchjob: SearchSlice.reducer,
  },
});
