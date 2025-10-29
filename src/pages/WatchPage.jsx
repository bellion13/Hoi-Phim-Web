import { useState } from "react";
import { useNavigate } from "react-router-dom";
import left from "../assets/right.png"; // mũi tên phải, lật sang trái
import thandenoiuocdi from "../assets/movies/thandenoiuocdi.png";
import play from "../assets/playhero.png";
import heart from "../assets/heathero.png";
import cong from "../assets/cong.png";
import baocao from "../assets/baocao.png";
import chiase from "../assets/chiase.png";
import start from "../assets/start.png";
import cmt from "../assets/cmt.png";
import dow from "../assets/dow.png";
import gichu from "../assets/gichu.png";
import navbar from "../assets/navbar.png";
import mic from "../assets/mic.png";
import gui from "../assets/gui.png";
import lykinha from "../assets/lykinha.jpg";

const fakeComments = [
  {
    id: 1,
    avatar: lykinha,
    name: "Hương Giang",
    text: "trời ơi…… lúc nhạc vang lên nổi da gà luôn á",
    ago: "28 phút trước",
  },
  {
    id: 2,
    avatar: lykinha,
    name: "Dực Dior",
    text: "Phim rất hay, đáng xem trong năm 2025!",
    ago: "23:06",
  },
  {
    id: 3,
    avatar: lykinha,
    name: "Minh Khang",
    text: "Tình tiết hơi nhanh nhưng hình ảnh cực đẹp 🎬",
    ago: "2 giờ trước",
  },
];

