import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaEye, FaEyeSlash  } from "react-icons/fa";

import app from './firebase.init';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const LogInEmail = () => {
  const [user, setUser] = useState([]);
  const [showPass, setShowPass] = useState(true);
  const[emailError, setEmailError] = useState('');
  const[passError, setPassError] = useState('');
  
    const handleEmailLogIn = e =>{
        e.preventDefault();       
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
  
  const auth = getAuth(app)    
  signInWithEmailAndPassword(auth, email, password)
  .then(result=>{
    const id = result.user;
    setUser(id);

  })
  .catch(error =>{
  console.error(error)
  setPassError(error.message)
 })
  }
// Show Password in Password input 
    const handleShowPass = ()=>{
      setShowPass(!showPass)
      }

    return (
        <div>
        <Helmet><title>LogInEmail || Book Vibe</title></Helmet>
    <div>
      {  user.displayName}
      { user.email}
    </div>
        <div className="hero bg-green-100 min-h-screen">
          <div className="hero-content flex-col">
                <div className="text-center ">

                </div>

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form className="card-body" onSubmit={handleEmailLogIn}>
               
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div className='flex'>
                  <input name='password' type={showPass ? "password" : "text"} placeholder="password" className="input input-bordered" required />
                  <FaEye className={showPass ? 'mx-3 my-4':'hidden'} onClick={handleShowPass}/>
                  <FaEyeSlash className={showPass ? 'hidden':'mx-3 my-4'} onClick={handleShowPass}/>
                  </div>
                 
                  <label className="label">
                 
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
                </div>
              
                <button className="btn btn-primary" >Log In</button>
                <div className='text-red-500'>
                  {passError}
                </div>
              
              </form>
             
            </div>
          </div>
        </div>
                    
                </div>
    );
};

export default LogInEmail;

// authorization = authentication
// email == logIn
// register == signup