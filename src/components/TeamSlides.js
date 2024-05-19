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
                <p>EXCEPTIONAL TEAM</p>
                <p>Meet With Our Team</p>
                <p>Discover the driving force behind Marketi. <span className="highlight"> Working collaboratively </span>to deliver</p>
                <p>innovative digital marketing solutions that elevate your brand.</p>
            </div>
            <div>
                <TeamCard TeamData={TeamData}/>
            </div>
        </div>
    );
}
export default TeamSlides;