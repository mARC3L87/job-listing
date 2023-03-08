import { configureStore } from '@reduxjs/toolkit';
import jobDataReducer from '../features/jobDataSlice';
import filteredJobReducer from '../features/filteredJobSlice';

export const store = configureStore({
  reducer: {
    jobData: jobDataReducer,
    filteredJobs: filteredJobReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
