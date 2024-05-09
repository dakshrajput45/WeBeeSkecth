import TeamData from "../TeamData";
import TeamCard from "./TeamCard";

function TeamSlides(){
    
    console.log(TeamData);
    return (
        <div>
            <div>
                <p>EXCEPTIONAL TEAM</p>
                <p>Meet With Our Team</p>
                <p>Discover the driving force behind Marketi. Working collaboratively to deliver</p>
                <p>innovative digital marketing solutions that elevate your brand.</p>
            </div>
            <div>
                <TeamCard TeamData={TeamData}/>
            </div>
        </div>
    );
}
export default TeamSlides;