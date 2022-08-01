import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cartReducer"
import headerReduser from "./headerReduser"
import homeReducer from "./homeReducer"
import mainReducer from "./mainReducer"
import productReducer from "./now/productReducer"
import userReducer from "./userReducer"

const store = configureStore({
    reducer: {
        header: headerReduser,
        cart: cartReducer,
        home: homeReducer,
        main: mainReducer,
        user: userReducer,
        product: productReducer,
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch