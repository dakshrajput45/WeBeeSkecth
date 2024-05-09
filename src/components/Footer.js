import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { SlArrowRightCircle } from "react-icons/sl";
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaLinkedinIn
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const changeHandler = (event) => {
        setEmail(event.target.value);
    };

    const handleNewsletterSubscription = () => {
        // Implement newsletter subscription logic
    };

    return (
        <footer className="footer">
            <div className="footer-logo">
                <img src="" alt="Company Logo" className="company-logo" />
                <p>Optimize your success with our ROI-driven digital marketing agency.</p>

            <div className="footer-social">
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
            <div className="footer-links-left">
                    <p>Company</p>
                    <button onClick={() => navigate("/AboutUs")}>About Us</button>
                    <button onClick={() => navigate("/Services")}>Services</button>
                    <button onClick={() => navigate("/Team")}>Team</button>
                    <button onClick={() => navigate("/Blog")}>Blog</button>
            </div>
            <div className="footer-links-right">
                    <p>Support</p>
                    <button onClick={() => navigate("/contact")}>Contact</button>
                    <button>Book a Demo</button>
                    <button>Privacy Policy</button>
                    <button>Terms & Conditions</button>
                    <button>Cookies</button>
            </div>
            <div className="footer-newsletter">
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
