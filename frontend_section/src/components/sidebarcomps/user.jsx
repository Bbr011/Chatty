import React from 'react'
import ShowConvos from '../../zustand/showconvos'

const User = ({Convo, lastbox}) => {
    const {selectedconvo, setselectedconvo} = ShowConvos();

    const selected = selectedconvo?._id === Convo._id;
  return (
    <>
        <div className={`flex items-center gap-3 p-2 hover:backdrop-blur-xl rounded py-2 cursor-pointer
            ${selected ? "bg-green-300 bg-opacity-40" : ""}`}
            onClick={() => {console.log('Setting selected convo:', Convo);
                setselectedconvo(Convo);}}
        >
            <div className='avatar online'>
                <div className='w-12 rounded-full'>
                    <img src={Convo.profilepic} alt="user pfp"></img>
                </div>
            </div>

            <div className='flex flex-col flex-1'>
                <div className='flex gap-3 justify-between'>
                    <p className='font-bold text-gray-200'>{Convo.username}</p>
                </div>
            </div>
        </div>

        {!lastbox && <div className='divider my-0 py-0 h-[1px] bg-green-300' />}
    </>
  )
}

export default User