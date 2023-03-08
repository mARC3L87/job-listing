import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';

export const filteredJobsSlice = createSlice({
  name: 'filteredJobs',
  initialState: [],
  reducers: {
    addData: (state, action: PayloadAction<any>) => {
      return (state = action.payload);
    },
  },
});

export const { addData } = filteredJobsSlice.actions;

export default filteredJobsSlice.reducer;
