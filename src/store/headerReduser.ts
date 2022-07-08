import { createSlice } from "@reduxjs/toolkit"

export interface IMessage {
    id: number,
    text: string,
}

export interface IstateHead {
    language: string,
    currency: string,
    stateChat: boolean,
    stateCart: boolean,
    rate: number
    helpMessages: Array<IMessage>
}

const initialState: IstateHead = {
    language: 'Язык',
    currency: 'руб',
    stateChat: false,
    stateCart: false,
    rate: 1,
    helpMessages: [
        {id: Date.now(), text: 'Здравствуйте чем могу помочь?'},
    ],
}




const headerReducer = createSlice({
    name: 'header-reduser',
    initialState,
    reducers: {
        changeLanguage: (state, action) => {
            state.language = action.payload
        },
        changeCurrency: (state, action) => {
            state.currency = action.payload;
            switch (action.payload) {
                case 'rub': {
                    state.rate = 1
                    break
                }
                case 'usd': {
                    state.rate = 0.0167
                    break
                }
                case 'eur': {
                    state.rate = 0.0158
                    break
                }
                default:
                    state.rate = 1
                    break;
            }
        },
        openChats: (state) => {
            state.stateChat = !state.stateChat
        },
        sendMessage: (state, action) => {
            state.helpMessages.push(action.payload)
            console.log(action.payload)
        },
        openCartPreview: (state) => {
            state.stateCart = !state.stateCart
        }
    }
});

export default headerReducer.reducer;

export const { changeLanguage, 
    changeCurrency, 
    openChats, 
    sendMessage,
    openCartPreview } = headerReducer.actions;

