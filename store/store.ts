import { configureStore } from '@reduxjs/toolkit';
import jobDataReducer from '../features/jobDataSlice';

export const store = configureStore({
  reducer: {
    jobData: jobDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
