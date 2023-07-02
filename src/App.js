import Options from './Components/Options'
import Home from './Components/Home'
import Register from './Components/Register'
import {Routes, Route} from 'react-router-dom'
import Login from './Components/Login'
import Forgot from './Components/Forgot'
import Reset from './Components/Reset'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import MainDashboard from './Components/Dashboard/MainDashboard'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/options' element={<Options />} />
        <Route path='/' element = {<Home />} />
        <Route path='/register' element = {<Register />} />
        <Route path='/login' element = {<Login />} />
        <Route path='/forgot' element={<Forgot/>} />
        <Route path='/reset' element={<Reset/>} />
        <Route path='/dashboard' element={<MainDashboard/>} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
