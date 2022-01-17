import React from 'react'
import {useParams} from 'react-router-dom'
import NotFound from './components/NotFound';

const generatePage=(pageName)=>{
const component =()=> require(`./pages/${pageName}`).default

try {
    return React.createElement(component())
} catch (error) {
    return <NotFound/>
}
}


export default function PageRoute() {
    const {page,id} = useParams()
    console.log(useParams())

let pageName = ""

if(id){
    pageName = `${page}/[id]`
}else{
    pageName = `${page}`
}

console.log(pageName)
    return generatePage(pageName)
}
