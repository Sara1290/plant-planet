import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {getUser, logoutUser} from '../redux/userReducer';
import { logout } from '../../server/authController';

const Nav = () => {
    const [loggedIn, setLoggedIn] = useState()

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

}
export default Nav;