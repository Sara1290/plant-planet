import React, {useState} from 'react';

function Auth () {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
   
  
    return (
        <div>
            <input placeholder="email" />
            <input placeholder="password" />
        </div>
    )

}
export default Auth;