import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IPageState {
  page: number;
  rowsPerPage: number;
}

const initialState: IPageState = {
  page: 0,
  rowsPerPage: 10
}

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setRowsPerPage(state, action: PayloadAction<number>) {
      state.rowsPerPage = action.payload;
    },
  }
});

export default pageSlice.reducer;