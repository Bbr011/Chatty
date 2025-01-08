import React, { useState } from 'react'
import { useAuth } from '../context/authdirection'

const Getlogout = () => {
    const [loading, setLoading] = useState(false)
    const {setAuth} = useAuth()

    const logout = async () => {
        setLoading(true)

        try {
            const res = await fetch("/api/authi/logout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            })

            const data = await res.json()
            if (data.error) throw new Error(data.error)

            localStorage.removeItem("authuser")
            setAuth(null)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    return {loading, logout};
}

export default Getlogout