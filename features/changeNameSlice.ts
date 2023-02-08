import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';

interface ChangeName {
  name: string;
}

const initialState: ChangeName = {
  name: 'Tom',
};

export const changeNameSlice = createSlice({
  name: 'change',
  initialState,
  reducers: {
    change: (state) => {
      state.name === 'Tom' ? (state.name = 'Mike') : (state.name = 'Tom');
    },
  },
});

export const { change } = changeNameSlice.actions;
export const selectName = (state: RootState) => state.changeName.name;
export default changeNameSlice.reducer;
