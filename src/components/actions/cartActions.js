
import { ADD_TO_CART,REMOVE_HOTEL,SUB_NIGHT,ADD_NIGHT,ADD_INSURANCE} from './action-types/cart-actions'


export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}

export const removeHotel=(id)=>{
    return{
        type: REMOVE_HOTEL,
        id
    }
}

export const subtractNight=(id)=>{
    return{
        type: SUB_NIGHT,
        id
    }
}

export const addNight=(id)=>{
    return{
        type: ADD_NIGHT,
        id
    }
}
