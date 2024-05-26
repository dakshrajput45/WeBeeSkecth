import { useState, useEffect } from "react";
import { MdArrowOutward, MdArrowForward } from "react-icons/md";
import "../Css/FormSection.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Form from "./Form";

function FormSection() {
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
    <div className="form-sec" >
      <div className="form-text" data-aos="zoom-in-down">
        <p className="text-[rgb(244,115,162)]">GET STARTED WITH US</p>
        <p data-aos="fade-right">
          Start Conversation To <span className="text-[#f473a2]">Skyrocket</span> Your Business
        </p>
        <p>
          {
            "Schedule a free consultation with our experts. Uncover opportunities and take the first step towards digital success"
          }
        </p>
        <div className="flex flex-row gap-x-5 items-center">
          <button
            className="explore-btn"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            Contact Us {hover ? <MdArrowForward /> : <MdArrowOutward />}
          </button>
          <p>Or</p>
          <button
            className="explore-btn"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            Book A Call {hovered ? <MdArrowForward /> : <MdArrowOutward />}
          </button>
        </div>
      </div>
      <div data-aos="zoom-in-down">
        
      <div className="max-w-400px">
        <Form />
      </div>
      </div>
    </div>
  );
}

export default FormSection;
