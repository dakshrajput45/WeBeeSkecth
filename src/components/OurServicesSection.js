import { PiArrowRightLight } from "react-icons/pi";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "../Css/OurServices.css";

function OurServicesSections() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="our-service" data-aos="fade-up">
      <div className="text-service" >
        <p className="text-[22px] mb-[5px] font-medium">OUR SERVICES</p>
        <p className="text-[34px] sm:text-[60px] leading-[55px] mb-[40px] sm:mb-[60px]"><span className="text-[#f473a2]">Services </span> We're Offering </p>
      </div>
      <div className="div-service-e" >
        <p>{"Analytics and Data Insights"}</p>
        <div className="div-service-img">
          <img
            src="https://marketi-html.vercel.app/marketi-demo/assets/images/offer/offer-image1.png"
            alt="yes"
          />
          <p>Elevate your brand with impactful social media strategies.</p>
        </div>
        <div className="arrow-service">
          <PiArrowRightLight />

        </div>
      </div>
      <p className="p-our-line"></p>
      <div className="div-service-f" >
        <p>{"Contact Marketing"}</p>
        <div className="div-service-img">
          <img
            src="https://marketi-html.vercel.app/marketi-demo/assets/images/offer/offer-image2.png"
            alt="yes"
          />
          <p>Elevate your brand with impactful social media strategies.</p>
        </div>
        <div className="arrow-service">
        <PiArrowRightLight />
        </div>
      </div>
      <p className="p-our-line"></p>
      <div className="div-service-a" >
        <div>
          <p>{"Search Engine Marketing"}</p>
        </div>
        <div className="div-service-img">
          <img
            src="https://marketi-html.vercel.app/marketi-demo/assets/images/offer/offer-image3.png"
            alt="yes"
          />
          <p>Elevate your brand with impactful social media strategies.</p>
        </div>
        <div className="arrow-service">
        <PiArrowRightLight />
        </div>
      </div>
      <p className="p-our-line"></p>
      <div className="div-service-b" >
        <p>{"Social Media Marketing"}</p>
        <div className="div-service-img">
          <img
            src="https://marketi-html.vercel.app/marketi-demo/assets/images/offer/offer-image4.png"
            alt="yes"
          />
          <p>Elevate your brand with impactful social media strategies.</p>
        </div>
        <div className="arrow-service">
        <PiArrowRightLight />
        </div>
      </div>
      <p className="p-our-line"></p>
      <div className="div-service-c">
        <p>{"Pay-Per-Click Advertising"}</p>
        <div className="div-service-img">
          <img
            src="https://marketi-html.vercel.app/marketi-demo/assets/images/offer/offer-image5.png"
            alt="yes"
            className="image-service"
          />
          <p>Elevate your brand with impactful social media strategies.</p>
        </div>
        <div className="arrow-service">
        <PiArrowRightLight />
        </div>
      </div>
      <p className="p-our-line"></p>
    </div>
  );
}

export default OurServicesSections;
