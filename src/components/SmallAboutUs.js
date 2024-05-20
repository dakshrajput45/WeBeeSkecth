import "../Css/SmallAboutUs.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import img from "../images/about-image.png";

function SmallAboutUs() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });

    animateValue("experience", 0, 12, 3000, "+");
    animateValue("projects", 0, 10, 3000, "k");
    animateValue("customers", 0, 5, 3000, "k");
  });

  function animateValue(id, start, end, duration, symbol) {
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function () {
      current += increment;
      obj.innerHTML = current + symbol;
      if (current === end) {
        clearInterval(timer);
      }
    }, stepTime);
  }

  return (
    <div className="small-aboutus" data-aos="fade-up">
      <div className="left-aboutus" data-aos="fade-up">
        <div className="left-img-container">
          <img src={img} alt="yes" />
        </div>
      </div>
      <div className="right-aboutus" data-aos="fade-up">
        <p className="text-[22px] mb-[5px]">{"About Us"}</p>
        <p className=" text-[34px] sm:text-[45px] leading-[32px] sm:leading-[55px] font-medium" data-aos="fade-up">
          Why <span className="highlight"> Webeesketch </span>Should Be Your Top
          Choice
        </p>
        <p className="text-[18px] leading-[32px] mt-[15px]">
          Choose Marketi for unparalleled digital{" "}
          success-where expertise,innovation, 
          and strategic brilliance converge to elevate your business to new
          heights.
        </p>

        <div className="card-aboutus" data-aos="fade-up">
          <div>
            <p id="experience" className="text-[48px] mb-[10px]">12</p>
            <p>Years of experience</p>
          </div>
          <div>
            <p id="projects" className="text-[48px] mb-[10px]">10</p>
            <p>Completed Projects</p>
          </div>
          <div>
            <p id="customers" className="text-[48px] mb-[10px]">5</p>
            <p>Trusted Customers</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmallAboutUs;
