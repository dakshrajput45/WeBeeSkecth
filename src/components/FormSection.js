import { useState, useEffect } from "react";
import { MdArrowOutward, MdArrowForward } from "react-icons/md";
import "./FormSection.css";
import Aos from "aos";
import "aos/dist/aos.css";

function FormSection() {
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
  const [hover, setHover] = useState(false);
  return (
    <div className="form-sec" data-aos="fade-up">
      <div className="form-text" data-aos="fade-up">
        <p>GET STARTED WITH US</p>
        <p className="highlighted-text" data-aos="fade-up">
          Start Conversation To Skyrocket Your Business
        </p>
        <p>
          {
            "Schedule a free consultation with our experts. Uncover opportunities and take the first step towards digital success"
          }
        </p>
        <button
          className="explore-btn-two"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Contact Us {hover ? <MdArrowForward /> : <MdArrowOutward />}
        </button>
      </div>
      <div className="form-card" data-aos="fade-up">
        <div className="form-card-d" data-aos="fade-up">
          <div className="form-card-p">
            <p>Get A Free Consultation </p>
            <p>With Our Marketing Expert</p>
          </div>
        </div>
        <form
          className="form-content"
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
            className="explore-btn"
            onClick={submitHandler}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            Submit {hovered ? <MdArrowForward /> : <MdArrowOutward />}
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormSection;
