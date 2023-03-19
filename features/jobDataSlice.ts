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
  reducers: {},
});

export const selectAllJobs = (state: RootState) => state.jobData;

export default jobDataSlice.reducer;
