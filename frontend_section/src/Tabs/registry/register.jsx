import React, { useState } from 'react'
import Sexcheck from './sexcheck'
import { Link } from 'react-router-dom'
import Getregister from '../../plugins/getregister'

const Registry = () => {

  const [input, setInput] = useState({
    name: "",
    username: "",
    password: "",
    confirmpassword: "",
    sex: ""
  })

  const {loading, register} = Getregister()

  const senddata = async (e) => {
    e.preventDefault()
    await register(input)
  }

  const gendercheck = (sex) => {
    setInput({...input,sex})
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-mg bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10'>
        <h1 className='text-3xl font-semibold text-center text-white'>Wolcome to <span className='text-emerald-300'>CHATTY</span></h1>

        <form onSubmit={senddata}>
          <div className='flex flex-col space-y-4 mt-4'>
            <div className='text-center'>
              <label htmlFor='name' className='text-white text-center'>Name</label>
              <input type='text' id='name' className='w-full p-2 mt-1 text-gray-900 bg-emerald-100 rounded-md' value={input.name}
              onChange={(e) => setInput({...input, name: e.target.value})}/>
            </div>

            <div className='text-center'>
              <label htmlFor='uname' className='text-white text-center'>Username</label>
              <input type='text' id='uname' className='w-full p-2 mt-1 text-gray-900 bg-emerald-100 rounded-md' value={input.username}
              onChange={(e) => setInput({...input, username: e.target.value})}/>
            </div>

            <div className='text-center'>
              <label htmlFor='password' className='text-white'>Password</label>
              <input type='password' id='password' className='w-full p-2 mt-1 text-gray-900 bg-emerald-100 rounded-md' value={input.password}
              onChange={(e) => setInput({...input, password: e.target.value})}/>
            </div>

            <div className='text-center'>
              <label htmlFor='cpassword' className='text-white'>Confirm Password</label>
              <input type='password' id='cpassword' className='w-full p-2 mt-1 text-gray-900 bg-emerald-100 rounded-md' value={input.confirmpassword}
              onChange={(e) => setInput({...input, confirmpassword: e.target.value})}/>
            </div>
          </div>

          <Sexcheck oncheckboxchange = {gendercheck} selectedSex={input.sex} />

          <div className='text-center pb-2'>
            <Link to='/Login' className='text-sm hover:inderline hover:text-green-200 mt-3 inline-block text-white'>use an existing account</Link>
          </div>
          <div>
            <button type='submit' className='w-full p-2 mt-1 text-white bg-green-400 rounded-md hover:bg-emerald-500' disabled={loading}>
              {loading ? <span className="loadign loading-spinner"></span> : "Regiser"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Registry