import { IProduct } from './cartReducer';
import { createSlice } from "@reduxjs/toolkit"

interface IprevState {
    garder: Array<IProduct>,
    kitchen: Array<IProduct>,
    livingRoom: Array<IProduct>,
    bedRoom: Array<IProduct>,
    wardrobe: Array<IProduct>,
    bathRoom: Array<IProduct>
}

const initialState: IprevState = {
    garder: [
        {id: Math.round(Math.random()*100), name: 'Товар garder', price: 32, imageUrl: '', description: ''},
        {id: Math.round(Math.random()*100), name: 'Товар garder', price: 45, imageUrl: '', description: ''},
        {id: Math.round(Math.random()*100), name: 'Товар garder', price: 212, imageUrl: '', description: ''},
        {id: Math.round(Math.random()*100), name: 'Товар garder', price: 11, imageUrl: '', description: ''},
        {id: Math.round(Math.random()*100), name: 'Товар garder', price: 5, imageUrl: '', description: ''},
    ],
    kitchen: [
        {id: Math.round(Math.random()*100), name: 'Товар kitchen', price: 76, imageUrl: '', description: ''},
        {id: Math.round(Math.random()*100), name: 'Товар kitchen', price: 9, imageUrl: '', description: ''},
        {id: Math.round(Math.random()*100), name: 'Товар kitchen', price: 45, imageUrl: '', description: ''},
        {id: Math.round(Math.random()*100), name: 'Товар kitchen', price: 3, imageUrl: '', description: ''},
        {id: Math.round(Math.random()*100), name: 'Товар kitchen', price: 90, imageUrl: '', description: ''},
    ],
    livingRoom: [
        {id: Math.round(Math.random()*100), name: 'Товар livingRoom', price: 87, imageUrl: '', description: ''},
        {id: Math.round(Math.random()*100), name: 'Товар livingRoom', price: 235, imageUrl: '', description: ''},
        {id: Math.round(Math.random()*100), name: 'Товар livingRoom', price: 34, imageUrl: '', description: ''},
        {id: Math.round(Math.random()*100), name: 'Товар livingRoom', price: 57, imageUrl: '', description: ''},
        {id: Math.round(Math.random()*100), name: 'Товар livingRoom', price: 6512, imageUrl: '', description: ''},
    ],
    bedRoom: [
        {id: Math.round(Math.random()*100), name: 'Товар bedRoom', price: 534, imageUrl: '', description: ''},
        {id: Math.round(Math.random()*100), name: 'Товар bedRoom', price: 12, imageUrl: '', description: ''},
        {id: Math.round(Math.random()*100), name: 'Товар bedRoom', price: 4312, imageUrl: '', description: ''},
        {id: Math.round(Math.random()*100), name: 'Товар bedRoom', price: 39, imageUrl: '', description: ''},
        {id: Math.round(Math.random()*100), name: 'Товар bedRoom', price: 454, imageUrl: '', description: ''},
    ],
    wardrobe: [
        {id: Math.round(Math.random()*100), name: 'Товар wardrobe', price: 32, imageUrl: '', description: ''},
        {id: Math.round(Math.random()*100), name: 'Товар wardrobe', price: 675, imageUrl: '', description: ''},
        {id: Math.round(Math.random()*100), name: 'Товар wardrobe', price: 21, imageUrl: '', description: ''},
        {id: Math.round(Math.random()*100), name: 'Товар wardrobe', price: 56, imageUrl: '', description: ''},
        {id: Math.round(Math.random()*100), name: 'Товар wardrobe', price: 7, imageUrl: '', description: ''},
    ],
    bathRoom: [
        {id: Math.round(Math.random()*100), name: 'Товар bathRoom', price: 23, imageUrl: '', description: ''},
        {id: Math.round(Math.random()*100), name: 'Товар bathRoom', price: 43, imageUrl: '', description: ''},
        {id: Math.round(Math.random()*100), name: 'Товар bathRoom', price: 54, imageUrl: '', description: ''},
        {id: Math.round(Math.random()*100), name: 'Товар bathRoom', price: 655, imageUrl: '', description: ''},
        {id: Math.round(Math.random()*100), name: 'Товар bathRoom', price: 87, imageUrl: '', description: ''},
    ]
}

const mainReducer = createSlice({
    name: 'main-reduser',
    initialState,
    reducers: {

    }
});

export default mainReducer.reducer;

export const {  } = mainReducer.actions;

