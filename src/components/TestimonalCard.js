import "../Css/ClientTestimonals.css";
import { PiStarFill } from "react-icons/pi";

function TestimonalCard({ TeamData }) {
  //console.log(TeamData.name);
  return (
    <div className="testi-card" data-aos="fade-up">
      <div className="card-text" data-aos="fade-up">
        <p className="text-[20px] leading-[32px] md:text-[28px] md:leading-[40px] mb-[20px] md:mb-[40px]">
          Working With <span className="text-[#f473a2]">WeBeeSketch</span> has been a right and good investment for our
          business And Thier target campaigns and
          data-driven approach have not only increased our Roi but also provide
          valuable insights for future growth.
        </p>
      </div>
      <p className="border border-gray-400 mb-8 mt-8 border-solid"></p>
      <div className="info-container" >
        <div className="info-second">
          <div className="img-container">
            <img src={TeamData.img} alt="img" />
          </div>
          <div className="info-container-text">
            <p className="text-[26px]">{TeamData.name}</p>
            <p className="text-[16px]">{TeamData.job}</p>
          </div>
        </div>
        <div className="stars">
          <PiStarFill  className="star"/>
          <PiStarFill className="star"/>
          <PiStarFill className="star"/>
          <PiStarFill className="star"/>
          <PiStarFill className="star"/>
        </div>
      </div>
    </div>
  );
}

export default TestimonalCard;
