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
import { useState } from "react";

function DigitalMarketing() {
  const [hovered, setHovered] = useState(false);
  const [hover, setHover] = useState(false);
  return (
    <div>
      <div className="banner">
        <div className="left-ban">
          <div className="left-ban-text">
            <p>{"The Digital\nMarketing Agency\nFor Higher ROI"}</p>
            <p>
              Choose success with our digital marketing agency, dedicated to
              delivering
              <span className="highlight"> higher ROI</span> that propels your
              business to new heights.
            </p>
            <div>
            <button
                className="explore-btn"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                Try It Now {hover ? <MdArrowForward /> : <MdArrowOutward />}
              </button>
              <button
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
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
        <p>{"USED BY WORLD LEADING COMPANIES   "}</p>
        <p className="p-line"></p>
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
export default DigitalMarketing;
