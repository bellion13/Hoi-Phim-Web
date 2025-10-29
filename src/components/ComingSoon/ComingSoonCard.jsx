import React from "react";
import samplePoster from "../../assets/movies/trochoiaogiac.png";
const ComingSoonCard = ({
  poster = samplePoster,
  title = "Tiêu đề chưa có",
  subtitle = "Phụ đề",
}) =>  {
  return (
    <div className="">
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={poster}
          alt={title}
          className="w-full h-36 sm:h-44 md:h-48 object-cover rounded-xl"
        />

        {/* small badge bottom-left */}
        <div className="absolute left-3 bottom-0">
          <span className="inline-block bg-white text-xs text-gray-900 px-3 py-1 rounded-t-md">
            Sắp chiếu
          </span>
        </div>
      </div>

      <div className="mt-3 ml-3">
        <h3 className="text-white text-sm font-semibold truncate">{title}</h3>
        <p className="text-xs text-gray-400 mt-1 truncate">{subtitle}</p>
      </div>
    </div>
  );
}
export default ComingSoonCard;
