import InternationalMovies from "./InternationalMovies";
import thoivangson from "../../assets/movies/thoivangson.png"
const MOVIE_SAMPLE = {
  image: thoivangson,
  title: "Thời Vàng Son",
  subtitle: "Our Golden Days",
};

const MOVIES = Array(6).fill(MOVIE_SAMPLE);


const InternationalMoviesByRegion = () => {
  

  return (
    <div className=" m-6 p-6 text-white rounded-2xl bg-linear-to-br from-[#282B3A] to-[#1c1e29]">
      <InternationalMovies title="Phim Hàn Quốc mới"  color="#A855F7" movies={MOVIES} />
      <InternationalMovies title="Phim Trung Quốc mới" color="#FACC15" movies={MOVIES} />
      <InternationalMovies title="Phim US-UK mới"     color="#EC4899" movies={MOVIES} />
    </div>
  );
}
export default InternationalMoviesByRegion;