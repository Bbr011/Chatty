import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-mg bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10'>
        <h1 className='text-3xl font-semibold text-center text-white mb-10'>Login</h1>

        <form>
          <div className='flex flex-col space-y-4 mt-4'>
            <div className='text-center'>
              <label htmlFor='email' className='text-white text-center'>Email</label>
              <input type='email' id='email' className='w-full p-2 mt-1 text-gray-900 bg-emerald-100 rounded-md' />
            </div>

            <div className='text-center'>
              <label htmlFor='password' className='text-white'>Password</label>
              <input type='password' id='password' className='w-full p-2 mt-1 text-gray-900 bg-emerald-100 rounded-md' />
            </div>
          </div>
          <div className='text-center pb-2'>
            <a href='#' className='text-sm hover:inderline hover:text-green-200 mt-3 inline-block text-white'>Make an account</a>
          </div>
          <div>
            <button type='submit' className='w-full p-2 mt-1 text-white bg-green-400 rounded-md hover:bg-emerald-500'>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login