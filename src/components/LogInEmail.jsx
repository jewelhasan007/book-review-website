import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaEye, FaEyeSlash  } from "react-icons/fa";

import app from './firebase.init';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const LogInEmail = () => {

const [emailUser, setEmailUser] = useState('');
const [userSubmit, setUserSubmit] = useState('');
const [passwordError, setPasswordError] = useState('');
const [showPass, setShowPass] = useState(true);


    const handleEmailLogIn = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;
        console.log(name, email, password);
        // console.log('clicked')
  
        if(password.length < 4 ) {
          setPasswordError('the password is less than 4 characters');
          return
      
        }
        else if(!/[A-Z]/.test(password)){
          setPasswordError('UPPERCASE Missing')
          return
        }
        else if(!/[a-z]/.test(password)){
          setPasswordError('lowercase Missing')
          return
        }
        else if(!/[0-9]/.test(password)){
          setPasswordError('number Missing')
          return
        }
        else if(!/[!#$%&? "]/.test(password)){
          setPasswordError('special character is missing')
          return
        }
        setPasswordError('');
        setUserSubmit('');
const auth = getAuth(app)    
createUserWithEmailAndPassword(auth, email, password)
.then(result=>{
  const logInUser = result.user;
  console.log(logInUser);
  setEmailUser(logInUser);
  setUserSubmit(logInUser);
 
})
.catch(error =>{
  console.log(error)
  setPasswordError(error.message)
  console.log(passwordError)
})

    }
// Show Password in Password input 
    const handleShowPass = ()=>{
      setShowPass(!showPass)
      }

    return (
        <div>
        <Helmet><title>LogInEmail || Book Vibe</title></Helmet>
    
        <div className={passwordError && passwordError ? 'text-center hidden' : 'text-center' }>
        <div className={userSubmit && !passwordError  ? 'text-green-500' : '' }>
           User: {emailUser.displayName}
         </div>
         {
   
         }
         <div className={userSubmit && !passwordError ? 'text-green-500' : '' }>
         Email: {emailUser.email}
         </div>
         </div>
  

        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col">
                <div className="text-center ">
                <h1 className="text-5xl font-bold">Email Log In</h1>
            
                </div>

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form className="card-body" onSubmit={handleEmailLogIn}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input name='name' type="name" placeholder="name" className="input input-bordered" required />
                </div>
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
                <div className="form-control flex flex-row">
                
                  <input className='mr-2' type="checkbox" name="terms" id="terms" required/>
                  <label htmlFor="terms">I accept the <a href="" className='font-bold'>Terms & Conditions</a></label>
                
                </div>
                <button className="btn btn-primary" >Submit</button>
                <div className='mt-3'>
                {
                  userSubmit && userSubmit ? <span className='text-green-500 font-bold'>Successfully Submitted</span> : ''
                }
                </div>
                <div className= { passwordError && passwordError ? 'text-red-500 font-bold' : ''}>
                  { passwordError }
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