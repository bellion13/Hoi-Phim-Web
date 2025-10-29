import React from "react";
import samplePoster from "../../assets/movies/thandenoiuocdi.png";
import { Link } from "react-router-dom";

const MovieTopCard = ({
  poster = samplePoster,
  title = "Mỹ Nhân Ngư",
  subtitle = "The Toxic Avenger",
  rank = 1,
}) => {
  return (
    <Link 
        to={`/watch`}

    className="relative w-full max-w-[200px] sm:max-w-none text-center group">
      {/* Poster */}
      <div className="relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl">
        {/* Image with hover effect */}
        <div className="relative">
          <img 
            src={poster} 
            alt={title} 
            style={{ clipPath: "polygon(0% 6%, 100% 0%, 100% 100%, 0% 100%)", 
            }}
            className="w-full h-full object-cover transition-transform duration-300 " 
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200" />
        </div>

        {/* Badges */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center">
          <span className="inline-block text-[10px] sm:text-xs p-1 font-medium bg-gray-500 text-white rounded-tl-md">
            PD. 18
          </span>
          <span className="inline-block text-[10px] sm:text-xs p-1 font-medium bg-green-600 text-white rounded-tr-md">
            TM. 16
          </span>
        </div>
      </div>

      {/* Rank Number */}
      <div className="absolute left-2 sm:left-3 bottom-2 text-4xl sm:text-5xl font-extrabold italic text-amber-300 drop-shadow-lg">
        {rank}
      </div>
     
      {/* Movie Info */}
      <div className="mt-3 ml-15 sm:mt-4 text-left">
        <h4 className="text-white text-xs sm:text-sm font-semibold truncate">
          {title}
        </h4>
        <p className="text-[10px] sm:text-xs text-gray-400 truncate">
          {subtitle}
        </p>
        <p className="text-[10px] sm:text-xs text-gray-400 mt-1">
          <span className="font-semibold text-white">T16</span> • Phần 1 • Tập 13
        </p>
      </div>
      
    </Link>
  );
};

export default MovieTopCard;
