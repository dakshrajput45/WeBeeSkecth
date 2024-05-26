import CardProcess from "./CardProcess";
import ProcessCardData from "../Data/ProcessCard-Data";
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
            <div className="process-text" >
                <div className="w-full">
                    <p className="text-[22px] mb-[5px]">HOW DO WE WORK </p>
                    <p className="text-[50px] leading-[55px] font-medium">Our Work <span className="text-[#f473a2]">Process</span></p>
                </div>
                <div className="w-full">
                    <div className="text-[18px]">Discover a spectrum of cutting-edge <span className="text-[rgb(244,115,162)]">digital marketing services </span>digital marketing services tailored to elevate your online presence,drive engagement.</div>
                </div>
            </div>
            <div className="data-card-p" >
                <CardProcess ProcessCardData={ProcessCardData[0]} />
                <CardProcess ProcessCardData={ProcessCardData[1]} />
                <CardProcess ProcessCardData={ProcessCardData[2]} />
                <CardProcess ProcessCardData={ProcessCardData[3]} />
            </div>
        </div>
    );
}

export default Process;