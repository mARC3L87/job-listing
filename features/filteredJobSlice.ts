import { createAction, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';
import { jobData } from './jobDataSlice';

export interface filterJobs {
  jobsData: jobData[] | any;
  keyword: string[] | any;
  filter: jobData[] | null;
}
const initialState: filterJobs = {
  jobsData: [],
  keyword: null,
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
    addKeyword: (state, action: PayloadAction<string>) => {
      if (state.keyword === null) {
        return {
          ...state,
          keyword: [action.payload],
        };
      }
      return {
        ...state,
        keyword: Array.from(new Set([...state.keyword, action.payload])),
      };
    },
  },
});

export const { addData, filterByLanguage, addKeyword } =
  filteredJobsSlice.actions;
export const selectFilterdJobs = (state: RootState) => state.filteredJobs;
export const selectKeywords = (state: RootState) => state.filteredJobs.keyword;
export default filteredJobsSlice.reducer;
