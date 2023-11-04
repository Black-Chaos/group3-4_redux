import { createSlice } from '@reduxjs/toolkit';
import { getAllUsers, getUserDetailsById, removeUser } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  currentUser: null,
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
      })
      .addCase(getUserDetailsById.pending, state => {
        state.isLoading = true;
      })
      .addCase(getUserDetailsById.fulfilled, (state, { payload }) => {
        state.currentUser = payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(getUserDetailsById.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(removeUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(removeUser.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(({ id }) => id !== payload);
        state.error = null;
        state.isLoading = false;
      })
      .addCase(removeUser.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      }),
});

export const userSliceReducer = usersSlice.reducer;
