import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Login = () => {
    const [credentials, setCredentials] = useState({ name: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem("user"));

        if (user && user.name === credentials.name && user.password === credentials.password) {
            alert("Login Successful!");
            navigate("/dashboard");
        } else {
            alert("Invalid Credentials");
        }
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleLogin} className="login-form">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={credentials.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
