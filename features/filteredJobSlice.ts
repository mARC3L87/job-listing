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
    filterByLanguage: (state, action: PayloadAction<[]>) => {
      return {
        ...state,
        filter: [
          ...state.jobsData.filter((job: any) => {
            const regexp = new RegExp(action.payload.join('|'), 'ig');
            const arr = Object.values(job).flat().join(',');
            if (arr.match(regexp)) {
              return job;
            } else {
              return null;
            }
          }),
        ],
      };
    },
    filterByRole: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        filter: [
          ...state.jobsData.filter((job: any) =>
            job.role.includes(action.payload) ? job : null
          ),
        ],
      };
    },
    clearFilteredArray: (state) => {
      return {
        ...state,
        filter: [],
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
    removeKeywords: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        keyword: state.keyword.filter(
          (word: string, index: number) => index !== action.payload
        ),
      };
    },
  },
});

export const {
  addData,
  filterByLanguage,
  addKeyword,
  removeKeywords,
  clearFilteredArray,
  filterByRole,
} = filteredJobsSlice.actions;
export const selectFilterdJobs = (state: RootState) => state.filteredJobs;
export const selectKeywords = (state: RootState) => state.filteredJobs.keyword;
export default filteredJobsSlice.reducer;
