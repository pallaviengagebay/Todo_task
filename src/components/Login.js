import React, { useState } from "react";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userErr, setUserErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  function loginHandler(e) {
    if (username.length < 3 || password.length < 8) {
      alert("Enter correct username and password");
    }
    e.preventDefault();

    console.log(username, password);
  }

  function userHandler(e) {
    let user = e.target.value;
    if (user.length < 3) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }
    setUserName(user);
  }
  function passwordHandler(e) {
    let pass = e.target.value;
    if (pass.length < 8) {
      setPasswordErr(true);
    } else {
      setPasswordErr(false);
    }
    setPassword(pass);
  }
  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={loginHandler}>
        <label>UserName:</label>
        <input type="text" placholder="Enter Username" onChange={userHandler} />
        {userErr ? <span>User not valid</span> : ""}
        <br />
        <br />
        <label>Password:</label>
        <input
          type="text"
          placholder="Enter Password"
          onChange={passwordHandler}
        />
        {passwordErr ? <span>Enter at least 8 numbers</span> : ""}
        <br />
        <br />
        <button className="btn btn-primary success">Login</button>
      </form>
    </div>
  );
}
export default Login;
