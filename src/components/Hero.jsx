import React from "react";
import banner from "../assets/banner.png";
import textimg from "../assets/textimghero.png";
import playIcon from "../assets/playhero.png";    
import heat from "../assets/heathero.png";
import help from "../assets/helphero.png";

const Hero = () => {
  return (
    <section className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[680px] w-full">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/80 to-transparent z-10" />
      <img
        src={banner}
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />

      {/* Content */}
      <div className="mx-auto relative z-20 h-full flex items-end pb-8 md:pb-12">
        <div className="w-full max-w-2xl text-white px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Title Image */}
          <img 
            src={textimg} 
            alt="The Fantastic Four" 
            className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-none mb-2" 
          />
          
          {/* Subtitle */}
          <p className="text-[#FFD875] text-base sm:text-lg my-2 sm:my-4">
            The Fantastic Four: First Steps
          </p>

          {/* Badges */}
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 flex-wrap">
            <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
              4K    
            </span>
            <span className="bg-white text-black font-bold text-xs px-2 py-1 rounded">
              T13
            </span>
            <span className="border border-white text-white text-xs px-2 py-1 rounded">
              2025
            </span>
            <span className="border border-white text-white text-xs px-2 py-1 rounded">
              2h 10m
            </span>
          </div>

          {/* Tags */}
          <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4 flex-wrap">
            <span className="py-1 px-2 bg-white/10 rounded">Chiếu Rạp</span>
            <span className="py-1 px-2 bg-white/10 rounded">Siêu Anh Hùng</span>
            <span className="py-1 px-2 bg-white/10 rounded">Marvel</span>
            <span className="py-1 px-2 bg-white/10 rounded">Khoa Học</span>
            <span className="py-1 px-2 bg-white/10 rounded">Kỳ Ảo</span>
            <span className="py-1 px-2 bg-white/10 rounded">Phiêu Lưu</span>
          </div>

          {/* Description - Hidden on smallest screens */}
          <p className="hidden sm:block text-xs sm:text-sm text-gray-300 mb-4 sm:mb-6 line-clamp-3 sm:line-clamp-none">
            The Fantastic Four: First Steps (Bộ Tứ Siêu Đẳng: Bước Đi Đầu Tiên)
            kể về một gia đình của Marvel đối mặt với thử thách khó khăn, họ vừa
            phải cân bằng vai trò là anh hùng với sức mạnh mới và bảo vệ Trái
            đất khỏi một mối đe doạ vũ trụ.
          </p>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 sm:gap-4 mt-4 sm:mt-6">
  
  <button 
    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-linear-to-b from-yellow-300 to-yellow-500 flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
  >
    <img src={playIcon} alt="Play" className="w-5 h-5 sm:w-6 sm:h-6" />
  </button>

  <div className="flex items-center">
    <button 
      className="w-9 h-9 sm:w-10 sm:h-10 rounded-l-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
    >
      <img src={heat} alt="Heart" className="w-4 h-4 sm:w-5 sm:h-5" />
    </button>
    <button 
      className="w-9 h-9 sm:w-10 sm:h-10 rounded-r-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
    >
      <img src={help} alt="Help" className="w-4 h-4 sm:w-5 sm:h-5" />
    </button>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
