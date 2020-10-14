import React from "react";
import "../../App.css";
import {Link} from 'react-router-dom'
import insta_login from "../../images/insta_login.png";
const Login = () => {
  return (
    <div className="my-card">
      <div
        className="card  card-auth input-field"
        
      >
        <h2 className="app_logo">Login</h2>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />

        <button className="btn  waves-effect waves-light indigo darken-2 ">
          SignUp
        </button>
        <p>Don't have an account!!  <Link to='/signup'> SignUp</Link></p>
      </div>
    </div>
  );
};
export default Login;
