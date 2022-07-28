import { createSlice } from "@reduxjs/toolkit"

export interface IMessage {
    id: number,
    text: string,
}

export interface IstateHead {
    isActive: boolean,
    stateChat: boolean,
    stateCart: boolean,
    helpMessages: Array<IMessage>
}

const initialState: IstateHead = {
    isActive: false,
    stateChat: false,
    stateCart: false,
    helpMessages: [
        {id: Date.now(), text: 'Здравствуйте чем могу помочь?'},
    ],
}




const headerReducer = createSlice({
    name: 'header-reduser',
    initialState,
    reducers: {
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

export const { 
    openChats, 
    sendMessage,
    openCartPreview } = headerReducer.actions;

