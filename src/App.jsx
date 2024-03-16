import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import { Home } from "./Pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./Components/Footer";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import "./App.css"
import Register from "./Pages/Register";
import Contact from "./Pages/Contact";
import Courses from "./Pages/Courses";
import About from "./Pages/About";




function App() {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    // Check if the user is on the Dashboard route
    if (location.pathname === "/Dashboard") {
      // Hide the Navbar if on the Dashboard route
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
          <Route path="/home" element={<Home />} />
         
         
          <Route path="/" element={<Login />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Courses" element={<Courses/>} />
          <Route path="/About" element={<About/>} />
          <Route path='/dashboard' element={<Dashboard/>}/>
          
          
        </Routes>
      </div>
      <Footer />
      
    </>
  );
}

export default App;
