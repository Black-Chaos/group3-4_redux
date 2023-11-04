import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://653ff24d45bedb25bfc17d6f.mockapi.io/';

export const getAllUsers = createAsyncThunk('users/fetchAllUsers', async (_, { rejectWithValue }) => {
    try {
        const { data } = await axios('users');
        return data
    } catch (error) {
        return rejectWithValue(error)
    }
})