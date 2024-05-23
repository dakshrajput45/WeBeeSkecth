import BannerSection from "../components/BannerSection";
import BannerData from "../Data/Banner-data.js";
import { MdArrowOutward,MdArrowForward } from "react-icons/md";
import SmallAboutUs from "../components/SmallAboutUs.js";
import CardDigital from "../components/CardDigital.js";
import DigitalCardData from "../Data/DigitalCard-Data.js";
import TeamSlides from "../components/TeamSlides.js";
import ClientTestimonals from "../components/ClientTestimonals.js";
import FormSection from "../components/FormSection.js";
import Footer from "../components/Footer.js";
import { useState,useEffect } from "react";
import Aos from "aos";

function AboutUs() {
  const [hovered,setHovered]= useState();
  const [hover,setHover] =useState();
  //console.log(BannerData[0]);

  useEffect(() => {
    Aos.init({
        duration: 1000, 
        easing: 'ease-in-out', 
        once: true,
    });
}, [])

  return (
    <div>
      <div>
        <BannerSection props={BannerData[0]} />
      </div>

      <div className="first-about" data-aos="fade-up">
        <div className="first-about-sec">
          <p className="text-[20px] px-[15px] py-[5px] mb-[5px] bg-gray-400 w-[140px] rounded-2xl text-white">ABOUT US</p>
          <p className="text-[32px] leading-[32px] mt-[15px]">
            At Marketi, we understand the critical role that search engine
            optimization plays in driving online success for businesses of all
            sizes.
          </p>
        </div>
        <div className="second-about-sec" data-aos="zoom-in">
          <div>
            <p className="text-[40px] mb-[10px]">Our Mission</p>
            <p className="text-[18px] leading-[32px]">
              Our goal is to boost your online visibility and engagement, drive
              organic traffic, and ultimately, maximize your digital success.
            </p>
            <button
            className="explore-btn"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            Learn More {hovered ? <MdArrowForward /> : <MdArrowOutward />}
          </button>
          </div>
          <div>
            <p className="text-[40px] mb-[10px]">Our Story</p>
            <p className="text-[18px] leading-[32px]">
              Marketi was founded on the principle that every business,
              regardless of size or industry, deserves a tailored approach to
              marketing.
            </p>
            <button
            className="explore-btn"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            Learn More {hover ? <MdArrowForward /> : <MdArrowOutward />}
          </button>
          </div>
        </div>
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
        <TeamSlides />
      </div>
      <div>
        <ClientTestimonals />
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

export default AboutUs;
