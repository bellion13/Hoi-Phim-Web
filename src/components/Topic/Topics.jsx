import TopicCard from "./TopicCard";

const CATEGORIES = [
  { title: "Marvel",            from: "#2563eb", to: "#3b82f6" }, // xanh dương
  { title: "4K",                from: "#7c7ae0", to: "#9aa0d6" }, // tím xám
  { title: "Sitcom",            from: "#22a37a", to: "#39c6a3" }, // xanh ngọc
  { title: "Lồng Tiếng Cực Mạnh", from: "#7c66d7", to: "#a28be9" },
  { title: "Xuyên Không",       from: "#de8665", to: "#e6a58e" },
  { title: "Cổ Trang",          from: "#b15353", to: "#cf6a6a" },
  { title: "+4 Chủ Đề",         from: "#475569", to: "#64748b" }, // slate
];

const Topics = () => {
  return (
    <section className="mx-auto px-4 md:px-6 mt-4">
      <h2 className="text-[22px] md:text-[28px] font-semibold mb-4">Bạn đang quan tâm gì?</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-4
                      overflow-x-auto xl:overflow-visible pb-2
                    ">
        {CATEGORIES.map((t) => (
          <TopicCard key={t.title} {...t} />
        ))}
      </div>
    </section>
  );
}
export default Topics;
