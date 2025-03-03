import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userId: null,
    username: null,
    email: null,
    dateCreate: null,
    phone: null,
    firstName: null,
    lastName: null,
    dni: null
};

const userSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        setUser: (state, { payload }) => {
            state.userId = payload.userId;
            state.username = payload.username;
            state.email = payload.email;
            state.dateCreate = payload.dateCreate;
            state.phone = payload.phone;
            state.firstName = payload.firstName;
            state.lastName = payload.lastName;
            state.dni = payload.dni;
        },
        clearUser: () => initialState,
    },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
