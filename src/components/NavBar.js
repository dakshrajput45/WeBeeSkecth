import React, { useState} from "react";
import "./NavBar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';



const Navbar = () => {
  const navigate=useNavigate();
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <img src="" alt="logo"></img>
        </div>
        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <button onClick={()=>{navigate("/")}}>Home</button>
            <button onClick={()=>{navigate("/AboutUs")}}>AboutUs</button>
            <button onClick={()=>{navigate("/Services")}}>Services</button>
            <button onClick={()=>{navigate("/Team")}}>Team</button>
            <button onClick={()=>{navigate("/Blog")}}>Blog</button>
            <button onClick={()=>{navigate("/contact")}}>contact</button>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href=""
                >
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                href=""
                >
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href=""
                >
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <button onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;