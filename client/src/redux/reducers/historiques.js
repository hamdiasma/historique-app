import { historiqueTypes, productTypes } from "../type/types";

const initialState = {
   historiques:[]
}



const historiqueReducers = (state=initialState,action)=>{
    const {type,payload} = action
    switch (type) {
        case historiqueTypes.CREATE_NEW_HISTORIQUE:
           return {
               ...state,
               historiques:[...state.historiques,payload]}

               case historiqueTypes.GET_HISTORIQUE:
           return {
               ...state,
               historiques:payload}
        default:
        return state;
    }
}

export default historiqueReducers