import React, { useState, useEffect } from 'react';
import logo from './assets/logo.png';
import './css/reset.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { getAuth, verifyPasswordResetCode, confirmPasswordReset } from 'firebase/auth';
import {toast} from 'react-toastify'
import { app } from './firebase/Firebase';
import { Flex, Spinner } from '@chakra-ui/react';

const Reset = () => {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // State to track loading status

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const actionCode = searchParams.get('oobCode');
  console.log(actionCode)
  const auth = getAuth(app);

  useEffect(() => {
    const verifyActionCode = async () => {
      if (actionCode) {
        try {
          const email = await verifyPasswordResetCode(auth, actionCode);
          // The code is valid, and the associated email is retrieved
          const accountEmail = email;
          // Proceed with displaying the password reset form or any other necessary logic
          setIsVerified(true)
          console.log(accountEmail)
          
        } catch (error) {
          // Handle invalid or expired code
          console.error('Error verifying password reset code:', error);
        } finally {
          setIsLoading(false); // Set loading status to false after verification
          toast.success('code verified')
          
        }
      }
    };

    verifyActionCode();
  }, [auth, actionCode]);

  const resetPassword = async (e) => {
    e.preventDefault()
    const auth = getAuth(app);
    if(confirm !== password){
      toast.error('Passwords do not match')
    }else{
    try {
      await confirmPasswordReset(auth, actionCode, password);
      console.log('Password reset successful.');
      toast.success('Password reset successful')
    } catch (error) {
      console.error('Error resetting password:', error);
      toast.error(error.message)
     
    }
  }
  };

  if (isLoading) {
    // Display a loading spinner while verifying the code
    <Flex align="center" justify="center" height="100vh">
    <Spinner size="xl" color="blue.500" />
  </Flex>
  }

  if (!isVerified) {
    // Display a blank page or a message when not verified
    return <div>Invalid code or expired link.</div>;
  }

  return (
    <div className='resetCont'>
      <div className="main">
        <div className="digi">
          <img src={logo} alt="digimart" className="mainlogo" />
        </div>

        <div className="mainReset">
          <h1 className="resetHeader">Reset your password</h1>
          <div className="eDescriptionDiv">
            <p className="eDescription">To reset your password, enter a new password</p>
            <br />
            <span><p className='box'>in the box below</p></span>
          </div>

          <input type="password" onChange={(e) => setPassword(e.target.value)} className="resetPass" placeholder='New password' />
          <input type="password" onChange={(e) => setConfirm(e.target.value)} placeholder='Re-type new password' className="retype" />
          <button className="submit-btn" onClick={resetPassword}>SUBMIT</button>
          <p className="loginD">Didn't get a mail? <Link className='log' to='/register'>Resend it</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Reset;
