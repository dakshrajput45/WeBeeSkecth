import React, { useState, useEffect } from "react";
import "../Css/NavBar.css";
import Aos from "aos";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import BasicMenu from "./DropDown";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import logo from "../images/logo/2.png"

const Navbar = () => {
  const {active,setActive} = useContext(AppContext);
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    Aos.init({
      duration: 1500,
      easing: "ease-in-out",
      once: true,
    });

    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSticky(true);
      } else {
        const isAtTop = window.pageYOffset === 0;
        setSticky(!isAtTop);
      }
    };

    handleResize(); // Call initially to set sticky state based on window width

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleResize);
    };
  }, []);

  const navigate = useNavigate();
  const [icon, setIcon] = useState(false);

  const navToggle = () => {
    setActive(!active);
    setIcon(!icon);
  };

  useEffect(() => {
    const handleDocumentClick = () => {
      setActive(false);
      setIcon(false);
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [setActive]);

  const handleMenuClick = (e) => {
    e.stopPropagation();
    setActive(false);
    setIcon(false);
  };
  //console.log(sticky);
  return (
    <nav
      className={sticky ? "nav sticky" : "nav"}
    >
      <div className={sticky ? "top" : "top-nav"}>
        <div className="info-nav">
          <p>+91 99589 95724</p>
          <p>connect@webeesketch.com</p>
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
      <div className="nav__brand" data-aos="fade-down">
        <div className="logo">
          <img
            src={logo}
            className="w-[55%] ml-5"
            alt="logo"
            onClick={() => {
              navigate("/");
            }}
          ></img>
        </div>
        <ul
          className={active ? "nav__menu nav__active" : "nav__menu"}
          onClick={handleMenuClick}
        >
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
            <li>
              <BasicMenu />
            </li>
            <li className="nav__item  ">
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
                Contact
              </button>
            </li>
            <div className="info-contain">
              <div className="info-nav">
                <p>+91934732XXXX</p>
                <p>Emailexample@gmail.com</p>
              </div>
              <div className="social-media" >
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

        <div className="mr-[30px] hidden md:flex">
          <Button
            variant="contained"
            disableElevation
            style={{
              fontSize: "15px", padding: "8px 16px", backgroundColor: "rgb(0, 33, 65)", color: "white", gap: "5px"
            }}
            onClick={()=>{window.location.href = ' https://calendly.com/webeesketch/30min';}}
          >
            Book A Call <MdArrowForward />
          </Button>
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation();
            navToggle();
          }}
          className={icon ? "nav__toggler toggle" : "nav__toggler"}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
