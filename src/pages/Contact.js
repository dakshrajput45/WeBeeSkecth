import BannerSection from "../components/BannerSection";
import BannerData from "../Banner-data";
import { BsChatRightText } from "react-icons/bs";
import { MdAddCall } from "react-icons/md";
import { CiMap } from "react-icons/ci";
import { useState, useEffect } from "react";
import Aos from "aos";
import FrequentAnswer from "../components/FrequentAnswers";
import Footer from "../components/Footer";
import { MdArrowOutward, MdArrowForward } from "react-icons/md";
import "./Contact.css";

function Contact() {
  console.log(BannerData[2]);
  useEffect(() => {
    Aos.init({
      duration: 1500,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    message: "",
  });

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  function submitHandler() {
    console.log(formData);
  }

  const [hovered, setHovered] = useState(false);

  return (
    <div className="contact">
      <div>
        <BannerSection props={BannerData[2]} />
      </div>
      <div className="contact-text-f">
        <div>
          <h2>Contact Us</h2>
        </div>
        <div>
          <p>We’d Love To Hear From You</p>
          <p>
            Your feedback is invaluable to us, and we eagerly await your
            thoughts and insights. Chat to our friendly team.
          </p>
        </div>
      </div>
      <div className="contact-card">
        <div className="contact-card-f">
          <div className="contact-card-f-icon">
            <BsChatRightText />
          </div>
          <div>
            <p>Chat to support</p>
            <p>Speak to our friendly team.</p>
            <p>support@marketi.test</p>
          </div>
        </div>
        <div className="contact-card-s">
          <div className="contact-card-s-icon">
            <CiMap />
          </div>
          <div>
            <p>Visit us</p>
            <p>Visit our office HQ.</p>
            <p>456 Elm Avenue, Cityville, State 67890</p>
          </div>
        </div>
        <div className="contact-card-t">
          <div className="contact-card-t-icon">
            <MdAddCall />
          </div>
          <div>
            <p>Call us</p>
            <p>Mon-Fri from 8am to 5pm.</p>
            <p>+91 283922XXXX</p>
          </div>
        </div>
      </div>
      <div className="map-form">
        <div className="map"></div>
        <div className="contact-form-card" data-aos="fade-up">
          <div className="form-card-d" data-aos="fade-up">
            <div className="form-card-p">
              <p>Get A Free Consultation </p>
              <p>With Our Marketing Expert</p>
            </div>
          </div>
          <form
            className="contact-form-content"
            data-aos="fade-up"
            action="https://formspree.io/f/xnqerjzz"
            method="POST"
          >
            <div>
              <label>
                <p>
                  Company Name<sup>*</sup>
                </p>
                <input
                  required
                  type="text"
                  name="companyName"
                  onChange={changeHandler}
                  placeholder="Enter Company Name"
                  value={formData.companyName}
                />
              </label>

              <label>
                <p>
                  Name<sup>*</sup>
                </p>
                <input
                  required
                  type="text"
                  name="name"
                  onChange={changeHandler}
                  placeholder="Enter first Name"
                  value={formData.name}
                />
              </label>

              <label>
                <p>
                  Email Address<sup>*</sup>
                </p>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={changeHandler}
                  placeholder="Enter email id"
                />
              </label>
              <label>
                <p>
                  Phone Number<sup>*</sup>
                </p>
                <input
                  required
                  type="integer"
                  name="phone"
                  onChange={changeHandler}
                  placeholder="Enter Phone No."
                  value={formData.phone}
                />
              </label>
              <label>
                <p>
                  Message<sup>*</sup>
                </p>
                <input
                  required
                  type="text"
                  name="message"
                  onChange={changeHandler}
                  placeholder="Enter You Message"
                  value={formData.msg}
                />
              </label>
            </div>
            <button
              className="contact-explore-btn"
              onClick={submitHandler}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              Submit {hovered ? <MdArrowForward /> : <MdArrowOutward />}
            </button>
          </form>
        </div>
      </div>
      <div>
        <FrequentAnswer />
      </div>
      <div className="contact-land">
        <div>
          <p>Unlock Your Digital Potential With</p>
          <p>Marketi's SEO Solutions!</p>
          <p>
            Elevate your online presence with Marketi's trusted SEO solutions.
          </p>
        </div>
        <div className="contact-btn">
          <div class="wrapper">
            <a href="#">
              <span>Get Started <MdArrowForward/></span>
            </a>
          </div>
          <button
            className="explore-btn"
            onClick={submitHandler}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            Submit {hovered ? <MdArrowForward /> : <MdArrowOutward />}
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
