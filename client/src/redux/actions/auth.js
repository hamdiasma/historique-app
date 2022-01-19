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
    dispatch(notifyAction({error:error.response.data.msg}))
        
    }
}

export const refreshTokenAction=(token)=> async dispatch=>{
    let socialLogged= localStorage.getItem("socialLogged")

try {
   if(socialLogged){
    dispatch(notifyAction({loading:true}))
    const res = await postData("refresh_token",null,token)
    dispatch({type:authTypes.REFRESH_TOKEN,payload:{
        token:res.data.access_token,
        user:res.data.user
    }})
    dispatch(notifyAction({loading:false}))
   }
  

} catch (error) {
    dispatch(notifyAction({error:error.response.data.msg}))
}
}