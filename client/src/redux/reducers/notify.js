import { notifyTypes } from "../type/types";

const initialState = {
   
}



const notifyReducers = (state=initialState,action)=>{
    const {type,payload} = action
    switch (type) {
        case notifyTypes.NOTIFY:
           return payload

            
    
        default:
        return state;
    }
}

export default notifyReducers