
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { getUser } from "../../redux/userReducer";
import { useDispatch, useSelector } from "react-redux";
import "./Nav.scss";
import plantlogo from "../../assets/plant_planet_trans.png"
import logout_img from "../../assets/logout.png"
import add_button from "../../assets/add_button.png"
import recipe_box from "../../assets/recipe_box.png"


const Nav = (props) => {
 
  // const [prof_pic, setProf_pic] = useState("");
  // const [username, setUsername] = useState("");
  const { user } = useSelector((state) => state.userReducer)
  const dispatch = useDispatch();
 

  useEffect(() => {
    if (user) {
      axios.get("/api/auth/me").then((res) => {
        dispatch(getUser(res.data));
      });
    }
    
    }, [dispatch, user]);



const logout = () => {
  axios.post("/api/auth/logout")
    .then((res) => {})
    .catch((err) => console.log(err));
};

  return (
    <div className="nav-bar">
                  <div className="nav-planet-icon">
                    <Link to="/dash">
                      <img
                        className="nav-img"
                        src={plantlogo}
                        alt="dash"
                      />
                    </Link>
                  </div>
        {/* <div
          className="nav-prof-pic"
          
          ></div>
          <p>{username}</p>
        </div> */}
      {/* <div className="nav-link-container"> */}
        <div className="nav-profile-container">
        <Link to="/recipeBox">
          {/* <p className="nav-links">Recipe Box</p> */}
          <img
            className="nav-img"
            src={recipe_box}
            alt="recipe-box"
          />
        </Link>
        <Link to="/form">
          {/* <p className="nav-links">Add New Recipe</p> */}
          <img
            className="nav-img"
            src={add_button}
            alt="add new recipe"
          />
        </Link>
        <Link to="/" onClick={logout}>
          {/* <p className="nav-links">Logout</p> */}
          <img
            className="nav-img"
            src={logout_img}
            alt="logout"
          />
        </Link>
      </div>
    </div>
  );
};
export default Nav;