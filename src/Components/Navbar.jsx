import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import Navbar from 'react-bootstrap';

const Navbar = () => {
  
  const navigate = useNavigate();
  return (
    
    <>
      
      <div className="container-fluid num sticky-top p-0">
        <nav className="navbar bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand nav-profile" href="#" style={{backgroundColor:"blue", borderRadius:"40px", padding:"10px"}}>
              User Profile
            </a>
            <div className="d-flex align-items-center gap-5 link">
              <Link to="/" className="home" style={{textDecoration:"none"}}>
                Home
              </Link>
              <Link to="/users" className="users" style={{textDecoration:"none"}}>Users</Link>
              <button
                type="button"
                className="btn btn-success"
                data-toggle="modal"
                data-target="#exampleModalCenter"
                onClick={() => { navigate('/addUser') }}
              >
                Add User
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;