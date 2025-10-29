import { useRef } from "react";

const TopCommentsCarousel = ({ items = 6 }) => {
  const ref = useRef(null);
  const scrollBy = (dx) => ref.current?.scrollBy({ left: dx, behavior: "smooth" });

  return (
    <div className="relative">
      <div
        ref={ref}
        className="flex gap-6 overflow-x-auto scroll-smooth py-4 px-2
                   [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {Array.from({ length: items }).map((_, i) => (
          <div
            key={i}
            className="w-[340px] h-[180px] shrink-0 rounded-xl bg-white/10"
          />
        ))}
      </div>

      {/* arrows */}
      <button
        onClick={() => scrollBy(-360)}
        aria-label="Prev"
        className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full
                   bg-white/10 hover:bg-white/20 backdrop-blur flex items-center justify-center"
      >
        ‹
      </button>
      <button
        onClick={() => scrollBy(360)}
        aria-label="Next"
        className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full
                   bg-white/10 hover:bg-white/20 backdrop-blur flex items-center justify-center"
      >
        ›
      </button>
    </div>
  );
}
export default TopCommentsCarousel