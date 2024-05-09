
import "./ClientTestimonals.css";

function PersonalCard({Data}) {
    console.log("My Image");
    console.log(Data);
    
    return (
        <div>
            <div>
                <img src={Data.img} alt="img"/>
            </div>
            <div>
                <p>{Data.name}</p>
                <p>{Data.job}</p>
            </div>
        </div>
    );
}
export default PersonalCard