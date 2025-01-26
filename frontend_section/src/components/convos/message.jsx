import React from 'react'
import { useAuth } from '../../context/authdirection'
import ShowConvos from '../../zustand/showconvos'
import { extractTime } from '../../utils/currenttime';

const Message = ({message}) => {
  const { auth } = useAuth();
  const {selectedconvo} = ShowConvos();
  const isitmine = message.senderID === auth._id;
  const chatstate = isitmine ? "chat-end" : "chat-start";
  const profilepic = isitmine ? auth.profilepic : selectedconvo.profilepic;
  const bubblecolor = isitmine ? 'bg-green-400' : 'bg-gray-400';
  const currenttime = extractTime(message.createdAt);

  return (
    <div className={`chat ${chatstate}`}>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src={profilepic} alt="user pfp"></img>
            </div>
        </div>
      <div className={`chat-bubble text-white ${bubblecolor}`}>
            {message.message}
        </div>
        <div className='chat-footer text-xs gap-1 flex items-center text-green-100'>{currenttime}</div>
    </div>
  )
}

export default Message