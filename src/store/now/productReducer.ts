import { createSlice } from "@reduxjs/toolkit"

// Список избранного
// Корзина

interface Iprod {
    favoritesProd: Array<any>,
    basketProd: Array<any>,
    value: number,
}

const initialState: Iprod = {
    favoritesProd: [],
    basketProd: [],
    value: 0
}

const productReducer = createSlice({
    name: 'product-reducer',
    initialState,
    reducers: {
        addProductFavorite: (state, favoriteProd) => {
            state.favoritesProd.push(favoriteProd.payload)
        },
        addProductBasket: (state, product) => {
            state.basketProd.push(product.payload)
            console.log(state.basketProd)
        }
    }
});

export default productReducer.reducer;

export const { addProductFavorite, addProductBasket } = productReducer.actions;

