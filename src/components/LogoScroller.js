import React from "react";
import "../Css/LogoScroller.css"

function LogoScroller() {
    const row1 = [
        'https://marketi-html.vercel.app/marketi-demo/assets/images/brand/brand-image4.png',
        'https://marketi-html.vercel.app/marketi-demo/assets/images/brand/brand-image3.png',
        'https://marketi-html.vercel.app/marketi-demo/assets/images/brand/brand-image1.png',
        'https://marketi-html.vercel.app/marketi-demo/assets/images/brand/brand-image2.png',
        'https://marketi-html.vercel.app/marketi-demo/assets/images/brand/brand-image5.png',
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
