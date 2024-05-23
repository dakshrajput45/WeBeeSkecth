function CardService({ icon, title, text }) {
  return (
    <div className="flex flex-col justify-center items-center text-center leading-[32px] px-[8px]">
      <div className="w-[60px] h-[60px] rounded-full bg-blue-500 bg-opacity-25 flex items-center justify-center text-[25px]">
        <div>{icon}</div>
      </div>
      <div>
        <p className="text-[22px] mt-[20px] mb-[8px]">{title}</p>
        <p className="text-[16px]">{text}</p>
      </div>
    </div>
  );
}

export default CardService;
