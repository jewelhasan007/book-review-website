import { Helmet } from "react-helmet";

const Register = () => {
  return (
    <div>
      <Helmet><title>Register || Book Vibe</title></Helmet>
      <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center">
      <h1 className="text-5xl font-bold ">Register Here</h1>
      <p className="py-6 text-blue-500">
        Plese Provide all the information for registration.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" placeholder="name" className="input input-bordered" required />
        </div>
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
          <button className="btn btn-primary">Register Now</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  );
};

export default Register;