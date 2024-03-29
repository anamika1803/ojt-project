import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import { Home } from "./Pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./Components/Footer";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import "./App.css";
import Register from "./Pages/Register";
import Contact from "./Pages/Contact";
import Courses from "./Pages/Courses";
import About from "./Pages/About";
import UserCountGraph from "./Pages/UserCountGraph";

import ProfilePage from "./Pages/Profile";

function App() {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    // Check if the current route is either /login or /register
    if (location.pathname === "/login" || location.pathname === "/register") {
      // Hide the Navbar if on the Login or Register routes
      setShowNavbar(false);
    } else {
      // Show the Navbar for other routes
      setShowNavbar(true);
    }
  }, [location.pathname]);

  return (
    <>
      <div>
        {showNavbar && <Navbar />}
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/graph" element={<UserCountGraph />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
