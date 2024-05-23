import "../Css/BannerSection.css"
import { useEffect } from "react";
import Aos from "aos";

function BannerSection ({props}) {
    useEffect(() => {
        Aos.init({
          duration: 1000,
          easing: "ease-in-out",
          once: true,
        });
    });
    //console.log(props.title);
    return(
        <div className="about-ban" data-aos="fade-down">
            <div>
                <p className="text-[60px] leading-[55px] text-white tracking-wide">{props.title}</p>
            </div>
            
            <div className="about-ban-text">
                <p className="text-[18px] mt-[20px] leading-[32px] text-white">{props.text}</p>
            </div>
        </div>
    );
}

export default BannerSection;