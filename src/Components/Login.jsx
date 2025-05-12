import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "./Login.css";

const Login = ({ setIsSignup, setIsLoggedIn }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleLogin = (e) => {
        e.preventDefault();

        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (
            storedUser &&
            storedUser.username === username &&
            storedUser.password === password
        ) {
            setIsLoggedIn(true);
            localStorage.setItem("isLoggedIn", "true");
            navigate("/"); // Redirect to home page on successful login
        } else {
            alert("Invalid credentials or user not registered.");
        }
    };

    const handleSignupRedirect = () => {
        navigate("/signup"); // Navigate to SignUp page
    };

    return (
        <div className="auth-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
            <p onClick={handleSignupRedirect}>Don't have an account? Sign up</p> {/* Updated to call handleSignupRedirect */}
        </div>
    );
};

export default Login;
