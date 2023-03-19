import { createAction, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';
import { jobData } from './jobDataSlice';

export interface filterJobs {
  jobsData: jobData[] | any;
  keyword: string[];
  filter: jobData[] | null;
}
const initialState: filterJobs = {
  jobsData: [],
  keyword: [],
  filter: null,
};
export const filteredJobsSlice = createSlice({
  name: 'filteredJobs',
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<any>) => {
      state.jobsData = action.payload;
    },
    filterByLanguage: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        filter: [
          ...state.jobsData.filter((job: any) =>
            job.languages.includes(action.payload) ? job : null
          ),
        ],
      };
    },
  },
});

export const { addData, filterByLanguage } = filteredJobsSlice.actions;
export const selectFilterdJobs = (state: RootState) => state.filteredJobs;
export default filteredJobsSlice.reducer;
