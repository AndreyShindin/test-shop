import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    categories: [
        {id: 1, name: 'Кровать', price: 23463, imageUrl: 'https://i.pinimg.com/736x/58/be/d5/58bed5c15abf833f5229928bdf4eb5c0--couch.jpg'},
        {id: 2, name: 'Стул', price: 2313, imageUrl: 'https://i.pinimg.com/736x/58/be/d5/58bed5c15abf833f5229928bdf4eb5c0--couch.jpg'},
        {id: 3, name: 'Шкаф', price: 83242, imageUrl: 'https://i.pinimg.com/736x/58/be/d5/58bed5c15abf833f5229928bdf4eb5c0--couch.jpg'},
        {id: 4, name: 'Диван', price: 2312, imageUrl: 'https://i.pinimg.com/736x/58/be/d5/58bed5c15abf833f5229928bdf4eb5c0--couch.jpg'},
        {id: 5, name: 'Кресло', price: 832642, imageUrl: 'https://i.pinimg.com/736x/58/be/d5/58bed5c15abf833f5229928bdf4eb5c0--couch.jpg'},
    ]
}

const cartReducer = createSlice({
    name: 'home-reduser',
    initialState,
    reducers: {
        
    }
});

export default cartReducer.reducer;

export const {  } = cartReducer.actions;

