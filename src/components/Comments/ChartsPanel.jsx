import ngaykhongngu from '../../assets/movies/ngaykhongngu.png';
import thandenoiuocdi from '../../assets/movies/thandenoiuocdi.png';
import lykinha from '../../assets/lykinha.jpg';
import arowyl from '../../assets/arowyl.png';
import arowvo from '../../assets/arowvo.png';
import soinoinhat from '../../assets/soinoinhat.png';
import yeuthichnhat from '../../assets/heartblue.png';
import theloai from '../../assets/theloaihot.png';
import binhluanmoi from '../../assets/cmtnew.png';
import male from "../../assets/male.png";

export const RankRow = ({ index, poster, title, delta, pill }) => {
  const renderDeltaIcon = (d, deltaColor) => {
    // image path (imported asset or public URL)
    if (typeof d === 'string' && (d.endsWith('.png') || d.endsWith('.jpg') || d.startsWith('/'))) {
      return <img src={d} alt="delta" className="w-3 h-3" />;
    }
    // flat/dash — use deltaColor when available
    return <span style={{ display: 'inline-block', width: 12, height: 2, background: deltaColor || '#94A3B8', borderRadius: 2 }} />;
  };

  if (pill) {
    return (
      <li className="flex items-center gap-3 py-2 text-sm">
        <span className="w-6 text-center text-gray-400 text-xs">{index}.</span>
        <span className="mr-2" aria-hidden>{renderDeltaIcon(pill.delta, pill.deltaColor)}</span>
        <div className="flex-1">
          <span className="inline-block text-sm px-4 py-1 rounded-full font-medium" style={{ background: pill.bg, color: pill.fg }}>
            {pill.text}
          </span>
        </div>
      </li>
    );
  }

  return (
    <li className="flex items-center gap-3 py-2">
      <span className="w-6 text-center text-gray-400 text-xs">{index}.</span>
      <span className="mr-2" aria-hidden>{renderDeltaIcon(delta)}</span>
      {poster ? (
        <span className="w-8 h-8 rounded-md overflow-hidden bg-white/5 shrink-0 border border-white/6">
          <img src={poster} alt={title} className="w-full h-full object-cover" />
        </span>
      ) : null}
      <span className="text-sm text-gray-100 flex-1 truncate">{title}</span>
    </li>
  );
}

const CardBox = ({ icon, title, children }) => {
  return (
    <div className="p-6">
      <h3 className="mb-3 flex items-center gap-2 text-white font-semibold">
        <span className="text-sky-400">{icon}</span> {title}
      </h3>
      {children}
    </div>
  );
}

