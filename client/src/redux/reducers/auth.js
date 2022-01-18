import { authTypes } from "../type/types";

const initialState = {

}



const authReducers = (state=initialState,action)=>{
    const {type,payload} = action
    switch (type) {
        case authTypes.REGISTER_USER:
           return{
             ...state
           } 
            
    
        default:
        return state  ;
    }
}

export default authReducers