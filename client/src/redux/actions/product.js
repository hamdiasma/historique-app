import axios from "axios"
import { productTypes } from "../type/types"

export const createPrd  =(formData,token)=>async dispatch=>{

    try {
        const res = await axios.post(`/api/poduct`,formData,
    {
        headers:{Authorization:token}
    
    })
    dispatch({
        type:productTypes.CREATE_NEW_PRODUCT,
        payload:res.data.product
    })
    
    } catch (error) {
        
    }
}
export const getProducts  =(token)=>async dispatch=>{

    try {
        const res = await axios.get(`/api/poduct`,
    {
        headers:{Authorization:token}
    
    })
    dispatch({
        type:productTypes.GET_PRODUCT,
        payload:res.data.products
    })
    
    } catch (error) {
        
    }
}


export const deleteProduct  =(products,id,token)=>async dispatch=>{

    dispatch({
        type:productTypes.GET_PRODUCT,
        payload:products.filter(p=>p._id !== id)
    })

    try {
        const res = await axios.delete(`/api/poduct/${id}`,
    {
        headers:{Authorization:token}
    
    })
    dispatch({
        type:productTypes.DELETE_PRODUCT,
    })
    
    } catch (error) {
        
    }
}