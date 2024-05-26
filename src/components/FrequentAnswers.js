import QACard from "./QACard";
import QAData from "../Data/QAData";
import "../Css/FrequentAnswer.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function FrequentAnswer() {
    
    useEffect(() => {
        Aos.init({
            duration: 1500, 
            easing: 'ease-in-out', 
            once: true,
        });
    }, []);
    
    return (
        <div className="fa-comp" data-aos="zoom-in">
            <div className="flex flex-col mb:[50px] md:mb-[90px]" >
                <p className="text-[22px] mb-[5px] text-[#f473a2]">FREQUENTLY A&Q</p>
                <p className="text-[34px] md:text-[50px] leading-[32px] md:leading-[55px]">Find <span>Answer</span> You Needs</p>
            </div>
            <div>
                    <QACard QAData={QAData[0]} />
             </div>
        </div>
    );
}

export default FrequentAnswer