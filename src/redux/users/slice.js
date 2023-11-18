import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addUser,
  getAllUsers,
  getUserDetailsById,
  removeUser,
  updateUser,
} from './operations';

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
      .addCase(getAllUsers.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(getUserDetailsById.fulfilled, (state, { payload }) => {
        state.currentUser = payload;
      })
      .addCase(removeUser.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(({ id }) => id !== payload);
      })
      .addCase(addUser.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        const idx = state.items.findIndex(item => item.id === payload.id);
        state.items[idx] = payload;
      })
      .addMatcher(
        isAnyOf(
          getAllUsers.pending,
          getUserDetailsById.pending,
          removeUser.pending,
          addUser.pending,
          updateUser.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          getAllUsers.rejected,
          getUserDetailsById.rejected,
          removeUser.rejected,
          addUser.rejected,
          updateUser.rejected
        ),
        (state, { payload }) => {
          state.error = payload;
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          getAllUsers.fulfilled,
          getUserDetailsById.fulfilled,
          removeUser.fulfilled,
          addUser.fulfilled,
          updateUser.fulfilled
        ),
        state => {
          state.error = null;
          state.isLoading = false;
        }
      ),
});

export const userSliceReducer = usersSlice.reducer;
