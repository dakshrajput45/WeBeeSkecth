import BannerSection from "../components/BannerSection";
import BannerData from "../Data/Banner-data";
import { BsChatRightText } from "react-icons/bs";
import { MdAddCall } from "react-icons/md";
import { CiMap } from "react-icons/ci";
import { useState, useEffect } from "react";
import Aos from "aos";
import FrequentAnswer from "../components/FrequentAnswers";
import Footer from "../components/Footer";
import { MdArrowOutward, MdArrowForward } from "react-icons/md";
import Button from "@mui/material/Button";
import Form from "../components/Form";
import "../Css/Contact.css";

function Contact() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  

  
  function submitHandler() {
    console.log("Webee");
  }

  const [hovered, setHovered] = useState(false);

  return (
    <div className="contact">
      <div>
        <BannerSection props={BannerData[2]} />
      </div>
      <div className="contact-text-f">
        <div>
          <h1>Contact Us</h1>
        </div>
        <div>
          <p>We’d Love To Hear From You</p>
          <p>
            Your feedback is invaluable to us, and we eagerly await your
            thoughts and insights. Chat to our friendly team.
          </p>
        </div>
      </div>
      <div className="contact-card">
        <div className="contact-card-f">
          <div className="contact-card-f-icon">
            <BsChatRightText />
          </div>
          <div>
            <p>Chat to support</p>
            <p>Speak to our friendly team.</p>
            <p>support@marketi.test</p>
          </div>
        </div>
        <div className="contact-card-s">
          <div className="contact-card-s-icon">
            <CiMap />
          </div>
          <div>
            <p>Visit us</p>
            <p>Visit our office HQ.</p>
            <p>456 Elm Avenue, Cityville, State 67890</p>
          </div>
        </div>
        <div className="contact-card-t">
          <div className="contact-card-t-icon">
            <MdAddCall />
          </div>
          <div>
            <p>Call us</p>
            <p>Mon-Fri from 8am to 5pm.</p>
            <p>+91 283922XXXX</p>
          </div>
        </div>
      </div>
      <div className="map-form">
        <div className="map"></div>
        <div data-aos="fade-up">
          <Form />
        </div>
      </div>
      <div>
        <FrequentAnswer />
      </div>
      <div className="contact-land">
        <div>
          <p>Unlock Your Digital Potential With Marketi's SEO Solutions!</p>
          <p>
            Elevate your online presence with Marketi's trusted SEO solutions.
          </p>
        </div>
        <div className="contact-btn">
          <Button
            variant="contained"
            disableElevation
            className="get-start-btn"
          >
            Get Started
          </Button>
          <button
            className="explore-btn-contact"
            onClick={submitHandler}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            Submit {hovered ? <MdArrowForward /> : <MdArrowOutward />}
          </button>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
