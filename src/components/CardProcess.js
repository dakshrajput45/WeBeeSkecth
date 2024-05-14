import { MdArrowOutward, MdArrowForward } from "react-icons/md";
import { useState } from "react";

function CardProcess ({ProcessCardData}) {
    
    const [hovered, setHovered] = useState(false);
    return (
        <div className="p-card" data-aos="fade-up">
            <div>
                <img src={ProcessCardData.img} alt="yesss"/>
            </div>
            <div>
                <p>{ProcessCardData.title}</p>
                <p>{ProcessCardData.desc}</p>
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

export default CardProcess;