import "./SmallAboutUs.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function SmallAboutUs () {

        useEffect(() => {
            Aos.init({
                duration: 1500, 
                easing: 'ease-in-out', 
                once: true,
            });
        }, []);
    
    return (
        <div className="small-aboutus" data-aos="fade-up">
            <div className="left-aboutus" data-aos="fade-up">
            <img src="https://marketi-html.vercel.app/marketi-demo/assets/images/about/about-image.png" alt="yes"/>
            </div>
            <div className="right-aboutus" data-aos="fade-up">
                <p>{"About Us"}</p>
                <p className="two-p-aboutus"  data-aos="fade-up">Why <span className="highlight"> Webeesketch </span>Should Be Your Top Choice</p>
                <p>Choose Marketi for unparalleled digital <span className="highlight"> success-where expertise,innovation</span>, and strategic brilliance converge to elevate your business to new heights.</p>
                <div className="card-aboutus"  data-aos="fade-up">
                    <div>
                        <p>12+</p>
                        <p>Years of experience</p>
                    </div>
                    
                    <div>
                        <p>10K</p>
                        <p>Completed Projects</p>
                    </div>
                    
                    <div>
                        <p>5K</p>
                        <p>Trusted Customers</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default SmallAboutUs;