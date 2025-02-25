import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        credential: (state, action) => {
            state.token = action.payload;
            state.isAuthenticated = true;
        },

    },
});

export const { credential } = authSlice.actions;
export default authSlice.reducer;
