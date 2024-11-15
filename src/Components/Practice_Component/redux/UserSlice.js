import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: 1
}

export const UserSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addData: (state) => {
            console.log('add data called ' + state);
            // state.data = [...initialState.data, { id: 1, name: 'John' }]
        },
    },
})

// Action creators are generated for each case reducer function
export const { addData } = UserSlice.actions

export default UserSlice.reducer