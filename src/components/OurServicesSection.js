import { FaRegArrowAltCircleRight } from "react-icons/fa";

function OurServicesSections() {
    return (
        <div className="our-service">
            <div className="text-service">
                <p className="check-text">OUR SERVICES</p>
                <p>{"Services"}</p>
                <p>{"We're"}</p>
                <p>{"Offering"}</p>
            </div>
                <div className="div-service-e">
                    <p>{"Analytics and Data Insights"}</p>
                    <div className="div-service-img">
                        <img src="https://marketi-html.vercel.app/marketi-demo/assets/images/offer/offer-image2.png" alt="yes"/>
                        <p>Elevate your brand with impactful social media strategies.</p>
                    </div>
                    <div className="arrow-service"><FaRegArrowAltCircleRight /></div>
                </div>
                <div className="div-service-f">
                    <p>{"Contact Marketing"}</p>
                    <div className="div-service-img">
                        <img src="https://marketi-html.vercel.app/marketi-demo/assets/images/offer/offer-image2.png" alt="yes"/>
                        <p>Elevate your brand with impactful social media strategies.</p>
                    </div>
                    <div className="arrow-service"><FaRegArrowAltCircleRight /></div>
                </div>
                <div className="div-service-a">
                    <p>{"Search Engine Marketing"}</p>
                    <div className="div-service-img">
                        <img src="https://marketi-html.vercel.app/marketi-demo/assets/images/offer/offer-image2.png" alt="yes"/>
                        <p>Elevate your brand with impactful social media strategies.</p>
                    </div>
                    <div className="arrow-service"><FaRegArrowAltCircleRight /></div>
                </div>
                <div className="div-service-b">
                    <p>{"Social Media Marketing"}</p>
                    <div className="div-service-img">
                        <img src="https://marketi-html.vercel.app/marketi-demo/assets/images/offer/offer-image2.png" alt="yes"/>
                        <p>Elevate your brand with impactful social media strategies.</p>
                    </div>
                    <div className="arrow-service"><FaRegArrowAltCircleRight /></div>
                </div>
                <div className="div-service-c">
                    <p>{"Pay-Per-Click Advertising"}</p>
                    <div className="div-service-img">
                        <img src="https://marketi-html.vercel.app/marketi-demo/assets/images/offer/offer-image2.png" alt="yes"/>
                        <p>Elevate your brand with impactful social media strategies.</p>
                    </div>
                    <div className="arrow-service"><FaRegArrowAltCircleRight /></div>
                </div>
        </div>
    );
}

export default OurServicesSections;