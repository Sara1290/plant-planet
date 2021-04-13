import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { loginUser } from "../redux/userReducer";
import { registerUser } from "../redux/userReducer";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [showLoginView, setShowLoginView] = useState(true);
  const [showRegisterView, setShowRegisterView] = useState(false);

  const toggleLoginView = () => {
    if (showLoginView) {
      setShowLoginView(false);
    } else {
      setShowLoginView(true);
    }
    setShowRegisterView(false);
  };

  const toggleRegisterView = () => {
    if (!showRegisterView) {
      setShowRegisterView(true);
    } else {
      setShowRegisterView(false);
    }
    setShowLoginView(false);
  };

  function login() {
    axios
      .post("/api/auth/login", { email, password })
      .then((res) => {
        loginUser({ email, password });
        useHistory.push("/dash");
      })
      .catch((err) => console.log(err));
  }

  function register() {
    axios
      .post("/api/auth/register", { email, username, password })
      .then((res) => {
        registerUser({ email, username, password });
        useHistory.push("/dash");
      })
      .catch((err) => console.log(err));
  }
  const loginView = (
    <div className="login-inputs">
      <input placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
    </div>
  );

  const registerView = (
    <div className="register-inputs">
      <input placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="username" value={username} onChange={e => setUsername(e.target.value)} />
      <input placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
    </div>
  );

  return (
    <div>
      <header>Plant Planet</header>
      <button onClick={toggleRegisterView}>Register View</button>
      <button onClick={toggleLoginView}>Login View</button>
      {showLoginView ? loginView : null}
      {showRegisterView ? registerView : null}
      <div>
          <button className="login-button" onClick={login}>Login</button>
          <button className="register-button" onClick={register}>Register</button>
      </div>
    </div>
  );
};
export default Auth;
