import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {getUser, logoutUser} from '../../redux/userReducer';
import './Nav.css'

//I need to actually render a left-aligned vertical nav bar
//I need to use the getUser function from the server to get the username and prof_pic for the logged in user. 
//I need to have a log out button 
//I need to have icons that link to Add New Recipe (Form), Recipe Box, and Dash (logo, will be like home.)



const Nav = () => {
    const [loggedIn, setLoggedIn] = useState(true)
    const [prof_pic, setProf_pic] = useState("")
    const [username, setUsername] = useState("")


    useEffect( () => {
        axios.get('/api/auth/me')
        .then( res => {
            setLoggedIn(res.data.results)
        })
    }, [getUser])

    useEffect( () => {
        axios.delete('/api/auth/logout')
        .then( res => {
            setLoggedIn(res.data.results)
        })
    }, [logoutUser])


    return (
        <div className="nav-bar">
        <div className="nav-profile-container">
        <div className="nav-prof-pic" style={{ backgroundImage: `url('${setProf_pic}')` }}>
        </div>
        <p>{setUsername}</p>
        </div>
        <div className="nav-links">
            <Link to = "/dash">
            <img className="nav-img" src={"https://lh3.googleusercontent.com/proxy/udV11XqvM0TlQe0bhqnWmFQoGYWU1r9nWLA_nIB0YDpLB_5npTfd9krGOJmwvrx_HmoWvxJJWh7pdm_hyd06T92mh1kKGd-9gXJCAy6acpbrVSOCNvPKKgNXiCW7g0RHylLBLCXWmAcXQK5k5Zb3AF7R32YG"} alt="dash" />
            </Link>

            <Link to = "/recipeBox">
            <img className="nav-img" src={"https://static.thenounproject.com/png/51422-200.png"} alt="recipe-box"/>
            </Link>

            <Link to = "/form">
            <img className="nav-img" src={"https://cdn.iconscout.com/icon/premium/png-512-thumb/add-post-1702566-1486981.png"} alt="add new recipe" />
            </Link>
          </div>
        </div>
    )



}
export default Nav;
