import React from 'react'

const User = () => {
  return (
    <>
        <div className='flex items-center gap-3 p-2 hover:backdrop-blur-xl rounded py-2 cursor-pointer'>
            <div className='avatar online'>
                <div className='w-12 rounded-full'>
                    <img src="https://randomuser.me/api/portraits" alt="user pfp"></img>
                </div>
            </div>

            <div className='flex flex-col flex-1'>
                <div className='flex gap-3 justify-between'>
                    <p className='font-bold text-gray-200'>User Name</p>
                </div>
            </div>
        </div>

        <div className='divider my-0 py-0 h-[1px] bg-green-300' />
    </>
  )
}

export default User