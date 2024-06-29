import "../Css/ClientTestimonals.css";
import { FaLinkedinIn} from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

function PersonalCard({ Data }) {

    return (
        <div className="relative grayscale hover:grayscale-0 duration-500 ease-in-out group">
            <div>
                <img src={Data.img} alt="img" />
            </div>
            <div>
                <p className="text-[22px] mt-[15px]">{Data.name}</p>
                <p className="text-[18px]">{Data.job}</p>
            </div>
            <div className="flex flex-row w-[50%] justify-around absolute text-[32px] bg-slate-50 bg-opacity-80 bottom-[90px] left-[70px] py-[6px] rounded-md
            opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                <li>
                    <a href="https://www.linkedin.com/company/webeesketch">
                        <FaLinkedinIn className="text-[#f473a2]"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/webeesketch">
                        <BiLogoGmail className="text-[#f473a2]"/> 
                    </a>
                </li>
            </div>
        </div>
    );
}
export default PersonalCard