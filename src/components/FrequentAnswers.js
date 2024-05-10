import QACard from "./QACard";
import QAData from "../QAData";
import "./FrequentAnswer.css";
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
        <div className="fa-comp" data-aos="fade-up">
            <div className="fa-text" data-aos="fade-up">
                <p>FREQUENTLY A&Q</p>
                <p>Find Answer You Needs</p>
            </div>
            <div>
                    <QACard QAData={QAData[0]} />
             </div>
        </div>
    );
}

export default FrequentAnswer