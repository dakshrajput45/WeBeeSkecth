import { useState } from "react";
import TeamData from "../TeamData";
import TestimonalCard from "./TestimonalCard";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { SlArrowRightCircle } from "react-icons/sl";
import "./ClientTestimonals.css";

function ClientTestimonals() {

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
        <div className="client-test">
            <div className="client-text">
                <p>CLIENTS TESTIMONIAL</p>
                <p>Client's Speeches
                    About Marketi</p>
                <p>Our clients share their experiences with Marketi, expressing how our
                    digital marketing expertise has not only met but exceeded their
                    expectations, fostering success and growth for their businesses.</p>
                <div><button className="try-btn">Try it Now <SlArrowRightCircle /></button></div>

                <div className="client-text-img">
                    <img src="https://marketi-html.vercel.app/marketi-demo/assets/images/testimonial/user.png" alt="img" />
                    <p>Satisfied clients of Marketi</p>
                </div>
            </div>
            <div className="card">
                <div className="transform-div">
                    <TestimonalCard TeamData={TeamData[index]} />
                </div>
                <div className="two-btn-co">
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