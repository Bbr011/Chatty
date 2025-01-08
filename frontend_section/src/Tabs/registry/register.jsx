import React from 'react'
import Sexcheck from './sexcheck'

const Registry = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-mg bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10'>
        <h1 className='text-3xl font-semibold text-center text-white'>Wolcome to <span className='text-emerald-300'>CHATTY</span></h1>

        <form>
          <div className='flex flex-col space-y-4 mt-4'>
            <div className='text-center'>
              <label htmlFor='email' className='text-white text-center'>Name</label>
              <input type='email' id='email' className='w-full p-2 mt-1 text-gray-900 bg-emerald-100 rounded-md' />
            </div>

            <div className='text-center'>
              <label htmlFor='email' className='text-white text-center'>Username</label>
              <input type='email' id='email' className='w-full p-2 mt-1 text-gray-900 bg-emerald-100 rounded-md' />
            </div>

            <div className='text-center'>
              <label htmlFor='password' className='text-white'>Password</label>
              <input type='password' id='password' className='w-full p-2 mt-1 text-gray-900 bg-emerald-100 rounded-md' />
            </div>

            <div className='text-center'>
              <label htmlFor='password' className='text-white'>Confirm Password</label>
              <input type='password' id='password' className='w-full p-2 mt-1 text-gray-900 bg-emerald-100 rounded-md' />
            </div>
          </div>

          <Sexcheck />

          <div className='text-center pb-2'>
            <a href='#' className='text-sm hover:inderline hover:text-green-200 mt-3 inline-block text-white'>use an existing account</a>
          </div>
          <div>
            <button type='submit' className='w-full p-2 mt-1 text-white bg-green-400 rounded-md hover:bg-emerald-500'>Register</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Registry