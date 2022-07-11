import { createSlice } from "@reduxjs/toolkit"

export interface IProduct {
    id: number,
    name: string,
    price: number,
    imageUrl: string,
    description: string
}

interface ICart {
    previewProduct: Array<IProduct>
}

const initialState: ICart = {
    previewProduct: [
        {id: 1, name: 'Кровать', price: 23463, imageUrl: 'https://i.pinimg.com/736x/58/be/d5/58bed5c15abf833f5229928bdf4eb5c0--couch.jpg', description: ''},
        {id: 2, name: 'Стул', price: 2313, imageUrl: 'https://i.pinimg.com/736x/58/be/d5/58bed5c15abf833f5229928bdf4eb5c0--couch.jpg', description: ''},
        {id: 3, name: 'Шкаф', price: 83242, imageUrl: 'https://i.pinimg.com/736x/58/be/d5/58bed5c15abf833f5229928bdf4eb5c0--couch.jpg', description: ''},
    ]
}

const cartReducer = createSlice({
    name: 'cart-reduser',
    initialState,
    reducers: {
        deleteCartItem: (state, action) => {
            state.previewProduct = state.previewProduct.filter((product) => product.id !== action.payload)
        },
        addCartItem: (state, action) => {
            state.previewProduct.push(action.payload.product);
        }
    }
});

export default cartReducer.reducer;

export const { deleteCartItem, addCartItem } = cartReducer.actions;

