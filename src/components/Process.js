import CardProcess from "./CardProcess";
import ProcessCardData from "../ProcessCard-Data";

function Process() {
    return (
        <div>
            <div className="process-text">
                <div className="process-div-text">
                    <p>HOW DO WE WORK</p>
                    <p>Our Work Process</p>
                </div>
                <div className="process-div">
                    <div>Discover a spectrum of cutting-edge digital marketing services </div>
                    <div>tailored to elevate your online presence, drive engagement.</div>
                </div>
            </div>
            <div className="data-card">
                <CardProcess ProcessCardData={ProcessCardData[0]} />
                <CardProcess ProcessCardData={ProcessCardData[1]} />
                <CardProcess ProcessCardData={ProcessCardData[2]} />
                <CardProcess ProcessCardData={ProcessCardData[3]} />
            </div>
        </div>
    );
}

export default Process;