import { Helmet } from "react-helmet";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "./firebase.init";


const LogIn = () => {
  const auth = getAuth(app);
  console.log(app)
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = ()=>{

    signInWithPopup(auth, provider)
    .then(result=>{
      const user = result.user;
      console.log(user);
    })
    .catch(error=>{
      console.log('error', error.message)
    })
  }

    return (
        <div>
<Helmet><title>Login || Book Vibe</title></Helmet>
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
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
        <div className="form-control mt-6">
          <button className="btn btn-primary" onClick={handleGoogleSignIn}>Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default LogIn;
