import { createSlice } from "@reduxjs/toolkit";


export const authSlice = createSlice({

    name: 'auth',
        initialState: {
            status: 'not-authenticated',
            uid: null,
            displayName: null,
            email: null,
            phoneNumber: null,
            photoUrl: null,
            errorMessage: null
        },
        reducers: {
            login: (state, {payload}) => {
                state.status = 'authenticated',
                state.uid = payload.uid,
                state.displayName = payload.displayName,
                state.email = payload.email,
                state.phoneNumber = payload.phoneNumber,
                state.photoUrl = payload.photoURL,
                state.errorMessage = null
            },
            logout: (state, {payload}) => {
                state.status = 'not-authenticated',
                state.uid = null,
                state.displayName = null,
                state.email = null,
                state.phoneNumber = null,
                state.photoUrl = null,
                state.errorMessage = payload?.errorMessage
            },
            checkingCredentials: (state)=> {
                state.status = "checking"
            }
        }
})

export const {login, logout, checkingCredentials} = authSlice.actions;