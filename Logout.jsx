import React, { useEffect } from 'react'
import { useHistory } from 'react-router'

function Logout() {
    let history = useHistory()
    useEffect(()=>{
        localStorage.clear()
        history.push('/')
    })
    return (
        <div>
            
        </div>
    )
}

export default Logout
