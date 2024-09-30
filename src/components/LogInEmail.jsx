import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaEye, FaEyeSlash  } from "react-icons/fa";
import LogInGoogle from './LogInGoogle'
import LogInGithub from './LogInGithub'
import app from './firebase.init';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider,signInWithPopup, signOut } from 'firebase/auth';

const LogInEmail = () => {
  const [user, setUser] = useState([]);
  const [showPass, setShowPass] = useState(true);
  const[emailError, setEmailError] = useState('');
  const[passError, setPassError] = useState('');
  const [logedInUser, setLogedInUser] = useState([null]);

  const auth = getAuth(app)    

//LogInGoogle

  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = ()=>{
    signInWithPopup(auth, provider)
    .then(resultGoogle=>{
      const userGoogle = resultGoogle.user;
      console.log(userGoogle);
      setLogedInUser(userGoogle)
    })
    .catch(error=>{
      console.log('error', error.message);
    })
  }

  const handleGoogleLoggedIn = ()=>{
    signOut(auth)
    .then(result =>{
            console.log(result);
            setLogedInUser(null)
    })
    .catch(error=>{
      console.log(error)
    })
  }

  //Email LogIn

    const handleEmailLogIn = e =>{
        e.preventDefault();       
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
  
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
  <div className=' mx-3 text-center'>
  Profile Name: {  user.displayName}
 <br />
     Email ID: { user.email}
     </div>
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
                  <input name='email' type="email" placeholder="email" className="input input-bordered"  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div className='flex'>
                  <input name='password' type={showPass ? "password" : "text"} placeholder="password" className="input input-bordered"  />
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

              <div>
               {/* Google Login Button */}
                { !logedInUser && 
                  logedInUser ?
                  <div className="form-control mt-6">
                  <button className="btn btn-primary" onClick={handleGoogleLoggedIn}>LoggedOut</button>
                  </div> 
                  :
                  <div className="form-control mt-6">
                  <button className="btn btn-primary" onClick={handleGoogleSignIn}>Login</button>
                  </div>
                }
                </div>
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