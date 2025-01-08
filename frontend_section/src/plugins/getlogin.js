import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuth } from '../context/authdirection'
import { set } from 'mongoose'

const Getlogin = () => {
    const [loading, setLoading] = useState(false)
    const { setAuth } = useAuth()

    const login = async (username, password) => {
        const success = handleErrors({username, password})
        if(!success) return;

        setLoading(true)
        try {
            const res = await fetch('api/authi/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username, password})
            })
            const data = await res.json()
            if (data.error) {
                throw new Error(data.error)
            }
            localStorage.setItem("authuser", JSON.stringify(data))
            setAuth(data)
            
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }
    return { loading, login }
}

export default Getlogin

function handleErrors({username, password}){
    if(!username || !password){
        toast.error("fill all blanks.")
        return false
    }
    
    return true
}