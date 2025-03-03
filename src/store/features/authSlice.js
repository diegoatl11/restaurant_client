import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userId: null,
    username: null,
    roles: [],
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        credential: (state, { payload }) => {
            state.userId = payload.userId;
            state.username = payload.username;
            state.roles = payload.roles || [];
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.userId = null;
            state.username = null;
            state.roles = [];
            state.isAuthenticated = false;
        }

    },
});

export const { credential, logout } = authSlice.actions;
export default authSlice.reducer;
