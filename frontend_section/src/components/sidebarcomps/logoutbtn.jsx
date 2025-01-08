import React from 'react'
import { CiLogout } from "react-icons/ci";
import Getlogout from '../../plugins/getlogout';

const LogoutButton = () => {
  const {loading, logout} = Getlogout()
  return (
    <div className='mt-3'>
        {!loading ? (
          <button type='submit' className='btn w-full border-green-400 hover:border-green-500 rounded-xl bg-green-400 hover:bg-green-500 text-white' onClick={logout}>
            <CiLogout className='w-4 h-4 text-white cursor-pointer'/>
          </button>
        ) : (
          <span className='loading loading-spinner'></span>
        )}
    </div>
            
  )
}

export default LogoutButton