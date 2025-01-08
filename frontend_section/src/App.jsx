import './App.css'
import Mainpage from './Tabs/main/mainpage.jsx';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Tabs/login/login.jsx';
import Registry from './Tabs/registry/register.jsx';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/authdirection.jsx';

function App() {
  const {auth} = useAuth()

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path="/" element={auth ? <Mainpage /> : <Navigate to="/login"/>}/>
        <Route path="/register" element={auth ? <Navigate to="/"/> : <Registry />}/>
        <Route path="/login" element={auth ? <Navigate to="/" /> : <Login />}/>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App
