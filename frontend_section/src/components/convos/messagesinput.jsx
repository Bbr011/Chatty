import React,{ useState } from 'react'
import { IoSendOutline } from "react-icons/io5";
import Sendmessages from '../../plugins/sendmessages';


const Massagesinput = () => {
    const [message, setmessage] = useState("")
    const { loading, sendmessage } = Sendmessages()
    const handlesubmit = async (e) => {
        e.preventDefault()
        if(!message) return
        await sendmessage(message)
        setmessage("")
    }
  return (
        <form className="my-3 px-4" onSubmit={handlesubmit}>
            <div className="w-full relative">
                <input type="text" placeholder="SEND A MESSAGE" className="rounded-xl w-full p-2.5 block text-sm bg-emerald-100 pr-10" 
                value={message}
                onChange={(e) => setmessage(e.target.value)}/>
                <button type="submit" className="absolute inset-y-0 end-0 pe-3 items-center flex">
                    {loading ? <div className='loading loading-spinner'></div> : <IoSendOutline />}
                </button>
            </div>
        </form>
  )
}

export default Massagesinput