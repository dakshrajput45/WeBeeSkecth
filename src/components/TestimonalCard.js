import "./ClientTestimonals.css"

function TestimonalCard({ TeamData }) {
    console.log(TeamData);
    return (
        <div className="testi-card">
            <div className="card-text">
                <p>{"Working With Marketi has been a right and good investment for our business. And Thier target campaigns and data-driven approach have not noly increased our Roi but also provide valuable insights for future growth."}</p>
            </div>
            <div className="black-line">

            </div>
            <div className="info-container">
                <div className="img-container">
                    <img src={TeamData.img} alt="img" />
                </div>
                <div className="info-container-text">
                    <p>{TeamData.name}</p>
                    <p>{TeamData.job}</p>
                </div>
            </div>
        </div>
    );
}

export default TestimonalCard 