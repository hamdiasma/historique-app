import axios from "axios"
import { historiqueTypes } from "../type/types"

export const createHistorique  =(formData,token)=>async dispatch=>{
    try {
        const res = await axios.post(`/api/historiques`,formData,
    {
        headers:{Authorization:token}
    
    })
    dispatch({
        type:historiqueTypes.CREATE_NEW_HISTORIQUE,
        payload:res.data
    })
    } catch (error) {
        
    }
}


export const getHistoriques  =(token)=>async dispatch=>{
    try {
        const res = await axios.get(`/api/historiques`,
    {
        headers:{Authorization:token}
    
    })
    
    dispatch({
        type:historiqueTypes.GET_HISTORIQUE,
        payload:res.data.historiques
    })
    } catch (error) {
        
    }
}