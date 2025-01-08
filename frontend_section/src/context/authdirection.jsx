import { use, useContext } from 'react'
import { createContext, useState } from 'react'

export const authdirection = createContext()

export const useAuth = () => {
    return useContext(authdirection)
}

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("authuser")) || null)

    return (
        <authdirection.Provider value={{auth, setAuth}}>
            {children}
        </authdirection.Provider>
    )
}