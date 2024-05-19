
import "../Css/FrequentAnswer.css";

function QACard({ QAData }) {
    return (
        <div className="fa-qa" data-aos="fade-up">
            <div className="left-qa" data-aos="fade-up">
                <div className="left-qa-f" data-aos="fade-up">
                    <p>{QAData.qo}</p>
                    <p>{QAData.ao}</p>
                </div>

                <div className="left-qa-s" data-aos="fade-up">
                    <p>{QAData.qs}</p>
                    <p>{QAData.as}</p>
                </div>
            </div>
            <div className="right-qa" data-aos="fade-up">
                <div className="right-qa-f" data-aos="fade-up">
                    <p>{QAData.qt}</p>
                    <p>{QAData.at}</p>
                </div>

                <div className="right-qa-s" data-aos="fade-up">
                    <p>{QAData.qf}</p>
                    <p>{QAData.af}</p>
                </div>

            </div>
        </div>
    );
}
export default QACard