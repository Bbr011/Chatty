import React,{ useEffect } from 'react'
import Messages from './messages'
import Messagesinput from './messagesinput'
import ShowConvos from '../../zustand/showconvos'

const Conversation = () => {
    const {selectedconvo, setselectedconvo} = ShowConvos();
    useEffect(() => {
        return () => setselectedconvo(null);
    }, [setselectedconvo]);
    return (
        <div className='md:min-w-[600px] flex flex-col'>
            {!selectedconvo ? (<NoChatSelected />) : (
                <>
                    <div className='backdrop-blur-3xl px-4 py-4 mb-2'>
                        <span className='text-white font-bold'>{selectedconvo.username}</span>
                    </div>

                    <Messages />
                    <Messagesinput />
                </>
            )}
        </div>
    )
}

export default Conversation


const NoChatSelected = () => {
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome User Name, ready to use <span className='text-emerald-300 font-bold'>CHATTY</span>?</p>
				<p>Check your new messages</p>
			</div>
		</div>
	);
};