import { useRef } from "react";
import InternationalMovieCard from "./InternationalMovieCard";
import right from "../../assets/right.png";

const InternationalMovies = ({ title, color, movies = [] }) => {
  const listRef = useRef(null);

  const scrollNext = () => {
    listRef.current?.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <section className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 px-3 sm:px-4 md:px-6">
      {/* Left Column */}
      <div className="flex sm:flex-col sm:w-[120px] md:w-[150px] justify-between items-center sm:items-start py-2 sm:py-4">
        <h2 className="text-xl sm:text-2xl font-bold" style={{ color }}>
          {title}
        </h2>
        <a
          href="#"
          className="text-sm flex items-center gap-1 text-gray-300 hover:text-white transition-colors"
        >
          Xem toàn bộ <span className="text-lg">›</span>
        </a>
      </div>

      {/* Movie List Container */}
      <div className="relative flex-1 w-full overflow-hidden rounded-xl sm:rounded-2xl">
        {/* Horizontal Movie List */}
        <div
          ref={listRef}
          className="flex gap-3 sm:gap-4 py-2 sm:py-4 pl-0 sm:pl-4 pr-10 sm:pr-12 overflow-x-auto scroll-smooth
                     [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {movies.map((movie, index) => (
            <InternationalMovieCard key={index} {...movie} />
          ))}
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2
             w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 backdrop-blur
             flex items-center justify-center shadow-sm
             hover:bg-white/25 transition-colors"
        >
          <img src={right} alt="Next" className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </section>
  );
};

export default InternationalMovies;
