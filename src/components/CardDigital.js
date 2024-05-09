import { MdArrowOutward } from "react-icons/md";

function CardDigital({DigitalCardData}) {
    console.log(DigitalCardData);
    return(
        <div>
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