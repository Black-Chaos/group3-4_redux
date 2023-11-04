import { configureStore } from "@reduxjs/toolkit";
import { userSliceReducer } from "./users/slice";

export const store = configureStore({
    reducer: {
        users: userSliceReducer
    },
})