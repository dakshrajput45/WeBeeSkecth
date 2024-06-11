import { MdArrowOutward,MdArrowForward } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

function CardDigital({DigitalCardData}) {
    const navigate = useNavigate();
    useEffect(() => {
        Aos.init({
            duration: 1500, 
            easing: 'ease-in-out', 
            once: true,
        });
    }, []);
    
    const [hovered, setHovered] = useState(false);
    return(
        <div className="digi-card" data-aos="zoom-in">
            <div className="mb-[25px]">
                <img src={DigitalCardData.img} alt="yesss"/>
            </div>
            <div className="mb-[10px]">
                <p>{DigitalCardData.title}</p>
                <p className="text-[18px]">{DigitalCardData.desc}</p>
            </div>
            <div>
            <button className="explore-btn"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={()=>{navigate("/Services")}}
              >
                Explore More {hovered ? <MdArrowForward /> : <MdArrowOutward />}
              </button>
            </div>
        </div>
    );
}

export default CardDigital;