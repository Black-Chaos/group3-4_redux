import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://653ff24d45bedb25bfc17d6f.mockapi.io/';

export const getAllUsers = createAsyncThunk(
  'users/fetchAllUsers',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios('users');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getUserDetailsById = createAsyncThunk(
  'users/fetchUserById',
  async (userId, { rejectWithValue }) => {
    try {
      const { data } = await axios(`users/${userId}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const removeUser = createAsyncThunk(
  'users/removeUser',
  async (userId, { rejectWithValue }) => {
    try {
      await axios.delete(`users/${userId}`);
      return userId;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