const WatchPage = () => {
  const [isOn, setIsOn] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="pt-16 pb-16 md:pt-20 min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 flex flex-col">
        {/* Back + Title */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-3 text-sm md:text-base text-gray-200 hover:text-white"
        >
          <span className="inline-grid place-items-center w-8 h-8 rounded-full bg-white/10">
            <img src={left} alt="" className="w-4 h-4 scale-x-[-1]" />
          </span>
          <span className="font-medium">Xem phim Thần Đèn ơi, Ước Đi</span>
        </button>

        {/* Player */}
        <div className="rounded-t-2xl mt-4 w-full overflow-hidden border border-white/10 bg-black aspect-video">
          <iframe
            className="w-full h-full object-cover"
            src="https://www.youtube.com/embed/N8hrZin4itU?list=RDN8hrZin4itU"
            title="NAN KHƯỚC X ĐÁY BIỂN X BÍCH THƯỢNG QUAN, MẠC VẤN QUY KỲ - TRACK NHẠC HOA REMIX CỰC HAY"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        {/* Action bar dưới player */}
        <div className="flex items-center justify-between bg-black py-4 mb-6">
          <div className="flex items-center gap-2 md:gap-3 flex-wrap">
            <button className="inline-flex items-center gap-1.5 md:gap-2 text-[11px] md:text-xs px-2 shrink-0">
              <img src={heart} alt="Heart" className="w-4 h-4 inline-block" />
              <span className="">Yêu thích</span>
            </button>

            <button className="inline-flex items-center gap-1.5 md:gap-2 text-[11px] md:text-xs px-2 shrink-0">
              <img src={cong} alt="Add" className="w-4 h-4 inline-block" />
              <span className="">Thêm vào</span>
            </button>

            <div className="inline-flex items-center gap-1.5 md:gap-2 text-[11px] md:text-xs px-2 shrink-0">
              <span className="">Chuyển tập</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded border border-amber-300 text-white font-semibold">
                ON
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5 md:gap-2 text-[11px] md:text-xs px-2 shrink-0">
              <span className="">Bỏ qua giới thiệu</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded border">
                OFF
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5 md:gap-2 text-[11px] md:text-xs px-2 shrink-0">
              <span className="">Rạp phim</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded border">
                OFF
              </span>
            </div>

            <button className="inline-flex items-center gap-1.5 md:gap-2 text-[11px] md:text-xs px-2 shrink-0">
              <span className="">Xem chung</span>
            </button>

            <button className="inline-flex items-center gap-1.5 md:gap-2 text-[11px] md:text-xs px-2 shrink-0">
              <img src={chiase} alt="Share" className="w-4 h-4 inline-block" />
              <span className="">Chia sẻ</span>
            </button>
          </div>

          <a
            href="#"
            className="ml-4 mr-2 shrink-0 inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white"
          >
            <img
              src={baocao}
              alt="Report"
              className="w-4 h-4 inline-block mr-1"
            />
            Báo lỗi
          </a>
        </div>

        {/* ====== MAIN CONTENT GRID ====== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* LEFT: info + episodes + comments */}
          <div className="lg:col-span-8 space-y-6">
            {/* Info row */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-24 sm:w-28 md:w-32 aspect-2/3 rounded-xl overflow-hidden shrink-0 mx-auto md:mx-0">
                <img
                  src={thandenoiuocdi}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="flex-1 gap-2 space-y-4">
                  <h1 className="text-lg sm:text-xl font-semibold">
                    Thần Đèn ơi, Ước Đi
                  </h1>
                  <div className="text-[#FFD875]">Genie, Make a Wish</div>

                  {/* badge nhỏ */}
                  <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
                    <span className="px-2 py-1 rounded border border-[#FFD875] text-[#FFD875] ">
                      IMDb 6.3
                    </span>
                    <span className="px-2 py-1 rounded border border-white bg-white text-black font-semibold">
                      T16
                    </span>
                    <span className="px-2 py-1 rounded border border-white ">
                      2025
                    </span>
                    <span className="px-2 py-1 rounded border border-white ">
                      Phần 1
                    </span>
                    <span className="px-2 py-1 rounded border border-white ">
                      Tập 13
                    </span>
                  </div>

                  {/* tags */}
                  <div className="mt-2 flex flex-wrap gap-2 text-xs text-gray-300">
                    {["Tình cảm", "Hài", "Kỳ ảo", "Lãng mạn", "Giả tưởng"].map(
                      (t) => (
                        <span
                          key={t}
                          className="px-2 py-1 bg-white/5 rounded border border-white/10"
                        >
                          {t}
                        </span>
                      )
                    )}
                  </div>

                  {/* trạng thái */}
                  <div className="mt-2 text-xs text-emerald-400 bg-[#22CB4C1A] inline-block px-4 py-2 rounded-full ">
                    Đã hoàn thành: <span>13 / 13</span> tập
                  </div>
                </div>

                <div className="flex-1 md:pl-2 lg:pl-4">
                  <p className="mt-3 text-sm text-gray-300 leading-6">
                    Sau ngàn năm, vị thần đèn khoa trương trở lại ban điều ước
                    cho một cô gái khác kỳ. Liệu phép thuật của ngài có thể
                    khiến thế giới cùng nhắc nhớ câu chuyện lãng mạn?
                    <button className="ml-1 text-amber-400 hover:underline">
                      Thông tin phim
                    </button>
                  </p>
                </div>
              </div>
            </div>

            {/* Episodes */}
            <section>
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between py-3 border-b border-white/10">
                <div className="flex items-center flex-wrap gap-4 md:gap-8">
                  <div className="flex items-center gap-2 text-xs">
                    <img src={navbar} alt="navbar" className="w-5 h-5" />
                    <h3 className="font-semibold text-lg">Phần 1</h3>
                    <img src={dow} alt="dow" className="w-4 h-4" />
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="px-2 py-1 rounded-md border border-white">
                      <img
                        src={gichu}
                        alt="Phụ đề"
                        className="w-4 h-4 inline-block mr-1"
                      />
                      Phụ đề
                    </div>
                    <div className="px-2 py-1">
                      <img
                        src={mic}
                        alt="Lồng tiếng"
                        className="w-4 h-4 inline-block mr-1"
                      />
                      Lồng tiếng
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-md">
                  <span className="text-sm">Rút gọn</span>
                  <button
                    onClick={() => setIsOn(!isOn)}
                    className={`w-10 h-5 flex items-center rounded-full border-2 transition-all duration-300 ${
                      isOn
                        ? "bg-amber-500 border-amber-400 justify-end"
                        : "bg-[#0F111A] border-amber-400 justify-start"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        isOn ? "bg-amber-200" : "bg-amber-400"
                      }`}
                    />
                  </button>
                </div>
              </div>

              <div className="py-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-3">
                {Array.from({ length: 13 }).map((_, i) => (
                  <button
                    key={i}
                    className={`h-10 rounded-lg border transition ${
                      i === 0
                        ? "bg-[#FFD875] border-amber-400 text-black font-semibold hover:bg-amber-400"
                        : "bg-white/5 border-none hover:bg-white/10"
                    }`}
                  >
                  
                    <img
                      src={play}
                      alt="Play"
                      className="w-4 h-4 inline-block mr-1 invert brightness-200"
                    />
                    Tập {i + 1}
                  </button>
                ))}
              </div>
            </section>

            {/* Comments */}
            <section>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="py-3 border-b border-white/10 flex items-center gap-2 sm:border-none">
                  <h3 className="font-semibold">
                    <img
                      src={cmt}
                      alt="Comment"
                      className="w-5 h-5 inline-block mr-1"
                    />
                    Bình luận <span className="text-gray-400">(999)</span>
                  </h3>
                </div>
                <div className="flex items-center text-[10px]">
                  <div className="border flex p-0.5 rounded gap-2">
                    <div className="bg-white text-black px-1 rounded">
                      Bình luận
                    </div>
                    <div>Đánh giá</div>
                  </div>
                </div>
              </div>

              <div className="text-[11px] py-2">
                Vui lòng<span className="text-[#FFD875]"> đăng nhập </span>để
                tham gia bình luận.
              </div>

              <div className="p-2 space-y-3 rounded-2xl border border-white/10 bg-white/5">
                <textarea
                  rows={4}
                  placeholder="Viết bình luận"
                  className="w-full rounded-xl bg-black/30 border border-white/10 p-3 outline-none focus:ring-1 focus:ring-white/20"
                />
                <div className="flex justify-end items-center gap-1 px-2">
                  <button className="text-[#FFD875]">Gửi</button>
                  <img src={gui} alt="Send" className="w-4 h-4 inline-block" />
                </div>
              </div>

              {/* demo comments từ fake data */}
              <div className="pt-8 space-y-4">
                {fakeComments.map((c) => (
                  <Comment key={c.id} name={c.name} text={c.text} ago={c.ago} />
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT: sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Card đánh giá/bình luận */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center gap-1">
                    <img
                      src={start}
                      alt="Star"
                      className="w-4 h-4 inline-block mr-1 "
                    />
                    <div className="font-semibold ">Đánh giá</div>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <img
                      src={cmt}
                      alt="Comment"
                      className="w-4 h-4 inline-block mr-1 "
                    />
                    <div className="font-semibold">Bình luận </div>
                  </div>
                </div>
                <div className="flex items-center bg-blue-700 px-2 py-1 rounded-full">
                  <div className="w-8 h-8 grid place-items-center text-sm font-bold">
                    9.0
                  </div>
                  <button className="px-3 py-1 text-sm">Đánh giá</button>
                </div>
              </div>

              {/* Diễn viên */}
              <h4 className="font-semibold my-8">Diễn viên</h4>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 sm:gap-8">
                {[
                  "Kim Woo-bin",
                  "Bae Suzy",
                  "Ahn Eun-jin",
                  "Steve Sanghyun Noh",
                  "Go Gyu-pil",
                  "Lee Joo-young",
                ].map((n, i) => (
                  <div key={i} className="text-center">
                    <div className="mx-auto w-14 h-14 rounded-full overflow-hidden bg-white/10">
                      <img
                        src={thandenoiuocdi}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="mt-2 text-[11px] text-gray-300 leading-4 line-clamp-2">
                      {n}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Đề xuất cho bạn */}
            <div className="p-4">
              <h4 className="font-semibold mb-3">Đề xuất cho bạn</h4>
              <ul className="space-y-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="flex items-center gap-3 rounded-xl p-2 bg-white/5 transition"
                    >
                      <div className="w-16 rounded-md overflow-hidden">
                        <img
                          src={thandenoiuocdi}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="space-y-2 min-w-0">
                        <p className="text-sm font-medium truncate">
                          Nhập Thanh Vân
                        </p>
                        <p className="text-xs text-gray-400 truncate">
                          Love in the Clouds
                        </p>
                        <p className="text-xs text-gray-400 truncate">
                          T16 • Phần 1 • Tập 29
                        </p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;

const Comment = ({ name, text, ago }) => {
  return (
    <div className="flex gap-3">
      <div className="w-9 h-9 rounded-full overflow-hidden ">
        <img src={lykinha} alt={name} className="w-full h-full object-cover" />
      </div>

      <div className="flex-1">
        <div className="text-sm">
          <span className="font-medium">{name}</span>
          <span className="mx-2 text-xs text-gray-400">{ago}</span>
        </div>
        <p className="text-sm text-gray-200 mt-1">{text}</p>
        <div className="mt-2 flex gap-4 text-xs text-gray-400">
          <button className="hover:text-white">Thích</button>
          <button className="hover:text-white">Trả lời</button>
          <button className="hover:text-white">Thêm…</button>
        </div>
      </div>
    </div>
  );
};
