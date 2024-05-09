import QACard from "./QACard";
import QAData from "../QAData";
import "./FrequentAnswer.css";

function FrequentAnswer() {
    
    return (
        <div className="fa-comp">
            <div className="fa-text">
                <p>FREQUENTLY A&Q</p>
                <p>Find Answer You Needs</p>
            </div>
            <div>
                    <QACard QAData={QAData[0]} />
             </div>
        </div>
    );
}

export default FrequentAnswer