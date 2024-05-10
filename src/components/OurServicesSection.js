import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function OurServicesSections() {

    useEffect(() => {
        Aos.init({
            duration: 1500, 
            easing: 'ease-in-out', 
            once: true,
        });
    }, []);

    return (
        <div className="our-service" data-aos="fade-up">
            <div className="text-service" data-aos="fade-up">
                <p className="check-text">OUR SERVICES</p>
                <p>{"Services"}</p>
                <p>{"We're"}</p>
                <p>{"Offering"}</p>
            </div>
                <div className="div-service-e" data-aos="fade-up">
                    <p>{"Analytics and Data Insights"}</p>
                    <div className="div-service-img">
                        <img src="https://marketi-html.vercel.app/marketi-demo/assets/images/offer/offer-image2.png" alt="yes"/>
                        <p>Elevate your brand with impactful social media strategies.</p>
                    </div>
                    <div className="arrow-service"><FaRegArrowAltCircleRight /></div>
                </div>
                <div className="div-service-f" data-aos="fade-up">
                    <p>{"Contact Marketing"}</p>
                        <div className="div-service-img">
                        <img src="https://marketi-html.vercel.app/marketi-demo/assets/images/offer/offer-image2.png" alt="yes"/>
                        <p>Elevate your brand with impactful social media strategies.</p>
                    </div>
                    <div className="arrow-service"><FaRegArrowAltCircleRight /></div>
                </div>
                <div className="div-service-a" data-aos="fade-up">
                    <p>{"Search Engine Marketing"}</p>
                    <div className="div-service-img">
                        <img src="https://marketi-html.vercel.app/marketi-demo/assets/images/offer/offer-image2.png" alt="yes"/>
                        <p>Elevate your brand with impactful social media strategies.</p>
                    </div>
                    <div className="arrow-service"><FaRegArrowAltCircleRight /></div>
                </div>
                <div className="div-service-b" data-aos="fade-up">
                    <p>{"Social Media Marketing"}</p>
                    <div className="div-service-img">
                        <img src="https://marketi-html.vercel.app/marketi-demo/assets/images/offer/offer-image2.png" alt="yes"/>
                        <p>Elevate your brand with impactful social media strategies.</p>
                    </div>
                    <div className="arrow-service"><FaRegArrowAltCircleRight /></div>
                </div>
                <div className="div-service-c" data-aos="fade-up">
                    <p>{"Pay-Per-Click Advertising"}</p>
                    <div className="div-service-img">
                        <img src="https://marketi-html.vercel.app/marketi-demo/assets/images/offer/offer-image2.png" alt="yes" className="image-service"/>
                        <p>Elevate your brand with impactful social media strategies.</p>
                    </div>
                    <div className="arrow-service"><FaRegArrowAltCircleRight /></div>
                </div>
        </div>
    );
}

export default OurServicesSections;