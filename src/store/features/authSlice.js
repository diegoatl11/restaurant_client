import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userId: null,
    username: null,
    roles: [],
    isAuthenticated: false,
    loading: true 
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, { payload }) => {
            state.userId = payload.userId;
            state.username = payload.username;
            state.roles = payload.roles || [];
            state.isAuthenticated = true;
            state.loading = false;
        },
        userInfo: (state, { payload }) => {
            state.userId = payload.userId;
            state.username = payload.username;
            state.roles = payload.roles || [];
            state.isAuthenticated = true;
            state.loading = false;
        },
        logout: (state) => {
            state.userId = null;
            state.username = null;
            state.roles = [];
            state.isAuthenticated = false;
            state.loading = false;
        }

    },
});

export const { login, userInfo, logout } = authSlice.actions;
export default authSlice.reducer;
