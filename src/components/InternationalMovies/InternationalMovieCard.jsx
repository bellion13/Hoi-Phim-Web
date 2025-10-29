import { Link } from "react-router-dom";

const InternationalMovieCard = ({ image, title, subtitle }) => {
  return (
    <Link 
        to={`/watch`}

    className="w-40 sm:w-[180px] md:w-[200px] lg:w-[235px] shrink-0">
      <div className="relative group">
        <img
          src={image}
          alt={title}
          className="rounded-lg object-cover w-full aspect-video transition group-hover:opacity-90"
        />
        {/* Badges */}
        <div className="absolute bottom-0 left-2 sm:left-4 flex"> 
          <span className="font-semibold text-[10px] px-1.5 py-0.5 rounded-tl-md bg-[#5E6070] text-white">PĐ.18</span>
          <span className="font-semibold text-[10px] px-1.5 py-0.5 rounded-tr-md bg-[#2CA35D] text-white">TM.16</span>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200" />
      </div>
      <div className="mt-2">
        <h4 className="text-white text-xs sm:text-sm font-medium truncate">{title}</h4>
        <p className="text-gray-400 text-[10px] sm:text-xs truncate">{subtitle}</p>
      </div>
    </Link>
  );
}
export default InternationalMovieCard;