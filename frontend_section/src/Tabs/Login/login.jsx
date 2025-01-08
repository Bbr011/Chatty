import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import Getlogin from '../../plugins/getlogin'

const Login = () => {

  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')

  const {loading, login} = Getlogin()

  const handlesubmit = async (e) => {
    e.preventDefault()
    await login(username, password)
    }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-mg bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10'>
        <h1 className='text-3xl font-semibold text-center text-white mb-10'>Login</h1>

        <form onSubmit={handlesubmit}>
          <div className='flex flex-col space-y-4 mt-4'>
            <div className='text-center'>
              <label htmlFor='uname' className='text-white text-center'>UserName</label>
              <input type='text' id='uname' className='w-full p-2 mt-1 text-gray-900 bg-emerald-100 rounded-md'
                value={username} onChange={(e) => setusername(e.target.value)} 
              />
            </div>

            <div className='text-center'>
              <label htmlFor='password' className='text-white'>Password</label>
              <input type='password' id='password' className='w-full p-2 mt-1 text-gray-900 bg-emerald-100 rounded-md' 
                value={password} onChange={(e) => setpassword(e.target.value)}
              />
            </div>
          </div>
          <div className='text-center pb-2'>
            <Link to='/register' className='text-sm hover:inderline hover:text-green-200 mt-3 inline-block text-white'>Make an account</Link>
          </div>
          <div>
            <button type='submit' className='w-full p-2 mt-1 text-white bg-green-400 rounded-md hover:bg-emerald-500'
            disabled={loading}>
              {loading ? <span className="loadign loading-spinner"></span> : "Login"}  
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login