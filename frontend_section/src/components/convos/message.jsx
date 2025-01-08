import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src="https://randomuser.me/api/portraits" alt="user pfp"></img>
            </div>
        </div>
        <div className={`chat-bubble bg-green-400 text-white`}>
            hey lil bro
        </div>
        <div className='chat-footer text-xs gap-1 flex items-center text-green-100'>02:42</div>
    </div>
  )
}

export default Message