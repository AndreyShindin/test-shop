import { IProduct } from './cartReducer';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

type status = {
    statusEvent: string,
    error: null | string,
}

interface IprevState {
    garder: Array<IProduct>,
    kitchen: Array<IProduct>,
    livingRoom: Array<IProduct>,
    bedRoom: Array<IProduct>,
    wardrobe: Array<IProduct>,
    bathRoom: Array<IProduct>,
    status: status,
    products: Array<any>
}

export const fetchProduct: any = createAsyncThunk(
    'main-reducer/fetchProduct',
    async (local) => {
        console.log(`http://localhost:3001${local}`)
      const response = await fetch(`http://localhost:3001${local}`)
      const data = await response.json()
      return data
    }
  )

  

const initialState: IprevState = {
    garder: [
        {id: 12, name: 'Товар garder', price: 32, imageUrl: '', description: ''},
        {id: 13, name: 'Товар garder', price: 45, imageUrl: '', description: ''},
        {id: 14, name: 'Товар garder', price: 212, imageUrl: '', description: ''},
        {id: 15, name: 'Товар garder', price: 11, imageUrl: '', description: ''},
        {id: 16, name: 'Товар garder', price: 5, imageUrl: '', description: ''},
    ],
    kitchen: [
        {id: 12, name: 'Товар kitchen', price: 76, imageUrl: 'https://www.mnogokuhon.ru/upload/resize_cache/iblock/de0/370_240_1/Базис.jpg', description: 'В базовом исполнении Кухня Оливия 10 имеет размеры: ширина: 2300 мм; высота: 2170 мм; глубина 600 мм;'},
        {id: 13, name: 'Товар kitchen', price: 9, imageUrl: 'https://www.mnogokuhon.ru/upload/resize_cache/iblock/de0/370_240_1/Базис.jpg', description: 'В базовом исполнении Кухня Оливия 10 имеет размеры: ширина: 2300 мм; высота: 2170 мм; глубина 600 мм;'},
        {id: 14, name: 'Товар kitchen', price: 45, imageUrl: 'https://www.mnogokuhon.ru/upload/resize_cache/iblock/de0/370_240_1/Базис.jpg', description: 'В базовом исполнении Кухня Оливия 10 имеет размеры: ширина: 2300 мм; высота: 2170 мм; глубина 600 мм;'},
        {id: 15, name: 'Товар kitchen', price: 3, imageUrl: 'https://www.mnogokuhon.ru/upload/resize_cache/iblock/de0/370_240_1/Базис.jpg', description: 'В базовом исполнении Кухня Оливия 10 имеет размеры: ширина: 2300 мм; высота: 2170 мм; глубина 600 мм;'},
        {id: 16, name: 'Товар kitchen', price: 90, imageUrl: 'https://www.mnogokuhon.ru/upload/resize_cache/iblock/de0/370_240_1/Базис.jpg', description: 'В базовом исполнении Кухня Оливия 10 имеет размеры: ширина: 2300 мм; высота: 2170 мм; глубина 600 мм;'},
        {id: 17, name: 'Товар kitchen', price: 45, imageUrl: 'https://www.mnogokuhon.ru/upload/resize_cache/iblock/de0/370_240_1/Базис.jpg', description: 'В базовом исполнении Кухня Оливия 10 имеет размеры: ширина: 2300 мм; высота: 2170 мм; глубина 600 мм;'},
        {id: 18, name: 'Товар kitchen', price: 3, imageUrl: 'https://www.mnogokuhon.ru/upload/resize_cache/iblock/de0/370_240_1/Базис.jpg', description: 'В базовом исполнении Кухня Оливия 10 имеет размеры: ширина: 2300 мм; высота: 2170 мм; глубина 600 мм;'},
        {id: 19, name: 'Товар kitchen', price: 90, imageUrl: 'https://www.mnogokuhon.ru/upload/resize_cache/iblock/de0/370_240_1/Базис.jpg', description: 'В базовом исполнении Кухня Оливия 10 имеет размеры: ширина: 2300 мм; высота: 2170 мм; глубина 600 мм;'},
    ],
    livingRoom: [
        {id: 12, name: 'Товар livingRoom', price: 87, imageUrl: '', description: ''},
        {id: 13, name: 'Товар livingRoom', price: 235, imageUrl: '', description: ''},
        {id: 14, name: 'Товар livingRoom', price: 34, imageUrl: '', description: ''},
        {id: 15, name: 'Товар livingRoom', price: 57, imageUrl: '', description: ''},
        {id: 16, name: 'Товар livingRoom', price: 6512, imageUrl: '', description: ''},
    ],
    bedRoom: [
        {id: 12, name: 'Товар bedRoom', price: 534, imageUrl: '', description: ''},
        {id: 13, name: 'Товар bedRoom', price: 12, imageUrl: '', description: ''},
        {id: 14, name: 'Товар bedRoom', price: 4312, imageUrl: '', description: ''},
        {id: 15, name: 'Товар bedRoom', price: 39, imageUrl: '', description: ''},
        {id: 16, name: 'Товар bedRoom', price: 454, imageUrl: '', description: ''},
    ],
    wardrobe: [
        {id: 12, name: 'Товар wardrobe', price: 32, imageUrl: '', description: ''},
        {id: 13, name: 'Товар wardrobe', price: 675, imageUrl: '', description: ''},
        {id: 14, name: 'Товар wardrobe', price: 21, imageUrl: '', description: ''},
        {id: 15, name: 'Товар wardrobe', price: 56, imageUrl: '', description: ''},
        {id: 16, name: 'Товар wardrobe', price: 7, imageUrl: '', description: ''},
    ],
    bathRoom: [
        {id: 12, name: 'Товар bathRoom', price: 23, imageUrl: '', description: ''},
        {id: 13, name: 'Товар bathRoom', price: 43, imageUrl: '', description: ''},
        {id: 14, name: 'Товар bathRoom', price: 54, imageUrl: '', description: ''},
        {id: 15, name: 'Товар bathRoom', price: 655, imageUrl: '', description: ''},
        {id: 16, name: 'Товар bathRoom', price: 87, imageUrl: '', description: ''},
    ],
    status: {
        statusEvent: '',
        error: '',
    },
    products: []
}

const mainReducer = createSlice({
    name: 'main-reducer',
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchProduct.pending]: (state, action) => {
            state.status.statusEvent = 'loading';
            state.status.error = null;
        },
        [fetchProduct.fulfilled]: (state, action) => {
            state.status.statusEvent = 'resolved';
            state.products = action.payload;
            console.log(action.payload[0]);
        },
        [fetchProduct.rejected]: (state, action) => {},
    }
});

export default mainReducer.reducer;

export const {  } = mainReducer.actions;

