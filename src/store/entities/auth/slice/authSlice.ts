import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthSchema } from "../types/AuthSchema";


const initialState: AuthSchema = {
    username: '',
    password: ''
};

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    // extraReducers(builders){
    //     builders
        
    // } 
})

export const { actions: authActions, reducer: authReducer } = authSlice;