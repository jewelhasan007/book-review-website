import React from 'react';
import { Helmet } from 'react-helmet';



const LogInEmail = () => {

    const handleEmailLogIn = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        // console.log('clicked')
    }
    
    return (
        <div>
        <Helmet><title>LogInEmail || Book Vibe</title></Helmet>

        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col">
                <div className="text-center ">
                <h1 className="text-5xl font-bold">Email Log In</h1>
              <p className="py-2 text-green-400">
                Please Log in with Email.
              </p>
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
                  <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
                </div>
                <button className="btn btn-primary" >Submit</button>
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