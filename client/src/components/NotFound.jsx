import React from 'react'

export default function NotFound() {
    return (
        <div className='position-relative' style={{minWidth:"calc(100vh - 70px)",height:"calc(100vh - 70px)"}}>
         <h2 className='position-absolute text-secondary' style={{
             top:"50%",left:"50%",
             transform:"translate(-50%,-50%)"
         }}>
         404 !!  NotFound
         </h2>
        </div>
    )
}
