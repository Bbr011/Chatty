import React from 'react'
import { BsSearch } from "react-icons/bs";


const Searchbar = () => {
  return (
    <form className='flex items-center gap-3'>
        <input type="text" placeholder='SEARCH BAR' className='input input-bordered rounded-xl bg-emerald-100'/>
        <button type='submit' className='btn border-green-400 hover:border-green-500 rounded-xl bg-green-400 hover:bg-green-500 text-white'>
            <BsSearch className='w-6 h-6 outline-none'/>
        </button>
    </form>
    )
}

export default Searchbar