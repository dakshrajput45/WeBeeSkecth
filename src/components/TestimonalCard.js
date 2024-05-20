import "../Css/ClientTestimonals.css";
import { PiStarFill } from "react-icons/pi";

function TestimonalCard({ TeamData }) {
  console.log(TeamData.name);
  return (
    <div className="testi-card" data-aos="fade-up">
      <div className="card-text" data-aos="fade-up">
        <p className="text-[28px] leading-[40px] mb-[40px]">
          Working With Marketi has been a right and good investment for our
          business And Thier target campaigns and
          data-driven approach have not noly increased our Roi but also provide
          valuable insights for future growth.
        </p>
      </div>
      <p class="border border-gray-400 mb-8 mt-8 border-solid"></p>
      <div className="info-container" data-aos="fade-up">
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
