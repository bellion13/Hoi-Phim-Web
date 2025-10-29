import React from "react";
import VietNam from "../assets/VietNam.png";
import tele from "../assets/tele.png";
import discord from "../assets/discord.png";
import facebook from "../assets/facebook.png";
import tiktok from "../assets/tiktok.png";

const Footer = () => {
  return (
    <footer className="bg-[#0F111A] text-white">
      {/* Container */}
      <div className="mx-auto px-4 sm:px-6 py-8 lg:py-12 space-y-8">

        {/* Badge VN */}
        <div className="flex">
          <div className="inline-flex items-center gap-3 bg-[#78140F] px-4 py-2 rounded-full">
            <img
              src={VietNam}
              alt="Hoàng Sa & Trường Sa là của Việt Nam"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-sm">
              Hoàng Sa &amp; Trường Sa là của Việt Nam!
            </span>
          </div>
        </div>

        {/* Brand + Socials */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-8">
          {/* Logo / Brand */}
          <div className="bg-[#191B24] px-5 py-2 rounded-md w-fit text-2xl sm:text-3xl font-semibold">
            Logo
          </div>

          {/* Socials */}
          <ul className="flex items-center gap-3">
            {[
              { src: tele, label: "Telegram" },
              { src: discord, label: "Discord" },
              { src: facebook, label: "Facebook" },
              { src: tiktok, label: "TikTok" },
            ].map((s, i) => (
              <li key={i}>
                <a
                  href="#"
                  aria-label={s.label}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#191B24] hover:bg-[#232634] transition"
                >
                  <img src={s.src} alt="" className="w-5 h-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Links */}
        <nav aria-label="Footer links">
          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#D1D5DB]">
            <li><a href="#" className="hover:text-white transition">Hỏi &amp; Đáp</a></li>
            <li><a href="#" className="hover:text-white transition">Chính sách bảo mật</a></li>
            <li><a href="#" className="hover:text-white transition">Điều khoản sử dụng</a></li>
            <li><a href="#" className="hover:text-white transition">Giới thiệu</a></li>
            <li><a href="#" className="hover:text-white transition">Liên hệ</a></li>
          </ul>
        </nav>

        {/* Description */}
        <p className="max-w-4xl text-xs sm:text-sm leading-6 text-[#AAAAAA]">
          HoiPhim – Phim hay cả thúng - Trang xem phim online chất lượng cao miễn phí Vietsub, thuyết minh, lồng tiếng full HD. Kho phim mới khổng lồ, phim chiếu rạp, phim bộ, phim lẻ từ nhiều quốc gia như Việt Nam, Hàn Quốc, Trung Quốc, Thái Lan, Nhật Bản, Âu Mỹ… đa dạng thể loại. Khám phá nền tảng phim trực tuyến hay nhất 2024 chất lượng 4K!
        </p>
        {/* Bottom row */}
        <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs sm:text-sm text-[#AAAAAA]">© 2024 HoiPhim</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
