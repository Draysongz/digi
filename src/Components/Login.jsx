import React, {useState} from 'react'
import logo from './assets/logoWhite.png'
import GImage from './assets/GImage.png'
import {Link} from 'react-router-dom'
import './css/login.css'
import eyes from './assets/eyes.svg'
import { app } from './firebase/Firebase'
import { signInWithEmailAndPassword,  getAuth } from '@firebase/auth'
import {toast} from 'react-toastify'


const Login = () => {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handlePasswordToggle = ()=>{
    setShowPassword(!showPassword)
  }

  const loginUser = async (e)=>{
    e.preventDefault()
    const auth = getAuth()
    try {
      const userCredentials = await signInWithEmailAndPassword(auth, email, password)
      const user = userCredentials.user
      console.log(user)
      toast.success('login successful')
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }
  return (
    <div className="cont">
    <div className='loginContainer'>
    .<div className='leftSide'>
      <div className='child'>
      <img src={logo} alt="digimart" className="whitelogo" />
      </div>
    </div>

    <div className="rightSide">
      <h1 className="welcome">Welcome back!</h1>

      <form action="" className="loginForm">
        <input type="email" className="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Email address' />
        <span className='pass'>
        <input type={showPassword? 'text' : 'password'} value={password} onChange={(e)=> setPassword(e.target.value)} className="password" placeholder='Password' />
           <img src={eyes} alt="visibility" className="eyes" onClick={handlePasswordToggle} />
        </span>
        <p className='forgotP'><Link className='forgot' to='/forgot'>forgot password?</Link></p>
        <div className="actions">
        <button className="loginBtn" onClick={loginUser}>LOGIN</button>
          <p className="or"><hr className='left-line' /> or <hr className='right-line' /></p>
          <button className="googleBtn">
            <span className="goog">
            <img src={GImage} alt='google' className='googl' width='40'/>
            </span> 
            <span className="words">Signup with Google</span>
            
          </button>
          <p className="loginD">Don't have an account? <Link className='log' to='/register'>Register</Link></p>
        </div>

      </form>
    </div>
    </div>
    </div>
  )
}

export default Login;
