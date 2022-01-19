import { notifyTypes } from "../type/types";

export const notifyAction = (payload)=>dispatch=>{
dispatch({
    type:notifyTypes.NOTIFY,
    payload
})
}