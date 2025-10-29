import TopCommentsCarousel from "./TopCommentsCarousel";
import ChartsPanel from "./ChartsPanel";
import topcmt from '../../assets/topcmt.png';
const TopCommentsSection = () => {
  return (
    <section className="rounded-3xl border border-white/10 text-white m-6">
      {/* Header */}
      <div className="flex items-center gap-2 px-6 pt-5">
        <img src={topcmt} alt="Top Comments" className="w-6 h-6" />
        <h2 className="text-lg font-semibold">TOP BÌNH LUẬN</h2>
      </div>

      {/* Carousel hàng trên */}
      <div className="px-6 pt-3">
        <TopCommentsCarousel items={6} />
      </div>

      {/* Divider */}
      <div className="h-px bg-white/10 my-5" />

      {/* Bảng xếp hạng 4 cột */}
      <div className="px-2 lg:px-4">
        <ChartsPanel />
      </div>

      {/* viền dưới */}
      <div className="h-px bg-white/10 mt-4" />
    </section>
  );
}
export default TopCommentsSection;
