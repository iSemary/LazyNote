import React, { useState } from "react";
import "./assets/App.css";
import { Routes, Route, Link } from "react-router-dom";
import Welcome from "./Component/View/Welcome";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Login from "./Component/View/Login";
import Register from "./Component/View/Register";
import AddNote from "./Component/View/User/AddNote";
import AddTag from "./Component/View/User/AddTag";
import Settings from "./Component/View/User/Settings";
import Home from "./Component/View/User/Home";

import alertify from 'alertifyjs'
alertify.set("notifier", "position", "top-right");

// Axios Configuration
import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:8000";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("auth_token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

function App() {
  const [User, setUser] = useState({
    loggedIn: localStorage.getItem("auth_token") ? true : false,
    token: localStorage.getItem("auth_token"),
  });

  console.log(User);

  return (
    <div className="App">
      <Header User={User} />
      <Routes>
        <Route path="/" element={<Welcome User={User} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/notes/add" element={<AddNote />} />
        <Route path="/tags/add" element={<AddTag />} />
        <Route path="/home" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
