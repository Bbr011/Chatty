import React, { useState } from 'react'
import { BsSearch } from "react-icons/bs";
import ShowConvos from '../../zustand/showconvos';
import Getconvos from '../../plugins/getconvos';
import toast from 'react-hot-toast';


const Searchbar = () => {
    const [search, setSearch] = useState('');
    const {setselectedconvo} = ShowConvos();
    const {convos} = Getconvos();
    const handelsubmit = (e) => {
        e.preventDefault();
        if(!search) return;
        if(search.length < 3) return toast.error('Search query must be at least 3 characters long');
        console.log("Search Query: ", search);
        const searchresult = convos.filter((convo) => convo.username.toLowerCase().includes(search.toLowerCase()));
        console.log("Search Result: ", searchresult);
        

        if(searchresult.length > 0)
        {
            setselectedconvo(searchresult[0]);
            setSearch('');
        } else {
            toast.error('No search results found');
        }
    }
  return (
    <form className='flex items-center gap-3' onSubmit={handelsubmit}>
        <input type="text" placeholder='SEARCH BAR' className='input input-bordered rounded-xl bg-emerald-100'
        value={search}
        onChange={(e) => setSearch(e.target.value)}/>
        <button type='submit' className='btn border-green-400 hover:border-green-500 rounded-xl bg-green-400 hover:bg-green-500 text-white'>
            <BsSearch className='w-6 h-6 outline-none'/>
        </button>
    </form>
    )
}

export default Searchbar