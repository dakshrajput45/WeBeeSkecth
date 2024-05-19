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
import { useState } from "react";

function AboutUs() {
  const [hovered,setHovered]= useState();
  const [hover,setHover] =useState();
  console.log(BannerData[0]);
  return (
    <div>
      <div>
        <BannerSection props={BannerData[0]} />
      </div>

      <div className="first-about">
        <div className="first-about-sec">
          <p>ABOUT US</p>
          <p>
            At Marketi, we understand the critical role that search engine
            optimization plays in driving online success for businesses of all
            sizes.
          </p>
        </div>
        <div className="second-about-sec">
          <div>
            <p>Our Mission</p>
            <p>
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
            <p>Our Story</p>
            <p>
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
