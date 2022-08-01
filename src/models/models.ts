
export interface Iproduct {
    id: number,
    name: string, 
    price: number, 
    imageUrl: string, 
    description: string, 
    specifications: any, 
    size: size,
    avColor: any
}



 export type size = {
    width: number, 
    height: number, 
    Depth: number
}