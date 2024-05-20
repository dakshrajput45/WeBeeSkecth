import TeamData from "../Data/TeamData";
import TeamCard from "./TeamCard";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function TeamSlides(){

    useEffect(() => {
        Aos.init({
            duration: 1500, 
            easing: 'ease-in-out', 
            once: true,
        });
    }, []);

    return (
        <div className="team-card" data-aos="fade-up">
            <div className="team-text" data-aos="fade-up">
                <p className="text-[22px] leading-[32px] mb-[5px]">EXCEPTIONAL TEAM</p>
                <p className="text-[50px] leading-[55px]">Meet With Our Team</p>
                <p className="text-[18px] mt-[15px] leading-[32px] px:40px md:px-[180px]">Discover the driving force behind Marketi. Working collaboratively to deliver 
                    innovative digital marketing solutions that elevate your brand.</p>
            </div>
            <div>
                <TeamCard TeamData={TeamData}/>
            </div>
        </div>
    );
}
export default TeamSlides;