const ChartsPanel = ({ hot = [], fav = [], tags = [] }) => {
  const stub = [
    { title: "Ngày Không Ngủ", poster: ngaykhongngu, delta: arowyl },
    { title: "Thần Đèn ơi, Ước Đi", poster: thandenoiuocdi, delta: arowyl },
    { title: "Ngày Không Ngủ", poster: ngaykhongngu, delta: arowvo },
    { title: "Thần Đèn ơi, Ước Đi", poster: thandenoiuocdi, delta: arowyl },
    { title: "Ngày Không Ngủ", poster: ngaykhongngu, delta: arowvo },
  ];

  const tagPills = [
    { text: "Chính Kịch", bg: "#8B2E4A", fg: "#FFFFFF", delta: arowyl, deltaColor: "#A3E635" },
    { text: "Lãng Mạn", bg: "#2B6CB0", fg: "#FFFFFF", delta: '-', deltaColor: "#94A3B8" },
    { text: "Tình Cảm", bg: "#7C5DA8", fg: "#FFFFFF", delta: '-', deltaColor: "#F472B6" },
    { text: "Hài", bg: "#86B342", fg: "#FFFFFF", delta: arowyl, deltaColor: "#A3E635" },
    { text: "Kỳ Ảo", bg: "#C08C5A", fg: "#FFFFFF", delta: arowyl, deltaColor: "#FB7185" },
  ];

  const cmtnew  = [
    {
      avatar: lykinha,
      username: "Lý Nhã Kỳ",
      gender: male,
      content: "xem lại nhớ vụ ecopark ở văn giang ngày xưa",
      
      movie: "Tôi Mộng Giữa Ban Ngày"
    },
    {
      avatar: lykinha,
      username: "Lý Nhã Kỳ",
      gender: male,
      content: "T thề là coi phim nào t cũng xem tua, chỉ duy nhất phim này t không...",
      movie: "Tôi Mộng Giữa Ban Ngày"
    },

    {
      avatar: lykinha,
      username: "Lý Nhã Kỳ",
      gender: male,
      content: "T thề là coi phim nào t cũng xem tua, chỉ duy nhất phim này t không...",
      movie: "Tôi Mộng Giữa Ban Ngày"
    },
    {
      avatar: lykinha,
      username: "Lý Nhã Kỳ",
      gender: male,
      content: "xem lại nhớ vụ ecopark ở văn giang ngày xưa",
      movie: "Tôi Mộng Giữa Ban Ngày"
    },
    

  ]
  return (
  <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.1fr_0.8fr_1.2fr] divide-y lg:divide-y-0 lg:divide-x divide-white/8">
      {/* Sôi nổi nhất */}
      <CardBox 
      icon={<img src={soinoinhat} alt="Sôi nổi nhất" className="w-6 h-6" />}

       title="SÔI NỔI NHẤT">
        <ol>
          {(hot.length ? hot : stub).map((it, i) => (
            <RankRow key={i} index={i + 1} title={it.title} poster={it.poster} delta={it.delta} />
          ))}
        </ol>
        <button className="mt-3 text-xs text-gray-400 hover:text-gray-200 w-20 text-left">Xem thêm</button>
      </CardBox>

      {/* Yêu thích nhất */}
      <CardBox icon={<img src={yeuthichnhat} alt="Yêu thích nhất" className="w-6 h-6" />} title="YÊU THÍCH NHẤT">
        <ol>
          {(fav.length ? fav : stub).map((it, i) => (
            <RankRow key={i} index={i + 1} title={it.title} poster={it.poster} delta={it.delta} />
          ))}
        </ol>
        <button className="mt-3 text-xs text-gray-400 hover:text-gray-200 w-20 text-left">Xem thêm</button>
      </CardBox>

      {/* Thể loại hot */}
      <CardBox icon={<img src={theloai} alt="Thể loại hot" className="w-6 h-6" />} title="THỂ LOẠI HOT">
        <ol>
          {(tags.length ? tags : tagPills).map((p, i) => (
            <RankRow key={i} index={i + 1}  pill={p} />
          ))}
        </ol>
        <button className="mt-3 text-xs text-gray-400 hover:text-gray-200 w-20 text-left">Xem thêm</button>
      </CardBox>

      {/* Bình luận mới (cột thứ 4) */}
      <CardBox icon={<img src={binhluanmoi} alt="Bình luận mới" className="w-6 h-6" />} title="BÌNH LUẬN MỚI">
        <ul className="space-y-3">
          {cmtnew.map((cmt, i) => (
            <li key={i} className="rounded-xl bg-white/5 p-3">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-white/10 overflow-hidden">
                  <img src={cmt.avatar} alt={cmt.username} className="w-full h-full object-cover" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm ">
                    <span className="text-white font-medium">{cmt.username}</span>
                    <span ><img className="mx-1 w-4 h-4 inline" src={cmt.gender} alt={cmt.gender} /></span>
                    <span className="text-gray-300">{cmt.content}</span>
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {/* <img src={cmt.img} alt="" className="inline-block w-4 h-4 mr-1" /> */}
                  {cmt.movie}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </CardBox>
  </div>
  );
}
export default ChartsPanel;
