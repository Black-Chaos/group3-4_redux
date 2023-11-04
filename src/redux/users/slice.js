import { createSlice } from '@reduxjs/toolkit';
import { getAllUsers } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getAllUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllUsers.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(getAllUsers.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      }),
});

export const userSliceReducer = usersSlice.reducer;