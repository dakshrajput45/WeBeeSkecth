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
import Form from "../components/Form";
import "../Css/Contact.css";
import ContactMap from "../components/Map";

function Contact() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      easing: "ease-in-out",
      once: true,
    });
  }, []);


  const [hover, setHover] = useState(false);
  const [hovered, setHovered] = useState(false);


  return (
    <div className="contact">
      <div>
        <BannerSection props={BannerData[2]} />
      </div>
      <div className="contact-text-f" data-aos="fade-up">
        <div>
          <h1 className="text-[22px] px-[15px] py-[5px] mb-[5px] bg-[rgb(244,115,162)] rounded-2xl text-white">Contact Us</h1>
        </div>
        <div>
          <p className="text-[25px] md:text-[60px] leading-[32px] md:leading-[80px] font-medium">We’d Love To Hear From <span className="text-[rgb(244,115,162)]">You</span></p>
          <p className="text-[18px] leading-[32px] mt-[15px]">
            Your feedback is invaluable to us, and we eagerly await your
            thoughts and insights. Chat to our friendly team.
          </p>
        </div>
      </div>
      <div className="contact-card" data-aos="zoom-in">
        <div className="contact-card-f">
          <div className="contact-card-f-icon">
            <BsChatRightText />
          </div>
          <div>
            <p className="text-[24px] leading-[32px] font-medium">Chat to support</p>
            <p className="text-[18px] leading-[32px] text-gray-500">Speak to our friendly team.</p>
            <p className="text-[18px] leading-[32px] mt-[15px]">Connect@webeesketch.com</p>
          </div>
        </div>
        <div className="contact-card-s">
          <div className="contact-card-s-icon">
            <CiMap />
          </div>
          <div>
            <p className="text-[24px] leading-[32px] font-medium">Visit us</p>
            <p className="text-[18px] leading-[32px] text-gray-500">Visit our office</p>
            <p className="text-[18px] leading-[32px] mt-[15px]">H-23, Noida Sec-63,Noida-201301</p>
          </div>
        </div>
        <div className="contact-card-t">
          <div className="contact-card-t-icon">
            <MdAddCall />
          </div>
          <div>
            <p className="text-[24px] leading-[32px] font-medium">Call us</p>
            <p className="text-[18px] leading-[32px] text-gray-500">Mon-Fri from 8am to 5pm.</p>
            <p className="text-[18px] leading-[32px] mt-[15px]">+91 99589 95724</p>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col p-[10px] py-[40px] lg:p-[60px] justify-between gap-[40px]">
        <div className="w-[100%]">
          <ContactMap />
        </div>
        <Form />
      </div>
      <div>
        <FrequentAnswer />
      </div>
      <div className="contact-land" data-aos="fade-up" >
        <div>
          <p className=" text-[25px] md:text-[56px] leading-[32px] md:leading-[80px]">Unlock Your Digital Potential With Marketi's SEO Solutions!</p>
          <p className="text-[18px] leading-[32px]">
            Elevate your online presence with Marketi's trusted SEO solutions.
          </p>
        </div>
        <div className="contact-btn">
          <button
            className="explore-btn"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            Contact Us {hover ? <MdArrowForward /> : <MdArrowOutward />}
          </button>
          <p className="mr-[10px] text-[18px]">Or</p>
          <button
            className="explore-btn"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={()=>{window.location.href = ' https://calendly.com/webeesketch/30min';}}
          >
            Book A Call {hovered ? <MdArrowForward /> : <MdArrowOutward />}
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
