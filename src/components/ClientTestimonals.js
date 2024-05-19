import { useState } from "react";
import TeamData from "../Data/TeamData";
import TestimonalCard from "./TestimonalCard";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { SlArrowRightCircle } from "react-icons/sl";
import "../Css/ClientTestimonals.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function ClientTestimonals() {
    
    useEffect(() => {
        Aos.init({
            duration: 1500, 
            easing: 'ease-in-out', 
            once: true,
        });
    }, []);

    const [index, setIndex] = useState(0);
    const len = TeamData.length;
    function leftShiftHandler() {
        if (index === 0) setIndex(len - 1);
        else setIndex(index - 1);
    }

    function rightShiftHandler() {
        if (index === len - 1) setIndex(0);
        else setIndex(index + 1);
    }
    console.log(TeamData);
    return (
        <div className="client-test" data-aos="fade-up">
            <div className="client-text" data-aos="fade-up">
                <p>CLIENTS TESTIMONIAL</p>
                <p>Client's Speeches
                    About Marketi</p>
                <p>Our clients share their experiences with Marketi, expressing how our
                    digital marketing <span className="highlight"> expertise has not only </span>met but exceeded their
                    expectations, fostering success and growth for their businesses.</p>
                <div><button className="try-btn" data-aos="fade-up">Try it Now <SlArrowRightCircle /></button></div>

                <div className="client-text-img" data-aos="fade-up">
                    <img src="https://marketi-html.vercel.app/marketi-demo/assets/images/testimonial/user.png" alt="img" />
                    <p>Satisfied clients of Marketi</p>
                </div>
            </div>
            <div className="card" data-aos="fade-up">
                <div className="transform-div" data-aos="fade-up">
                    <TestimonalCard TeamData={TeamData[index]} />
                </div>
                <div className="two-btn-co" data-aos="fade-up">
                    <button className="btn" onClick={leftShiftHandler}>
                        <FaArrowLeftLong />
                    </button>

                    <button className="btn" onClick={rightShiftHandler}>
                        <FaArrowRightLong />
                    </button>
                </div>

            </div>

        </div>
    );
}
export default ClientTestimonals;