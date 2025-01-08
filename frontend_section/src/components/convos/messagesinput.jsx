import React from 'react'
import { IoSendOutline } from "react-icons/io5";


const Massagesinput = () => {
  return (
        <form className="my-3 px-4">
            <div className="w-full relative">
                <input type="text" placeholder="SEND A MESSAGE" className="rounded-xl w-full p-2.5 block text-sm bg-emerald-100 pr-10" />
                <button type="submit" className="absolute inset-y-0 end-0 pe-3 items-center flex">
                    <IoSendOutline />
                </button>
            </div>
        </form>
  )
}

export default Massagesinput