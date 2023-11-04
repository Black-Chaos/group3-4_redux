import { createSelector } from "@reduxjs/toolkit";

export const selectAllUsers = state => state.users.items;