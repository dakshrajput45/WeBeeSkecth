import React, { useState } from "react";
import "./NavBar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedinIn,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <div className="nav__brand">
        <div className="logo">
          <img
            src=""
            alt="logo"
            onClick={() => {
              navigate("/");
            }}
          ></img>
        </div>
        <ul className={active}>
          <div className="btn-nav">
            <li className="nav__item">
              <button
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </button>
            </li>
            <li className="nav__item">
              <button
                onClick={() => {
                  navigate("/AboutUs");
                }}
              >
                AboutUs
              </button>
            </li>
            <li className="nav__item">
              <button
                onClick={() => {
                  navigate("/Services");
                }}
              >
                Services
              </button>
            </li>
            <li className="nav__item">
              <button
                onClick={() => {
                  navigate("/Blog");
                }}
              >
                Blog
              </button>
            </li>
            <li className="nav__item">
              <button
                onClick={() => {
                  navigate("/contact");
                }}
              >
                contact
              </button>
            </li>
            <div className="info-container">
              <div className="info-nav">
                <p>+91934732XXXX</p>
                <p>Emailexample@gmail.com</p>
              </div>
              <div className="social-media">
                <ul className="social-media-desktop">
                  <li>
                    <a href="https://www.facebook.com/webeesketch">
                      <FaFacebookSquare className="facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/webeesketch">
                      <FaInstagramSquare className="instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/webeesketch">
                      <FaLinkedinIn />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ul>
        <div onClick={navToggle} className={icon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
      <div className="top-nav">
        <div className="info-nav">
          <p>+91 934732XXXX</p>
          <p>Emailexample@gmail.com</p>
        </div>
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="https://www.facebook.com/webeesketch">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/webeesketch">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/webeesketch">
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
