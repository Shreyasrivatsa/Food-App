

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Make sure to import useNavigate for redirection
import './SignUp.css';

const SignUp = ({ setIsSignup }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();  // For redirection

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Creating a user object to store in localStorage
        const user = {
            username,
            email,
            password,
        };

        // Store the user object in localStorage as a JSON string
        localStorage.setItem('user', JSON.stringify(user));

        alert('Account created successfully! Redirecting to Login page...');
        navigate('/login');  // Redirect to login after successful signup
    };

    return (
        <div className="page-center">
            <div className="auth-container">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Create Account</button>
                </form>
                <p onClick={() => setIsSignup(false)}>Already have an account? Login</p>
            </div>
        </div>
    );
};

export default SignUp;
