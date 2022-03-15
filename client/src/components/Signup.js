import { React, useState } from "react";
import login from "../images/loginImage.jpg";
import { NavLink } from "react-router-dom";
import "./style.css";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });
  
  let name, value;

  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;

    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);

    const {name, email, phone, work, password, cpassword} = data;

    const res = await fetch("/register", {
      method:"POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name, email, phone, work, password, cpassword
      })
    });

    console.log(res);

    const resData = await res.json();

    console.log(resData);

    if(resData.message){
      alert(resData.message);
    }

    if(resData.error){
      alert(resData.error);
    }

    // if(resData.status === 422 || !resData){
    //   alert('Registration Failed.')
    // }else{
    //   alert("Registration Success.")
    // }

  };

  return (
    <>
      <div className="row m-5 p-5 justify-content-center mainContainer">
        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
          <form onSubmit={handleSubmit} method="POST">
            <div className="form-floating mb-2">
              <input
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}
                className="form-control"
                id="floatingInput"
              />
              <label htmlFor="floatingInput">
                <i className="zmdi zmdi-account material-icons-name">
                  {" "}
                  name
                </i>
              </label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
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
                name="phone"
                value={data.phone}
                onChange={handleChange}
                className="form-control"
                id="floatingInput"
              />
              <label htmlFor="floatingInput">
                <i className="zmdi zmdi-phone-in-talk material-icons-name">
                  {" "}
                  phone
                </i>
              </label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="text"
                name="work"
                value={data.work}
                onChange={handleChange}
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
                value={data.password}
                onChange={handleChange}
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
                value={data.cpassword}
                onChange={handleChange}
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
              <button
                type="submit"
                className="btn btn-primary justify-content-center bg-black mt-2"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-9 col-xs-9">
          <figure>
            <img className="signupImage" src={login} alt="login" />
          </figure>
          <NavLink to="/login" style={{ color: "black" }}>
            I am already Registered
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Signup;
