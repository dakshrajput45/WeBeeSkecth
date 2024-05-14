import { MdArrowOutward,MdArrowForward } from "react-icons/md";
import { useEffect,useState } from "react";
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
    
    const [hovered, setHovered] = useState(false);
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
            <button className="explore-btn"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                Explore More {hovered ? <MdArrowForward /> : <MdArrowOutward />}
              </button>
            </div>
        </div>
    );
}

export default CardDigital;