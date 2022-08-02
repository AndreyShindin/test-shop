// Product Item
export interface Iproduct {
    id: number,
    name: string, 
    price: number, 
    imageUrl: string, 
    description: string, 
    specifications?: any, 
    size?: size,
    avColor?: any
}



 type size = {
    width: number, 
    height: number, 
    Depth: number
}
//


//Main Reducer
type status = {
    statusEvent: string,
    error: null | string,
}



export interface IproductsState {
    [key: string]: Array<Iproduct> | status
}

// export interface IproductsState {
//     status: status,
//     livingroom: Iproduct[],
//     bedroom: Iproduct[],
//     kitchen: Iproduct[],
//     bathroom: Iproduct[],
//     wardrobe: Iproduct[],
//     garden: Iproduct[],
//     historybye: Iproduct[],
//     favorite: Iproduct[],
//     cart: Iproduct[],
//     offers: Iproduct[],
//     products: Iproduct[],
// }

export type actionArray = {
    local: string,
    data: Array<Iproduct>
}
// export type actionArray = Array<Iproduct>

//


// Header Reducer
type message ={
    id: number,
    text: string,
}

export interface IstateHead {
    isActive: boolean,
    stateChat: boolean,
    stateCart: boolean,
    helpMessages: Array<message>
}
//
