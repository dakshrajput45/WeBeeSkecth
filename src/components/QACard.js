
import "../Css/FrequentAnswer.css";

function QACard({ QAData }) {
    return (
        <div className="fa-qa" data-aos="fade-up">
            <div className="left-qa" data-aos="fade-up">
                <div className="left-qa-f" data-aos="fade-up">
                    <p className="text-[28px] mb-[20px] font-medium leading-[40px]">{QAData.qo}</p>
                    <p className="text-[18px] leading-[32px]">{QAData.ao}</p>
                </div>

                <div className="left-qa-s" data-aos="fade-up">
                    <p className="text-[28px] mb-[20px] font-medium leading-[40px]">{QAData.qs}</p>
                    <p className="text-[18px] leading-[32px]">{QAData.as}</p>
                </div>
            </div>
            <div className="right-qa" data-aos="fade-up">
                <div className="right-qa-f" data-aos="fade-up">
                    <p className="text-[28px] mb-[20px] font-medium leading-[40px]">{QAData.qt}</p>
                    <p className="text-[18px] leading-[32px]">{QAData.at}</p>
                </div>

                <div className="right-qa-s" data-aos="fade-up">
                    <p className="text-[28px] mb-[20px] font-medium leading-[40px]">{QAData.qf}</p>
                    <p className="text-[18px] leading-[32px]">{QAData.af}</p>
                </div>

            </div>
        </div>
    );
}
export default QACard