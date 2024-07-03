import { MdArrowOutward, MdArrowForward } from "react-icons/md";
import SmallAboutUs from "../components/SmallAboutUs";
import CardDigital from "../components/CardDigital";
import DigitalCardData from "../Data/DigitalCard-Data";
import OurServicesSections from "../components/OurServicesSection";
import Process from "../components/Process";
import TeamSlides from "../components/TeamSlides";
import ClientTestimonals from "../components/ClientTestimonals";
import FrequentAnswer from "../components/FrequentAnswers";
import FormSection from "../components/FormSection";
import Footer from "../components/Footer";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import LogoScroller from "../components/LogoScroller";

function DigitalWebeeKetchng() {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);
  const [hover, setHover] = useState(false);
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
});

  return (
    <div>
      <div className="banner">
        <div className="left-ban" data-aos="fade-up">
          <div className="left-ban-text">
            <div className="flex flex-row items-center">
            <p className="font-medium leading-[40px] md:leading-[80px] text-[32px] md:text-[54px] tracking-wide">The Performance</p>
              <span><img src="https://marketi-html.vercel.app/marketi-demo/assets/images/banner/banner-tittle-star.png" alt="img" /></span>
            </div >
              <p className="font-medium leading-[40px] md:leading-[80px] text-[32px] md:text-[54px]">Marketing Agency For <span className="text-[#f473a2]">Higher ROI.</span></p>
            <p className="text-[18px] mt-[50px]">
              Choose success with our digital WebeeSketch agency, dedicated to
              delivering
              higher ROI that propels your
              business to new heights.
            </p>
            <div className="mt-[10px]">
            <button
                className="explore-btn"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={()=>{window.location.href = ' https://calendly.com/webeesketch/30min';}}
              >
                Book A Call {hover ? <MdArrowForward /> : <MdArrowOutward />}
              </button>
              <button
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={()=>{navigate("/AboutUs")}}
              >
                Explore More {hovered ? <MdArrowForward /> : <MdArrowOutward />}
              </button>
            </div>
          </div>
        </div>
        <div className="right-ban">
          <img
            src="https://marketi-html.vercel.app/marketi-demo/assets/images/banner/hero-image.png"
            alt="moving-img"
          />
        </div>
      </div>
      <div className="line-cont">
        <p>{"USED BY WORLD LEADING COMPANIES  "}</p>
        <p className="p-line"></p>
      </div>
      <div>
        <LogoScroller/>
      </div>
      <div>
        <SmallAboutUs />
      </div>
      <div>
        <div className="data-card">
          <div>
            <CardDigital DigitalCardData={DigitalCardData[0]} />
          </div>
          <div>
            <CardDigital DigitalCardData={DigitalCardData[1]} />
          </div>
          <div>
            <CardDigital DigitalCardData={DigitalCardData[2]} />
          </div>
        </div>
      </div>
      <div>
        <OurServicesSections />
      </div>
      <div>
        <Process />
      </div>
      <div>
        <TeamSlides />
      </div>
      <div>
        <ClientTestimonals />
      </div>
      <div>
        <FrequentAnswer />
      </div>
      <div>
        <FormSection />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default DigitalWebeeKetchng;
