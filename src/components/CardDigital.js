import { MdArrowOutward } from "react-icons/md";
import { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

function CardDigital({DigitalCardData}) {
    useEffect(() => {
        Aos.init({
            duration: 1500, 
            easing: 'ease-in-out', 
            once: true,
        });
    }, []);
    return(
        <div className="digi-card" data-aos="fade-up">
            <div>
                <img src={DigitalCardData.img} alt="yesss"/>
            </div>
            <div>
                <p>{DigitalCardData.title}</p>
                <p>{DigitalCardData.desc}</p>
            </div>
            <div>
                <button className="card-btn">Explore More <MdArrowOutward /></button>
            </div>
        </div>
    );
}

export default CardDigital;