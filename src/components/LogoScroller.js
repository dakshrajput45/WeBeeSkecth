import React from "react";
import "../Css/LogoScroller.css"
import logo1 from "../images/logo/Energy Control.png"
import logo2 from "../images/logo/harbor365.png"
import logo3 from "../images/logo/hotel krishna sagar.png"
import logo4 from "../images/logo/ramjee.webp"
import logo5 from "../images/logo/tilesbay.png"

function LogoScroller() {
    const row1 = [
        logo1,
        logo2,
        logo3,
        logo4,
        logo5,
    ];

    return (
        <div className="slider">
            <div className="slider-items">
                <img src={row1[0]}
                    alt="" />
                <img src={row1[1]}
                    alt="" />
                <img src={row1[2]} alt="" />
                <img src={row1[3]} alt="" />
                <img src={row1[4]} alt="" />
                <img src={row1[0]} alt="" />
                <img src={row1[1]} alt="" />
                <img src={row1[2]} alt="" />
                <img src={row1[3]} alt="" />
                <img src={row1[4]} alt="" />
                <img src={row1[0]} alt="" />
                <img src={row1[1]} alt="" />
                <img src={row1[2]} alt="" />
                <img src={row1[3]} alt="" />
                <img src={row1[4]} alt="" />
                <img src={row1[0]} alt="" />
                <img src={row1[1]} alt="" />
                <img src={row1[2]} alt="" />
                <img src={row1[3]} alt="" />
                <img src={row1[4]} alt="" />
                <img src={row1[0]}
                    alt="" />
                <img src={row1[1]}
                    alt="" />
                <img src={row1[2]} alt="" />
                <img src={row1[3]} alt="" />
                <img src={row1[4]} alt="" /><img src={row1[0]}
                    alt="" />
                <img src={row1[1]}
                    alt="" />
                <img src={row1[2]} alt="" />
                <img src={row1[3]} alt="" />
                <img src={row1[4]} alt="" />
            </div>
        </div>
    );
}

export default LogoScroller;
