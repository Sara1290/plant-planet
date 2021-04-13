import axios from 'axios';
import React, {useState} from 'react';
import {useHistory} from 'react-router';
import {loginUser} from '../redux/userReducer';
import {registerUser} from '../redux/userReducer';

const Auth = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
   
    function login() {
        axios.post('/api/auth/login', {email, password})
        .then(res => {
            loginUser({email, password})
            useHistory.push("/dash")
        })
        .catch(err => console.log(err))
    }

    function register() {
        axios.post('/api/auth/register', {email, username, password})
        .then(res => {
            registerUser({email, username, password})
            useHistory.push("/dash")
        })
        .catch(err => console.log(err))
    }
    return (
        <div>
            <input placeholder="email" />
            <input placeholder="password" />
        </div>
    )

}
export default Auth;