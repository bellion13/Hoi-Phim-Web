import close from "../../assets/close.png";
const ContinueCard = ({ image, title, duration, progress, provider }) => {
  return (
    <div className="relative w-[120px] sm:w-[150px] md:w-40 lg:w-[180px]">
      {/* Poster */}
      <div className="relative rounded-lg overflow-hidden group">
        <img
          src={image}
          alt={title}
          className="w-full aspect-2/3 object-cover rounded-lg"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200" />
        
        {/* Delete button */}
        <button
          className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center
          bg-white/50 rounded opacity-0 group-hover:opacity-100 hover:bg-white transition-all duration-200"
        >
          <img src={close} alt="Close" className="w-3 h-3 sm:w-4 sm:h-4" />
        </button>
      </div>

      {/* Progress bar */}
      <div className="mt-2 h-1 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-white transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Info */}
      <div className="mt-2 text-sm text-gray-300 text-center">
        <p className="text-gray-400 text-[10px] sm:text-xs">
          <span className="font-medium text-white">{duration}</span> / 1h33m
        </p>
        <h4 className="text-white font-medium my-1 text-xs sm:text-sm line-clamp-1">{title}</h4>
        <p className="text-[10px] sm:text-xs text-gray-500">{provider}</p>
      </div>
    </div>
  );
}
export default ContinueCard;
