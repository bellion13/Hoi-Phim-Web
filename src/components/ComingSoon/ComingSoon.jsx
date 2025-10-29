import React from "react";
import ComingSoonCard from "./ComingSoonCard";
import poster1 from "../../assets/movies/trochoiaogiac.png";

const ComingSoon = ({ title = "Phim Sắp Tới Trên Hội Phim", items = [] }) => {
  const list = items && items.length ? items : new Array(5).fill({
    poster: poster1,
    title: "Năm Của Anh, Ngày Của Em",
    subtitle: "Measure in Love",
  });

  return (
    <section className="w-full px-6 py-6" aria-label={title}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white text-2xl font-bold">{title}</h2>
        <button className="text-gray-400 text-sm">›</button>
      </div>

      <div className="grid grid-cols-1 gap-4 pb-4 px-1
         md:grid-cols-3 md:gap-6
         lg:grid-cols-4
         xl:grid-cols-5">
        {list.map((m, i) => (
          <ComingSoonCard key={i} {...m} />
        ))}
      </div>
    </section>
  );
}
export default ComingSoon;
