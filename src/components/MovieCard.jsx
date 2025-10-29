import React from "react";
import samplePoster from "../assets/movies/thandenoiuocdi.png";
import { Link } from "react-router-dom";

const MovieCard = ({
  poster = samplePoster,
  title = "Quái Nhân Báo Thù",
  subtitle = "The Toxic Avenger",
}) => {
  return (
    <Link className="w-full text-center"
        to={`/watch`}>
      <div className="relative rounded-lg overflow-hidden bg-white/5 shadow-sm">
        <img
          src={poster}
          alt={title}
          className="w-full h-64 object-cover block rounded-md"
        />

        {/* Labels (centered bottom) */}

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center">
          <span className="inline-block text-xs p-1 font-medium bg-gray-500 text-white rounded-tl-md">
            PD. 18
          </span>
          <span className="inline-block text-xs p-1 font-medium bg-green-600 text-white rounded-tr-md">
            TM. 16
          </span>
        </div>
      </div>

      <h4 className="mt-3 text-sm font-semibold text-white truncate">
        {title}
      </h4>
      <p className="text-xs text-gray-400">{subtitle}</p>
    </Link>
  );
};

export default MovieCard;
