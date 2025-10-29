import right from "../../assets/right.png";
const TopicCard = ({ title, href = "#", from, to }) => {
  return (
    <a
      href={href}
      className="block rounded-2xl p-6 h-32
                 bg-linear-to-br shadow-sm
                 hover:shadow-lg hover:scale-[1.01] transition
                 text-white overflow-hidden"
      style={{ backgroundImage: `linear-gradient(to bottom right, ${from}, ${to})` }}
    >

      <div className="flex flex-col justify-end h-full">
        <h3 className="font-bold text-xl">
          {title}
        </h3>
        <span className="text-sm flex items-center">
          Xem chủ đề 
          <span>
            <img src={right} alt="" className="w-5 h-5" />
          </span>
        </span>
      </div>
    </a>
  );
}
export default TopicCard;
