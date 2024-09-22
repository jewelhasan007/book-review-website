import { NavLink } from "react-router-dom";
import './Navlink.css'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
     <li className="hover:bg-white mx-3"><NavLink  to= "/" 
    className={({isActive})=>  {
      return isActive ? "text-green-400 font-bold border-2 border-green-500 bg-white " : "font-bold hover:border-green-500 bg-white";
    }}>
   Home</NavLink></li>

    <li className="hover:bg-white mx-3"><NavLink  to= "/listed" 
    className={({isActive})=>  {
      return isActive ? "text-green-400 font-bold border-2 border-green-500 bg-white " : "font-bold hover:border-green-500 bg-white ";
    }}>
   Tob List</NavLink></li>

    <li className="hover:bg-white mx-3"><NavLink  to= "/read" 
    className={({isActive})=>  {
      return isActive ? "text-green-500 font-bold border-2 border-green-500 :bg-white " : "font-bold hover:border-green-500 bg-white ";
    }}>
   Page to Read</NavLink></li>
      </ul>
    </div>
    <a href="/" className="btn btn-ghost text-xl">Book Vibe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    
    <li className="mx-3"><NavLink  to= "/" 
    className={({isActive})=>  {
      return isActive ? "text-green-500 font-bold border-2 border-green-500 bg-white " : "font-bold hover:border-green-500 bg-white";
    }}>
   Home</NavLink></li>

    <li className="mx-3"><NavLink  to= "/listed" 
    className={({isActive})=>  {
      return isActive ? "text-green-500 font-bold border-2 border-green-500 bg-white" : "font-bold hover:border-green-500 bg-white ";
    }}>
   Listed Book</NavLink></li>

    <li className="mx-3"><NavLink  to= "/read" 
    className={({isActive})=>  {
      return isActive ? "text-green-500 font-bold border-2 border-green-500 bg-white " : "font-bold hover:border-green-500 bg-white ";
    }}>
   Page to Read</NavLink></li>
    <li className="mx-3"><NavLink  to= "/map" 
    className={({isActive})=>  {
      return isActive ? "text-green-500 font-bold border-2 border-green-500 bg-white " : "font-bold hover:border-green-500 bg-white ";
    }}>
   Location</NavLink></li>
     
    </ul>
  </div>
  <div className="navbar-end"> 
  <Link to="/loginGoogle"><a className="btn mx-3 font-bold text-white bg-green-500 border-green-500 hover:bg-white hover:text-green-500 hover:border-green-500">Sign In by Google</a></Link>
  <Link to="/loginGithub"><a className="btn mx-3 font-bold text-white bg-green-500 border-green-500 hover:bg-white hover:text-green-500 hover:border-green-500">Sign In by Github</a></Link>
    <Link to="/register"><a className="btn mx-4 font-bold text-white bg-blue-500 border-blue-500 hover:bg-white hover:text-blue-500 hover:border-blue-500">Register</a></Link>
  </div>
</div>

        </div>
    );
};

export default Header;