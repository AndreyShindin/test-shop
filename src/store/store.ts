import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cartReducer"
import headerReduser from "./headerReduser"

const store = configureStore({
    reducer: {
        header: headerReduser,
        cart: cartReducer,
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch