import React from 'react'
import { CiLogout } from "react-icons/ci";

const LogoutButton = () => {
  return (
    <div className='mt-3'>
        <button type='submit' className='btn w-full border-green-400 hover:border-green-500 rounded-xl bg-green-400 hover:bg-green-500 text-white'>
                <CiLogout className='w-4 h-4 text-white cursor-pointer'/>
        </button>
    </div>
            
  )
}

export default LogoutButton