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
  return (
    <div className="form-sec" data-aos="fade-right">
      <div className="form-text" data-aos="fade-right">
        <p>GET STARTED WITH US</p>
        <p className="highlighted-text" data-aos="fade-right">
          Start Conversation To Skyrocket Your Business
        </p>
        <p>
          {
            "Schedule a free consultation with our experts. Uncover opportunities and take the first step towards digital success"
          }
        </p>
        <button
          className="explore-btn"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Contact Us {hover ? <MdArrowForward /> : <MdArrowOutward />}
        </button>
      </div>
      <div data-aos="fade-left">
          <Form/>
      </div>
    </div>
  );
}

export default FormSection;
