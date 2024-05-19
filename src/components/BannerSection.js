import "../Css/BannerSection.css"

function BannerSection ({props}) {
    console.log(props.title);
    return(
        <div className="about-ban">
            <div>
                <p>{props.title}</p>
            </div>
            
            <div className="about-ban-text">
                <p>{props.text}</p>
            </div>
        </div>
    );
}

export default BannerSection;