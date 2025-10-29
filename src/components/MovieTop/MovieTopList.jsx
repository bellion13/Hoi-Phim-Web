import React from "react";
import MovieTopCard from "./MovieTopCard";
import poster1 from "../../assets/movies/thandenoiuocdi.png";

const MovieTopList = ({ title }) => {
  const movies = Array(6).fill({
    poster: poster1,
    title: "Thần Đèn Ơi, Ước Đi",
    subtitle: "The Toxic Avenger",
  });

  return (
    <section className="w-full max-w-[1920px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 my-6 sm:my-8 md:my-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-5">
        <h2 className="text-white text-xl sm:text-2xl font-bold">{title}</h2>
        <button className="text-gray-400 hover:text-white text-sm transition-colors">
          Xem tất cả ›
        </button>
      </div>

      {/* Movie Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5 justify-items-center pb-4 sm:pb-6 md:pb-10">
        {movies.map((m, i) => (
          <MovieTopCard
            key={i}
            poster={m.poster}
            title={m.title}
            subtitle={m.subtitle}
            rank={i + 1}
          />
        ))}
      </div>
    </section>
  );
};

export default MovieTopList;
