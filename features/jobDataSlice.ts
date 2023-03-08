import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';
import data from '../public/data.json';

export interface jobData {
  id: number | string;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

const initialState: jobData[] = data;

export const jobDataSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    filterByLanguage: (state: any, action: PayloadAction<string>) => {
      return [
        ...state.filter((job: any) =>
          job.languages.includes(action.payload) ? job : null
        ),
      ];
    },
  },
});

export const selectAllJobs = (state: RootState) => state.jobData;
export const { filterByLanguage } = jobDataSlice.actions;

export default jobDataSlice.reducer;
