
import "../Css/ClientTestimonals.css";

function PersonalCard({Data}) {
    
    return (
        <div>
            <div>
                <img src={Data.img} alt="img"/>
            </div>
            <div>
                <p className="text-[22px] mt-[15px]">{Data.name}</p>
                <p className="text-[18px]">{Data.job}</p>
            </div>
        </div>
    );
}
export default PersonalCard