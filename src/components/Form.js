import { useState } from "react";
import { MdArrowOutward, MdArrowForward } from "react-icons/md";
import "../Css/FormSection.css";

function Form() {
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
    <div className="form-card" data-aos="fade-up">
      <div className="form-card-p">
        <p>Get A Free Consultation With Our Marketing Expert</p>
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
          className="explore-btnn-form"
          onClick={submitHandler}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          Submit {hovered ? <MdArrowForward /> : <MdArrowOutward />}
        </button>
      </form>
    </div>
  );
}
export default Form;
