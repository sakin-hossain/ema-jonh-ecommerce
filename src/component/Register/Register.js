import React from 'react';
import { Link } from 'react-router-dom';
import "./Register.css";

const Register = () => {
    return (
        <div className="registerForm">
            <div>
                <h1>Register</h1>
                    <form onChange="">
                        <label htmlFor="name">Your Name: </label>
                        <input type="text" name="name" id="" /> <br />
                        <label htmlFor="email">Your Email: </label>
                        <input type="email" name="email" id="" /> <br />
                        <label htmlFor="password">You Password: </label>
                        <input type="password" name="password" id="" /> <br />
                        <label htmlFor="password">Re-Enter Your  vPassword: </label>
                        <input type="password" name="password" id="" /> <br />
                        <input type="submit" value="Submit" />
                    </form>
                    <p>Already have an account <Link to="/login">Login</Link></p>
                    <div>
                        <button className="btn__regular">Google Sign In</button>
                    </div>
            </div>
        </div>
    );
};

export default Register;