import axios from "axios";
import React, { useState } from "react";
import { loginUser, registerUser } from "../../redux/userReducer";
import { useDispatch } from "react-redux";
import "./Auth.scss";

const Auth = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [showLoginView, setShowLoginView] = useState(true);
  const [showRegisterView, setShowRegisterView] = useState(false);
  const dispatch = useDispatch();
  // const {user} = useSelector((state) => state)
  // const {username, email} = user;
  const title = `Welcome to Plant Planet!`;
  const message = "Thank you for joining Plant Planet! Get Started sharing your favorite plant based recipes today!"

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
        console.log(res.data);
        dispatch(loginUser(res.data));
        handleSend()
        props.history.push("/dash");
      })
      .catch((err) => console.log(err));
  }

  function register() {
    axios
      .post("/api/auth/register", { email, username, password })
      .then((res) => {
        dispatch(registerUser(res.data));
        handleSend()
        props.history.push("/dash");
      })
      .catch((err) => console.log(err));
  }

  function handleSend() {
    axios.post('/api/email', { username, email, message, title, })
    .then(res => {
      console.log("email sent")
    }
    )
}
  
  const loginView = (
    <div className="auth-inputs">
      <input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />{" "}
      <br />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  );

  const registerView = (
    <div className="auth-inputs">
      <input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  );

  return (
    <div className="auth-body-container">
    <div className="auth-body">
      <h1 className="auth-header">
        Welcome to <br /> Plant Planet!
      </h1>
      <h3>
        {" "}
        A recipe sharing app made to simplify your search for plant based
        recipes
      </h3>
      <div className="auth-view-buttons-container">
        <button onClick={toggleRegisterView}>Register View</button>
        <button onClick={toggleLoginView}>Login View</button>
      </div>
      {showLoginView ? loginView : null}
      {showRegisterView ? registerView : null}
      <div className="auth-button-container">
        <button className="auth-button" onClick={login}>
          Login
        </button>
        <button className="auth-button" onClick={register}>
          Register
        </button>
      </div>
    </div>
    </div>
  );
};

export default Auth;
