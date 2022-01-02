import React from 'react';
import "./assets/App.css";
import { Routes, Route, Link } from "react-router-dom";
import Welcome from './Component/View/Welcome'
import Header from './Component/Header'
import Footer from './Component/Footer'
import Login from './Component/View/Login'
import Register from './Component/View/Register'
function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
