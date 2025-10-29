import React from "react";
import banner from "../../assets/anime/banneranime.png";
import anime from "../../assets/anime/anime.png";
import playIcon from "../../assets/playhero.png";
import heartIcon from "../../assets/heathero.png";
import helpIcon from "../../assets/helphero.png";

const categories = ["Chính Kịch", "Anime", "Hài", "Hoạt Hình", "Học Đường"];

const NewAnime = () => {
  return (
    <section className="px-3 sm:px-4 md:px-6 py-6">
      <div className="relative w-full min-h-[70vh] md:min-h-[80vh] bg-[#0f1720] rounded-2xl overflow-hidden">
        {/* Banner + gradient overlay */}
        <div className="relative w-full h-[380px] sm:h-[460px] md:h-[520px] lg:h-[600px]">
          <img src={banner} alt="Hoa Thơm Kiều Hanh" className="w-full h-full object-cover" />
          {/* gradient từ trái sang phải để text dễ đọc */}
          <div className="absolute inset-0 bg-linear-to-r from-[#0f1720] via-[#0f1720]/70 to-transparent" />
        </div>

        {/* Content overlay */}
        <div className="absolute inset-0">
          <div className="flex flex-col justify-end md:justify-center h-full px-4 sm:px-8 pb-6 md:pb-12">
            <div className="max-w-xl md:max-w-2xl">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white my-2">
                Hoa Thơm Kiều Hanh
              </h1>
              <p className="text-amber-400 text-base sm:text-lg mb-4 md:mb-6">
                The Fragrant Flower Blooms with Dignity
              </p>

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 md:mb-6">
                <span className="px-2 py-1 bg-amber-400/20 text-amber-400 rounded border border-amber-400 text-xs sm:text-sm">
                  IMDb 8.6
                </span>
                <span className="px-2 py-1 bg-slate-700 text-white rounded text-xs sm:text-sm border border-white/30">
                  T13
                </span>
                <span className="px-2 py-1 bg-slate-700 text-white rounded text-xs sm:text-sm border border-white/30">
                  2025
                </span>
                <span className="px-2 py-1 bg-slate-700 text-white rounded text-xs sm:text-sm border border-white/30">
                  2h 10m
                </span>
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                {categories.map((cat) => (
                  <span
                    key={cat}
                    className="px-3 sm:px-4 py-1.5 bg-white/10 text-white rounded-md text-xs sm:text-sm hover:bg-white/20 transition-colors"
                  >
                    {cat}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 md:mb-8 max-w-md md:max-w-2xl">
                Ở một nơi nào đó, có 2 trường cao đẳng lân cận. Cao đẳng Chidoin, một trường nam sinh
                cao thấp hổ lốn tụ đủ những thằng đờn, trường nữ sinh Kikyo, một trường nữ sinh danh giá.
                Rintaro Tsugumi, một nam sinh năm 2 tỏ khoẻ và trầm tính tại trường Chidoin, bất gặp
                Kaoruko Waguri...
              </p>

              {/* Actions */}
              <div className="flex items-center gap-4 sm:gap-6">
                <button
                  aria-label="Play"
                  className="size-12 sm:size-14 rounded-full bg-amber-400 text-gray-900 hover:bg-amber-300 transition-colors grid place-items-center"
                >
                  <img src={playIcon} alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                <div className="flex">
                  <button
                    aria-label="Yêu thích"
                    className="p-2.5 sm:p-3 border border-white/30 rounded-l-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <img src={heartIcon} alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                  <button
                    aria-label="Thông tin"
                    className="p-2.5 sm:p-3 border border-l-0 border-white/30 rounded-r-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <img src={helpIcon} alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related anime scroller (dưới banner) */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-2  w-full px-4 sm:px-8">
          <div
            className="
              flex gap-2 sm:gap-3 justify-center overflow-x-auto scroll-smooth
              [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
              snap-x snap-mandatory
            "
          >
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={i}
                className="w-10 sm:w-12 md:w-14 rounded-lg border border-white/20 overflow-hidden shrink-0 snap-start"
              >
                <img src={anime} alt={`Anime ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewAnime;
