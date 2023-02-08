import { configureStore } from '@reduxjs/toolkit';
import changeNameReducer from '../features/changeNameSlice';

export const store = configureStore({
  reducer: {
    changeName: changeNameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
