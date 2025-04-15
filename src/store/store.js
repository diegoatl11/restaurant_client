import { configureStore } from "@reduxjs/toolkit";
import { thunk } from 'redux-thunk';
import authReducer from "./features/authSlice";
export const store = configureStore({
    reducer: {
        auth: authReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});