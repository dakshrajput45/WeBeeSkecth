import { useRef } from "react";
import toast from "react-hot-toast"
import emailjs from "@emailjs/browser";
import "../Css/FormSection.css";

function Form() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_vgmzl06", "template_4o6wbt4", form.current, {
        publicKey: "ppnLEMR1WF__rbxPP",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Message Sent");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="border-[#f473a2] border-2 p-[20px] shadow-2xl rounded-3xl max-w-[450px] flex flex-col">
      <div>
      <p  className="font-semibold uppercase text-[20px] text-[rgb(244,115,162)] mx-[20px] text-center">Get A Free Consultation With Marketing Our Expert</p>
      </div>
      <form className="w-[100%] mb-[60px] lg:mb-[20px] "
        ref={form}
        onSubmit={sendEmail}>
        <div className="relative z-0 w-full mb-5 group">
          <input type="email" name="email" id="floating_email" className="block py-3 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-rgb-0-33-65 peer-focus:dark:text-rgb-0-33-65 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input type="text" name="name" id="floating_first_name" className="block py-3 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-rgb-0-33-65 peer-focus:dark:text-rgb-0-33-65 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input type="tel" name="phone" id="floating_phone" className="block py-3 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-rgb-0-33-65 peer-focus:dark:text-rgb-0-33-65 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input type="text" name="companyName" id="floating_company" className="block py-3 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-rgb-0-33-65 peer-focus:dark:text-rgb-0-33-65 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
          </div>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input type="text" name="message" id="floating_email" className="block py-3 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-rgb-0-33-65 peer" placeholder=" " required />
          <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-rgb-0-33-65 peer-focus:dark:text-rgb-0-33-65 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>
        </div>
        <button type="submit" className=" w-full text-white bg-rgb-0-33-65 hover:bg-rgb-39-83-127 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md sm:w-auto px-10 py-2.5 text-center dark:bg-rgb-0-33-65 dark:hover:bg-rgb-39-83-127 dark:focus:bg-rgb-0-33-65">Submit</button>
      </form>
    </div>

  );
}
export default Form;
