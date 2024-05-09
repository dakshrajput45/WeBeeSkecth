import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";


function DropdownItem() {
    return (
        <div>
            <ul className="dropdownItem">
                <div className="contact-icons"><FaLinkedin /></div>
                <div className="contact-icons"><FaFacebook /></div>
                <div className="contact-icons"><FaYoutube /></div>
                <div className="contact-icons"><FaInstagram /></div>
            </ul>
        </div>
    );
}
export default DropdownItem;