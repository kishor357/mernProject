import React from "react";
import contact from "../images/contactus.jpg";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="container  p-5 d-flex justify-content-center">
        <div className="row ">
          <div className="col-lg-4 col-xs-6 contactUsColCD">
            <p>
              <b>Phone</b>: 842714421
            </p>
          </div>
          <div className="col-lg-4 col-xs-6 contactUsColCD">
            <p>
              <b>Email</b>: das358kishor@gmail.com
            </p>
          </div>
          <div className="col-lg-4 col-xs-6 contactUsColCD">
            <p>
              <b>Address</b>: Krishna Nagar, East Delhi
            </p>
          </div>
        </div>
      </div>
      <div className="row  d-flex justify-content-center mainContainer contactUsContainer">
        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 px-4">
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
            <textarea
              type="text"
              name="work"
              className="form-control messageInput"
              id="floatingInput"
            />
            <label htmlFor="floatingInput">
              <i className="zmdi zmdi- material-icons-name"> message</i>
            </label>
          </div>
         
          <div className="col-12 mb-3 ">
            <button
              type="submit"
              class="btn btn-primary justify-content-center bg-black mt-2"
            >
              Submit
            </button>
          </div>
        </div>

        <div className="col contactUsImage1 ">
            <figure>
              <img className="contactUsImage" src={contact} alt="login" />
            </figure>
          </div>

        {/* <div className="col-lg-4 col-md-6 col-sm-9 col-xs-9">
          <div className="row">
            <div className="col">
              <NavLink to="/login" style={{ color: "black" }}>
                Login
              </NavLink>
            </div>
            <div className="col">
              <NavLink to="/signup" style={{ color: "black" }}>
                Sign Up
              </NavLink>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Contact;
