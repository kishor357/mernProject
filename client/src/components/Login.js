import React from "react";
import { NavLink } from "react-router-dom";
import signup from  '../images/signup.png';


const Login = () => {
  return (
    <>
      <div className="row m-5 p-5 justify-content-center mainLoginContainer">
        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 offset-1">
          
          <div className="form-floating mb-2">
            <input
              type="number"
              name="number"
              className="form-control"
              id="floatingInput"
            />
            <label htmlFor="floatingInput">
              <i className="zmdi zmdi-phone-in-talk material-icons-name">
                {" "}
                Number
              </i>
            </label>
          </div>
          
          <div className="form-floating mb-2">
            <input
              type="password"
              name="password"
              className="form-control"
              id="floatingInput"
            />
            <label htmlFor="floatingInput">
              <i className="zmdi zmdi-lock material-icons-name"> Password</i>
            </label>
          </div>
          
          <div className="col-12 mb-3  ">
            <button
              type="submit"
              class="btn btn-primary justify-content-center bg-black mt-2"
            >
              Login
            </button>
          </div>
        
        <figure>
          <img className="loginImage" src={signup} alt="login" />
        </figure>
          <NavLink to="/signup" className="" style={{color:"black"}}>Yet to Register</NavLink>
        </div>
      </div>
    </>
  );
};

export default Login;
