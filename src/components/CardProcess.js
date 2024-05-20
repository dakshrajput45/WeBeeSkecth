function CardProcess({ ProcessCardData }) {
  return (
    <div className="p-card" data-aos="zoom-in">
      <div>
        <img src={ProcessCardData.img} alt="yesss" />
      </div>
      <div>
        <p className="text-[28px] mt-[20px] mb-[10px]">
          {ProcessCardData.title}
        </p>
        <p className="text-[18px]">{ProcessCardData.desc}</p>
      </div>
    </div>
  );
}

export default CardProcess;
