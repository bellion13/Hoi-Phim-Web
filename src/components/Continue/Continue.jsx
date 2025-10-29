import ContinueCard from "./ContinueCard";
import ngaykhongngu from "../../assets/movies/ngaykhongngu.png";
import muadedianguc from "../../assets/movies/muahedianguc.png";
import theconjuring from "../../assets/movies/the-conjuring.png";
const MOVIES = [
  {
    image: ngaykhongngu,
    title: "Ngày Không Ngủ",
    duration: "1h18m",
    progress: 70,
    provider: "Mobius",
  },
  {
    image: muadedianguc,
    title: "Mùa Hè Địa Ngục",
    duration: "1h18m",
    progress: 55,
    provider: "Mobius",
  },
  {
    image: theconjuring,
    title: "The Conjuring",
    duration: "1h18m",
    progress: 40,
    provider: "Mobius",
  },
];

const Continue = () => {
  return (
    <section className="w-full max-w-[1920px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 mt-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <h2 className="font-semibold text-white text-lg sm:text-[22px] md:text-[28px]">
          Xem tiếp của bạn
        </h2>
        <button className="text-gray-400 hover:text-white text-xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors">
          ›
        </button>
      </div>

      {/* Movie List */}
      <div className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-auto pb-2 scrollbar-hide">
        {MOVIES.map((movie, index) => (
          <ContinueCard key={index} {...movie} />
        ))}
      </div>
    </section>
  );
}
export default Continue;
