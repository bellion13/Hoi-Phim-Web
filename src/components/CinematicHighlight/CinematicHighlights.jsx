
import CinematicHighlightCard from "./CinematicHighlightCard";

const CinematicHighlights = ({ title = "Mãn Nhãn với Phim Chiếu Rạp"}) => {
  const list = new Array(4).fill({});

  return (
    <section className="w-full px-6" >
      {/* header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white text-2xl font-bold ">{title}</h2>
      </div>

      {/* row cuộn ngang */}
      <div className="grid grid-cols-1 gap-4 pb-4 px-1
         md:grid-cols-2 md:gap-6
         lg:grid-cols-3
         xl:grid-cols-4">
        {list.map((it, i) => (
          <CinematicHighlightCard key={i} {...it} />
        ))}
      </div>
    </section>
  );
}
export default CinematicHighlights;
