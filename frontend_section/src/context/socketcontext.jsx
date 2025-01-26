import { createContext, useEffect, useState, useContext } from "react";
import { useAuth } from "./authdirection";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocket = () => {
    return useContext(SocketContext);
}


export const Socketprovider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const { auth } = useAuth();

    useEffect(() => {
        if(auth) {
            const socket = io("http://localhost:5000",
                {
                    query: {
                        userid: auth._id
                    }
                }
            );
            setSocket(socket);
            socket.on("onlineusers", (users) => {
                setOnlineUsers(users);
            });
            return () => socket.close();
        } else {
            if(socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [auth]);
    return (
        <SocketContext.Provider value={{socket, onlineUsers}}>
            {children}
        </SocketContext.Provider>
    );
}