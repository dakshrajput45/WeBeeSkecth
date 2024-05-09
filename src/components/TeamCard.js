import PersonalCard from "./PersonalCard";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";

function TeamCard({ TeamData }) {
    console.log(TeamData);
    const [index, setIndex] = useState(0);
    const len = TeamData.length;

    function leftShiftHandler() {
        if (index === 0) setIndex(len - 1);
        else setIndex(index - 1);
    }

    function rightShiftHandler() {
        if (index === len - 1) setIndex(0);
        else setIndex(index + 1);
    }

    return (
        <div>
            <div className="four-card-container">
                <div className="f-card-team">
                    <PersonalCard Data={TeamData[((index) % len)]} />
                </div>
                <div className="s-card-team">
                    <PersonalCard Data={TeamData[(index + 1) % len]} />
                </div>
                <div className="t-card-team">
                    <PersonalCard Data={TeamData[(index + 2) % len]} />
                </div>
                <div className="l-card-team">
                    <PersonalCard Data={TeamData[(index + 3) % len]} />
                </div>
            </div>
            <div className="two-btn-container">
                <button className="btn" onClick={leftShiftHandler}>
                    <FaArrowLeftLong />
                </button>

                <button className="btn" onClick={rightShiftHandler}>
                    <FaArrowRightLong />
                </button>
            </div>
        </div>
    );
}

export default TeamCard;
