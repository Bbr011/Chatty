import React, { useEffect } from 'react'
import { useSocket } from '../context/socketcontext'
import ShowConvos from '../zustand/showconvos';

const Userealtimemsgs = () => {
    const {socket} = useSocket();
    const {messages, setmessages} = ShowConvos()

    useEffect(() => {
        socket?.on("newmsg", (newmsg) => {
            setmessages([...messages, newmsg]);
        });
        return () => {
            socket?.off("newmsg");
        }
    }, [socket, setmessages, messages]);
}

export default Userealtimemsgs