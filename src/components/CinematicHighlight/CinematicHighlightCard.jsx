// components/CinematicHighlightCard.jsx
import banner7hs from "../../assets/movies/banner7hs.png";
import bayhs from "../../assets/movies/bayhs.png";

const CinematicHighlightCard = ({
  banner = banner7hs,
  poster = bayhs,
  title = "Bẫy Hồi Sinh",
  subtitle = "The Ghost Game",
  rating = "T16",
  year = "2025",
  duration = "1h 45p",
  pdLabel = "P.Đề",
  tmLabel = "T.Minh",
}) =>{
  return (
    <div className="overflow-hidden ">
      {/* Ảnh lớn */}
      <div className="relative">
        <img src={banner} alt={title} className="w-full h-56 object-cover" />

        {/* poster nhỏ đè góc trái */}
        <div className="absolute -bottom-10 left-5 w-20 h-28 rounded-xl overflow-hidden shadow-2xl ring-2 ring-black">
          <img src={poster} alt={`${title} poster`} className="w-full h-full object-cover" />
        </div>

        {/* badges giữa mép dưới */}
        <div className="absolute bottom-0 left-30 flex items-center">
          <span className="text-[12px] font-medium px-3 py-1 rounded-tl-md bg-[#374151] text-white/90">
            {pdLabel}
          </span>
          <span className="text-[12px] font-medium px-3 py-1 rounded-tr-md bg-emerald-500 text-white">
            {tmLabel}
          </span>
        </div>
        
      </div>

      {/* text */}
      <div className="ml-31 pb-5 pt-6">
        <h4 className="text-white text-lg font-semibold leading-tight truncate">{title}</h4>
        <p className="text-sm text-gray-400 truncate mt-1">{subtitle}</p>

        <div className="mt-3 text-xs text-gray-400 flex items-center gap-1">
          <span className="font-semibold text-white">{rating}</span>
          <span className="mx-1">•</span>
          {year}
          <span className="mx-1">•</span>
          {duration}
        </div>
      </div>
    </div>
  );
}
export default CinematicHighlightCard;
