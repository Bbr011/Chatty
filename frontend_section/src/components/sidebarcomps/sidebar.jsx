import React from 'react'
import Searchbar from './searchbar'
import Userlist from './userslist'
import LogoutButton from './logoutbtn'

const UsersSidebar = () => {
  return (
    <div className='border-r-2 border-green-300 flex flex-col p-4'>
      <Searchbar />
      <div className='divider px-3 h-[1px] bg-green-300 mb-0'></div>
      <Userlist />
      <LogoutButton />
    </div>
  )
}

export default UsersSidebar