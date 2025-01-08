import { set } from 'mongoose'
import React from 'react'
import toast from 'react-hot-toast'
import { useState } from 'react'
import { useAuth } from '../context/authdirection'

const Getregister = () => {

    const [laoding, setLoding] = useState(false)
    const { setAuth} = useAuth()

    const register = async ({name, username, password, confirmpassword, sex}) => {
        const success = handleErrors({name, username, password, confirmpassword, sex})
        if(!success) return;

        setLoding(true)

        try {
            const res = await fetch("/api/authi/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({name, username, password, confirmpassword, sex})
            })

            const data = await res.json();
            if(data.error) throw new Error(data.error)
            
            localStorage.setItem("authuser", JSON.stringify(data))
            setAuth(data)
            
        }catch(error){
            toast.error(error.message)
        } finally {
            setLoding(false)
        }
    }

    return {laoding, register}
}

export default Getregister

function handleErrors({name, username, password, confirmpassword, sex}){
    if(!name || !username || !password || !confirmpassword || !sex){
        toast.error("fill all blanks.")
        return false
    }
    if(password !== confirmpassword){
        toast.error("Passwords don't match.")
        return false
    }

    if(password.length < 6){
        toast.error("Password must be at least 6 characters long.")
        return false
    }
    return true;
}