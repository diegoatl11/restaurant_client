import { configureStore } from "@reduxjs/toolkit";
import { thunk } from 'redux-thunk';
import authReducer from "./features/authSlice";
import userReducer from "./features/userSlice";
export const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});