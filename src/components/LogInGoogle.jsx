import { Helmet } from "react-helmet";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import app from "./firebase.init";
import { useState } from "react";
import { AiFillGoogleCircle } from "react-icons/ai";

const LogInGoogle = () => {

  const [logedInUser, setLogedInUser] = useState([null]);

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
 
  const handleGoogleSignIn = ()=>{
    signInWithPopup(auth, provider)
    .then(result=>{
      const user = result.user;
      console.log(user);
      setLogedInUser(user)
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

    return (
        <div>
<Helmet><title>Login || Book Vibe</title></Helmet>



<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
        <div>
    {
      logedInUser && <div>
      <h1>LogIn User Info:</h1>
      <h2>User Name:{logedInUser.displayName}</h2>
      <h3>Email: {logedInUser.email}</h3>
      </div>
    }
    </div>
      <h1 className="text-5xl font-bold">Login now here</h1>
      <p className="py-6 text-green-400">
        If you are a user then Log in please.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        { logedInUser && 
          logedInUser ?
          <div className="form-control mt-6">
          <button className="btn btn-primary" onClick={handleGoogleLoggedIn}>LoggedOut</button>
        </div> 
        :
        <div className="form-control mt-6">
          <button className="btn btn-primary" onClick={handleGoogleSignIn}>Login</button>
        </div>
        }
      </form>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default LogInGoogle;



//STEP TO SETTING FIREBASE (WEB SETTING)
// --------------------------------------
//              INITIAL SETUP
// --------------------------------------
// 1. go to console.firebase.google.com
// 2. create project(skip google analytic)
// 3. register app(create config)
// 4. install firebase: npm install firebase.
// 5. add config file to your project(create a file in code as a file firebase.init.js)
// 6. DANGER: do not publish or make firebase config to public those to github.
// --------------------------------------
//              INTEGRATION
// --------------------------------------
// 7. Visit: Go to Docs>> Build>> Authenticaton >> Web >> Get started.
// 8. Export default app: from the firebase.config.js file.
// 9. login.jsx: import {getAuth} from 'firebase/auth'
// 10. const auth =  getAuth(app); import app from /firebase.init
// --------------------------------------
//             PROVIDER
// --------------------------------------
// 11. const Provider = new googleAuthProvider();
// import googleAuthProvider and create a new provider.
// 12. use signInWithPopUp and pass auth and provider.
// 13. Activate sign-in method(for google, github etc) from console.firebase.google.com
//  14. [vite]: change 127.0.0.1 to localhost.

// --------------------------------------
//              MORE AUTH PROVIDER
// --------------------------------------
// 1. Activate the auth provider(create app, provide redirect URL, client ID, client secret).
//  2. Go to firebase >> Documentation >> github >>
