import React, { useState } from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import insta_login from "../../images/insta_login.png";
import M from "materialize-css";
const SignUp = () => {
  let [name, setName] = useState();
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  let [dixable, setDixable] = useState(false);
  const sendData = () => {
    setDixable(true);
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      M.toast({ html: "invalid email", classes: "#b71c1c red darken-4" });
      setDixable(false);
      return;
    }
    fetch("/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((res1) => {
        if (res1.error) {
          M.toast({ html: res1.error, classes: "#b71c1c red darken-4" });
          setDixable(false);
        } else {
          console.log(res1);
          M.toast({ html: res1.sucess, classes: "#283593 indigo darken-3" });
          setDixable(false);
        }
      });
  };

  return (
    <div className="my-card">
      <div className="card  card-auth input-field" style={{}}>
        <h2 className="app_logo">SignUp</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="btn  waves-effect waves-light indigo darken-2 "
          onClick={sendData}
          disabled={dixable}
        >
          SignUp
        </button>
        <p>
          Have an account!! <Link to="/login"> Login</Link>
        </p>
      </div>
    </div>
  );
};
export default SignUp;
