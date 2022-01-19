import{ authTypes,notifyTypes }  from "../type/types";
import {postData,getData} from "../../utils/fetchData"
import axios from "axios";
import { notifyAction } from "./notyfy";
export const loginAction=(data)=>async dispatch=>{
    try {
     dispatch(notifyAction({loading:true}))
     const res = await  postData('login',data)

     dispatch({type:authTypes.LOGIN_USER,payload:{
         token:res.data.access_token,
         user:res.data.user
     }})

 localStorage.setItem('socialLogged',true)
 dispatch(notifyAction({success:res.data.msg}))
    } catch (error) {
        console.log(error.response.data.msg)
    dispatch(notifyAction({error:error.response.data.msg}))
        
    }
}