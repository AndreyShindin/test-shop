import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { actionArray, IproductsState } from "../models/models";


export const fetchProduct: any = createAsyncThunk(
    'main-reducer/fetchProduct',
    async (local: string, {rejectWithValue, getState}) => {
        try {
            
            const response = await fetch(`http://localhost:3001${local}`);
            if(!response.ok) {
                throw new Error("Server Error!");
            }
            
            const data = await response.json()

            return {data, local}

        } catch (error: any) {
            return rejectWithValue(error.message)
        }
      
    }
  )

  

const initialState: IproductsState = { 
    livingroom: [],
    bedroom: [],
    kitchen: [],
    bathroom: [],
    wardrobe: [],
    garden: [],
    historybye: [],
    favorite: [],
    cart: [],
    offers: [],
    products: [],
    status: {
        statusEvent: '',
        error: '',
    },
}

const mainReducer = createSlice({
    name: 'main-reducer',
    initialState,
    reducers: {
        addProductFavorite: (state, favoriteProd) => {
            state.favorite.push(favoriteProd.payload)
            console.log(favoriteProd.payload)
        },
        addProductBasket: (state, product) => {
            state.cart.push(product.payload)
        }
    },
    extraReducers: {
        [fetchProduct.pending]: (state, action: PayloadAction<string>) => {
            state.status.statusEvent = 'loading';
            state.status.error = null;
        },
        [fetchProduct.fulfilled]: (state, action: PayloadAction<actionArray>) => {
            let link: string = action.payload.local.slice(1);
            
            state.status.statusEvent = 'resolved';
            state[link] = action.payload.data;
            state.products = action.payload.data;
        },
        [fetchProduct.rejected]: (state, action: PayloadAction<string>) => {
            state.status.statusEvent = 'rejected';
            state.status.error = action.payload;
        },
    }
});

export default mainReducer.reducer;

export const { addProductFavorite, addProductBasket } = mainReducer.actions;

