import React, { useEffect, useRef } from 'react'
import Message from './message'
import Getmessages from '../../plugins/getmessages'
import MessageSkeleton from '../skeletons/messageloading'


const Messages = () => {
  const {messages, loading} = Getmessages()
  const lastmsg = useRef()
  useEffect(() => {
    setTimeout(() => {
      lastmsg.current?.scrollIntoView({behavior: 'smooth'})
    }, 100)
  },[messages])

  return (
    <div className='px-4 flex-1 overflow-auto'>
        {!loading && messages.length > 0 && messages.map((message) => (<div key={message._id} ref={lastmsg}><Message message={message}/></div>))}
        {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx}/>)}
        {!loading && messages.length === 0 && <p className='text-center text-gray-200'>No messages yet between this user</p>}
    </div>
  )
}

export default Messages