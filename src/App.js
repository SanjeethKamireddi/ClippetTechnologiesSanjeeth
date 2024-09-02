import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import CompanyInfo from "./components/CompanyInfo";

const App = () => {
    return (
        <Router>
            <nav>
                <a href="/signup">Signup</a>
                <a href="/login">Login</a>
                <a href="/company-info">Company Info</a>
            </nav>
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/company-info" element={<CompanyInfo />} />
            </Routes>
        </Router>
    );
};

export default App;
