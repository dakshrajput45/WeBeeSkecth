import CardProcess from "./CardProcess";
import ProcessCardData from "../ProcessCard-Data";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function Process() {

    useEffect(() => {
        Aos.init({
            duration: 1500, 
            easing: 'ease-in-out', 
            once: true,
        });
    }, []);

    return (
        <div className="process" data-aos="fade-up">
            <div className="process-text" data-aos="fade-up">
                <div className="process-div-text">
                    <p>HOW DO WE <span className="highlight"> WORK </span></p>
                    <p>Our Work Process</p>
                </div>
                <div className="process-div">
                    <div>Discover a spectrum of cutting-edge digital marketing services </div>
                    <div>tailored to elevate your online presence,<span className="highlight">  drive engagement</span>.</div>
                </div>
            </div>
            <div className="data-card-p" data-aos="fade-up">
                <CardProcess ProcessCardData={ProcessCardData[0]} />
                <CardProcess ProcessCardData={ProcessCardData[1]} />
                <CardProcess ProcessCardData={ProcessCardData[2]} />
                <CardProcess ProcessCardData={ProcessCardData[3]} />
            </div>
        </div>
    );
}

export default Process;