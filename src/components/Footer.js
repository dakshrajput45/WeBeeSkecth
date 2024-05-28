import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { SlArrowRightCircle } from "react-icons/sl";
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaLinkedinIn
} from "react-icons/fa";
import "../Css/Footer.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function Footer() {

    useEffect(() => {
        Aos.init({
            duration: 1500,
            easing: 'ease-in-out',
            once: true,
        });
    }, [])

    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const changeHandler = (event) => {
        setEmail(event.target.value);
    };

    const handleNewsletterSubscription = () => {
        // Implement newsletter subscription logic
    };

    return (
        <footer className="footer" data-aos="fade-up">
            <div className="footer-logo" >
                <img src="https://www.webeesketch.com/scale.png" alt="Company Logo" className="w-[55%]" />
                <p>Optimize your success with our ROI-driven digital marketing agency.</p>

                <div className="footer-social" >
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/webeesketch">
                                <FaFacebookSquare />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/webeesketch">
                                <FaInstagramSquare />
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
            <div className="footer-links-left" >
                <p>Company</p>
                <div className="flex md:flex-col flex-row">
                    <button onClick={() => navigate("/AboutUs")}>About Us</button>
                    <button onClick={() => navigate("/Services")}>Services</button>
                </div>
                <div className="flex md:flex-col flex-row">
                    <button onClick={() => navigate("/Team")}>Team</button>
                    <button onClick={() => navigate("/Blog")}>Blog</button>
                </div>
            </div>
            <div className="footer-links-right" >
                <p>Support</p>
                <div className="flex md:flex-col flex-row">
                    <button onClick={() => navigate("/contact")}>Contact</button>
                    <button>Book a Demo</button>
                </div>
                <div className="flex md:flex-col flex-row">
                    <button>Privacy Policy</button>
                    <button>Terms & Conditions</button>
                </div>
                <button>Cookies</button>
            </div>
            <div className="footer-newsletter" >
                <p>Join Our Newsletter</p>
                <div className="newsletter-input">
                    <input
                        type="email"
                        onChange={changeHandler}
                        value={email}
                        placeholder="Enter Your Email"
                    />
                    <span onClick={handleNewsletterSubscription} >
                        <SlArrowRightCircle />
                    </span>
                </div>
                <p>We will send you weekly updates for better product management.</p>
            </div>
        </footer>
    );
}

export default Footer;
