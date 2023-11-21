import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

export const RoutesFile = () => {
    return(
        <Router> 
            <Navbar/>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
      </Router>
    )
};