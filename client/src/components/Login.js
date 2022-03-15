import {React, useState} from "react";
import { NavLink } from "react-router-dom";
import signup from  '../images/signup.png';


const Login = () => {

  const [LoginData, setLoginData] = useState({
    email:"",
    password:"",
  });

  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;

    setLoginData({...LoginData, [name]:value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(LoginData);

    const {email, password} = LoginData;

    const res = await fetch("/signin",{
      method: "POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
        email, password
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

  }

  return (
    <>
      <div className="row m-5 p-5 justify-content-center mainLoginContainer">
        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 offset-1">
        <form onSubmit={handleSubmit} method="POST">
          
          <div className="form-floating mb-2">
            <input
              type="email"
              name="email"
              value={LoginData.email}
              onChange={handleChange}
              className="form-control"
              id="floatingInput"
            />
            <label htmlFor="floatingInput">
              <i className="zmdi zmdi-email material-icons-name">
                {" "}
                Email
              </i>
            </label>
          </div>
          
          <div className="form-floating mb-2">
            <input
              type="password"
              name="password"
              value={LoginData.password}
              onChange={handleChange}
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
              className="btn btn-primary justify-content-center bg-black mt-2"
            >
              Login
            </button>
          </div>

          </form>
        
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
