
import "./FrequentAnswer.css";

function QACard({ QAData }) {
    return (
        <div className="fa-qa">
            <div className="left-qa">
                <div className="left-qa-f">
                    <p>{QAData.qo}</p>
                    <p>{QAData.ao}</p>
                </div>

                <div className="left-qa-s" >
                    <p>{QAData.qs}</p>
                    <p>{QAData.as}</p>
                </div>
            </div>
            <div className="right-qa">
                <div className="right-qa-f">
                    <p>{QAData.qt}</p>
                    <p>{QAData.at}</p>
                </div>

                <div className="right-qa-s">
                    <p>{QAData.qf}</p>
                    <p>{QAData.af}</p>
                </div>

            </div>
        </div>
    );
}
export default QACard