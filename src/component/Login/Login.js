import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./Login.css";

const Login = () => {
    const {signInUsingGoogle} =  useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || '/shop';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result=>{
            history.push(redirect_url);
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    return (
        <div className="loginForm">
            <div>
                <h1>Login</h1>
                <form onSubmit="">
                    <label htmlFor="email">You Email: </label>
                    <input type="email" name="email" placeholder="Your Email" id="" /> <br />
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" placeholder="You Password" id="" /> <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New To Ema-Jonh Website ? <Link to="/register">Create Account</Link></p>
                <div>
                    <button 
                    onClick={handleGoogleLogin}
                    className="btn__regular"
                    >Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Login;