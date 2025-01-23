import React from 'react'
import User from './User'
import Getconvos from '../../plugins/getconvos.js'

const Userlist = () => {
  const {loading, convos} = Getconvos();
  console.log(convos);
  return (
    <div className='py-2 flex flex-col overflow-auto'>
        {convos.map((Convo, idx) => (
            <User key={Convo._id}
            Convo={Convo}
            lastbox={idx === convos.length - 1}
            />
        ))}

        {loading ? <span className='laoding loading-spinner mx-auto'></span> : null}
    </div>
  )
}

export default Userlist