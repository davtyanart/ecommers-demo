import React, { useState } from 'react'

import Login from './Login/Login';
import Signup from './Signup/Signup';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleView = () => {
        setIsLogin(!isLogin);
    }
    return (
        <div>
            <span onClick={toggleView}>Go to {isLogin ? 'Signup' : 'Login'}</span>
            {isLogin ?
                <Login />
                :
                <Signup />
            }
        </div>
    )
}

export default Auth;



