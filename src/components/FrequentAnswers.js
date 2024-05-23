import QACard from "./QACard";
import QAData from "../Data/QAData";
import "../Css/FrequentAnswer.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function FrequentAnswer() {
    
    useEffect(() => {
        Aos.init({
            duration: 1000, 
            easing: 'ease-in-out', 
            once: true,
        });
    }, []);
    
    return (
        <div className="fa-comp" data-aos="zoom-in">
            <div className="flex flex-col mb:[50px] md:mb-[90px]" data-aos="fade-up">
                <p className="text-[22px] mb-[5px]">FREQUENTLY A&Q</p>
                <p className="text-[34px] md:text-[50px] leading-[32px] md:leading-[55px]">Find Answer You Needs</p>
            </div>
            <div>
                    <QACard QAData={QAData[0]} />
             </div>
        </div>
    );
}

export default FrequentAnswer