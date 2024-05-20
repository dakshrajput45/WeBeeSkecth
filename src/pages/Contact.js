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
          <h1 className="text-[22px] px-[15px] py-[5px] mb-[5px] bg-gray-400 rounded-2xl">Contact Us</h1>
        </div>
        <div>
          <p className="text-[25px] md:text-[60px] leading-[32px] md:leading-[80px] font-medium">We’d Love To Hear From You</p>
          <p className="text-[18px] leading-[32px] mt-[15px]">
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
            <p className="text-[24px] leading-[32px] font-medium">Chat to support</p>
            <p className="text-[18px] leading-[32px] text-gray-500">Speak to our friendly team.</p>
            <p className="text-[18px] leading-[32px] mt-[15px]">support@marketi.test</p>
          </div>
        </div>
        <div className="contact-card-s">
          <div className="contact-card-s-icon">
            <CiMap />
          </div>
          <div>
            <p className="text-[24px] leading-[32px] font-medium">Visit us</p>
            <p className="text-[18px] leading-[32px] text-gray-500">Visit our office HQ.</p>
            <p className="text-[18px] leading-[32px] mt-[15px]">456 Elm Avenue, Cityville, State 67890</p>
          </div>
        </div>
        <div className="contact-card-t">
          <div className="contact-card-t-icon">
            <MdAddCall />
          </div>
          <div>
            <p className="text-[24px] leading-[32px] font-medium">Call us</p>
            <p className="text-[18px] leading-[32px] text-gray-500">Mon-Fri from 8am to 5pm.</p>
            <p className="text-[18px] leading-[32px] mt-[15px]">+91 283922XXXX</p>
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
          <p className=" text-[25px] md:text-[56px] leading-[32px] md:leading-[80px]">Unlock Your Digital Potential With Marketi's SEO Solutions!</p>
          <p className="text-[18px] leading-[32px]">
            Elevate your online presence with Marketi's trusted SEO solutions.
          </p>
        </div>
        <div className="contact-btn">
          <Button
            variant="contained"
            disableElevation
            className="get-start-btn"
            style={{ fontSize: "12px", padding:"5px 10px"}}
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
