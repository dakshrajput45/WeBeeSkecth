import { useState } from "react";
import ClientData from "../Data/ClientData";
import TestimonalCard from "./TestimonalCard";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { MdArrowOutward, MdArrowForward } from "react-icons/md";
import "../Css/ClientTestimonals.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function ClientTestimonals() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const [index, setIndex] = useState(0);
  const len = ClientData.length;
  function leftShiftHandler() {
    if (index === 0) setIndex(len - 1);
    else setIndex(index - 1);
  }

  function rightShiftHandler() {
    if (index === len - 1) setIndex(0);
    else setIndex(index + 1);
  }
  //console.log(TeamData);
  const [hover, setHover] = useState(false);
  return (
    <div className="client-test" data-aos="fade-up">
      <div className="client-text" >
        <p className="text-[22px] leading-[32px] mb-[5px] text-[#f473a2]">
          CLIENTS TESTIMONIAL
        </p>
        <p className="text-[50px] leading-[50px]">
          Client's  <span className="text-[rgb(244,115,162)]">Speeches</span> About WebeeSketch
        </p>
        <p className="text-[18px] mt-[15px]">
          Our clients share their experiences with WebeeSketch, expressing how our
          digital marketing expertise has not only met but
          exceeded their expectations, fostering success and growth for their
          businesses.
        </p>
        <div>
          <button
            className="explore-btn"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={()=>{window.location.href = ' https://calendly.com/webeesketch/30min';}}
          >
            Book A Call {hover ? <MdArrowForward /> : <MdArrowOutward />}
          </button>
        </div>
        <p className="border border-gray-400 mb-8 border-solid"></p>
        <div className="client-text-img" data-aos="fade-up">
          <img
            src="https://marketi-html.vercel.app/marketi-demo/assets/images/testimonial/user.png"
            alt="img"
          />
          <p>Satisfied clients of WebeeSketch</p>
        </div>
      </div>
      <div className="card">
        <div className="transform-div" >
          <TestimonalCard TeamData={ClientData[index]} />
        </div>
        <div className="two-btn-co" >
          <button className="btn" onClick={leftShiftHandler}>
            <FaArrowLeftLong />
          </button>

          <button className="btn" onClick={rightShiftHandler}>
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  );
}
export default ClientTestimonals;
