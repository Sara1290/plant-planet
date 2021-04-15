
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { getUser, logoutUser } from "../../redux/userReducer";
import "./Nav.css";
import { useDispatch, useSelector } from "react-redux";

//I need to actually render a left-aligned vertical nav bar DONE
//I need to use the getUser function from the server to get the username and prof_pic for the logged in user.
//I need to have a functioning log out button
//I need to have icons that link to Add New Recipe (Form), Recipe Box, and Dash (logo, will be like home.)

const Nav = (props) => {
  //   const [loggedIn, setLoggedIn] = useState(true);
  const [prof_pic, setProf_pic] = useState("");
  const [username, setUsername] = useState("");
  // const { user } = useSelector((state) => state.userReducer)
  const dispatch = useDispatch();
  // const {username, prof_pic} = user;

  useEffect(() => {
      axios.get("/api/auth/me").then((res) => {
        dispatch(getUser(res.data));
      });
    
    }, [dispatch, username]);



const logout = () => {
  axios.delete("/api/auth/logout")
    .then((res) => {})
    .catch((err) => console.log(err));
};
  return (
      <div className="nav-bar">
      <div className="nav-planet-icon">
        <Link to="/dash">
          <img
            className="nav-img"
            src={"https://cdn.hipwallpaper.com/i/79/69/lRjATv.png"}
            alt="dash"
          />
        </Link>
      </div>
      <div className="nav-profile-container">
        <div
          className="nav-prof-pic"
          style={{ backgroundImage: `url('${setProf_pic}')` }}
        ></div>
        <p>{username}</p>
      </div>
      <div className="nav-link-container">
        <Link to="/recipeBox">
          <p className="nav-links">Recipe Box</p>
          {/* <img
            className="nav-img"
            src={"https://static.thenounproject.com/png/51422-200.png"}
            alt="recipe-box"
          /> */}
        </Link>
        <Link to="/form">
          <p className="nav-links">Add New Recipe</p>
          {/* <img
            className="nav-img"
            src={
              "https://cdn.iconscout.com/icon/premium/png-512-thumb/add-post-1702566-1486981.png"
            }
            alt="add new recipe"
          /> */}
        </Link>
        <Link to="/" onClick={logout}>
          <p className="nav-links">Logout</p>
          {/* <img
            className="nav-img"
            src={
              "https://cdn1.iconfinder.com/data/icons/door-3/200/1333_door-512.png"
            }
            alt="logout"
          /> */}
        </Link>
      </div>
    </div>
  );
};
// https://cdn.hipwallpaper.com/i/79/69/lRjATv.png
export default Nav;