import { IproductsState, actionArray, Iproduct } from './../../models/models';
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

// Список избранного
// Корзина
export const fetchProduct: any = createAsyncThunk(
    'main-reducer/fetchProduct',
    async (local) => {
      const response = await fetch(`http://localhost:3001${local}`)
      const data = await response.json()
      return data
    }
  )




const initialState = {
    product: {}
}

const productReducer = createSlice({
    name: 'product-reducer',
    initialState,
    reducers: {
        addProductFavorite: (state, favoriteProd) => {
            state.products.push(favoriteProd.payload)
            console.log(favoriteProd.payload)
        },
        addProductBasket: (state, product) => {
            state.products.push(product.payload)
        }
    },
    extraReducers: {
        [fetchProduct.pending]: (state, action: PayloadAction<string>) => {
            state.status.statusEvent = 'loading';
            state.status.error = null;
        },
        [fetchProduct.fulfilled]: (state, action: PayloadAction<actionArray>) => {
            state.status.statusEvent = 'resolved';
            state.products = action.payload;
        },
        [fetchProduct.rejected]: (state, action: PayloadAction<string>) => {},
    }
});

export default productReducer.reducer;

export const { addProductFavorite, addProductBasket } = productReducer.actions;

