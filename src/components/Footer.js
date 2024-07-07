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
import img from '../images/logo/1.png';

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
                <img src={img} alt="Company Logo" className="mr-[170px]" />
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
                    <button onClick={() => navigate("/analytics-and-data-insights")}>Services</button>
                </div>
                <div className="flex md:flex-col flex-row">
                    <button onClick={() => navigate("/Blog")}>Blog</button>
                </div>
            </div>
            <div className="footer-links-right" >
                <p>Support</p>
                <div className="flex md:flex-col flex-row">
                    <button onClick={() => navigate("/contact")}>Contact</button>
                    <button>Book a Call</button>
                </div>
                <div className="flex md:flex-col flex-row">
                    <button onClick={() => navigate("/privacy-policy")}>Privacy Policy</button>
                    <button onClick={() => navigate("/terms-and-conditions")}>Terms & Conditions</button>
                </div>
            </div>
            <div className="footer-newsletter" >
                <p>Join Our Newsletter</p>
                <div className="newsletter-input">
                    <input
                        type="email"
                        name="newsletter"
                        id="newsletter"
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
