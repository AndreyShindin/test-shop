import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    isActive: false
}

const userReducer = createSlice({
    name: 'cart-reduser',
    initialState,
    reducers: {
        inputUser: (state) => {
            state.isActive = true
        }
    }
});

export default userReducer.reducer;

export const { inputUser } = userReducer.actions;

