import { productTypes } from "../type/types";

const initialState = {
   products:[]
}



const productReducers = (state=initialState,action)=>{
    const {type,payload} = action
    switch (type) {
        case productTypes.CREATE_NEW_PRODUCT:
           return {
               ...state,
               products:[...state.products,payload]}
            case productTypes.GET_PRODUCT:
           return {
               ...state,
               products:payload
            }
               
               case productTypes.DELETE_PRODUCT:
                return {
                    ...state,
                }
                    
        default:
        return state;
    }
}

export default productReducers