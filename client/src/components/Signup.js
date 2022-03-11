import React from "react";
import login from  '../images/loginImage.jpg';
import { NavLink } from "react-router-dom";
import "./style.css"

const Signup = () => {
  return (
    <>
    <div className="row m-5 p-5 justify-content-center mainContainer">
      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
        <div className="form-floating mb-2">
          <input
            type="text"
            name="name"
            className="form-control"
            id="floatingInput"
          />
          <label htmlFor="floatingInput">
            <i className="zmdi zmdi-account material-icons-name"> FullName</i>
          </label>
        </div>
        <div className="form-floating mb-2">
          <input
            type="email"
            name="email"
            className="form-control"
            id="floatingInput"
          />
          <label htmlFor="floatingInput">
            <i className="zmdi zmdi-email material-icons-name"> Email</i>
          </label>
        </div>
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
            type="text"
            name="work"
            className="form-control"
            id="floatingInput"
          />
          <label htmlFor="floatingInput">
            <i className="zmdi zmdi-slideshow material-icons-name">
              {" "}
              Profession
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
        <div className="form-floating mb-2">
          <input
            type="password"
            name="cpassword"
            className="form-control"
            id="floatingInput"
          />
          <label htmlFor="floatingInput">
            <i className="zmdi zmdi-lock material-icons-name">
              {" "}
              Confirm Password
            </i>
          </label>
        </div>
        <div className="col-12 mb-3 ">
          <button type="submit" class="btn btn-primary justify-content-center bg-black mt-2">
            Sign Up
          </button>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-9 col-xs-9">
        <figure>
          <img className="signupImage" src={login} alt="login" />
        </figure>
        <NavLink to='/login' style={{color:"black"}}>I am already Registered</NavLink>
      </div>
      </div>
    </>
  );
};

export default Signup;
