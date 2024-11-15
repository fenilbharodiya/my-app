import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counterSlice'
import  UserSlice from './UserSlice';

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        users: UserSlice
    },
});