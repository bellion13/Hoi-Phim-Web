import React from 'react'
import Hero from '../components/Hero'
import Topics from '../components/Topic/Topics'
import Continue from '../components/Continue/Continue'
import InternationalMoviesByRegion from '../components/InternationalMovies/InternationalMoviesByRegion'
import TopCommentsSection from '../components/Comments/TopCommentsSection'
import MovieList from '../components/MovieList'
import MovieTopList from '../components/MovieTop/MovieTopList'
import CinematicHighlights from '../components/CinematicHighlight/CinematicHighlights'
import ComingSoon from '../components/ComingSoon/ComingSoon'
import NewAnime from '../components/NewAnime/NewAnime'
const Home = () => {
  return (
    <div className='pb-20'>
      <Hero />
      <Topics />
      <Continue />
      <InternationalMoviesByRegion />
      <TopCommentsSection />
      <MovieList title={'Phim Điện Ảnh Mới Có́ng'}/>
      <MovieTopList title={"Top 10 phim bộ hôm nay"} />
      <CinematicHighlights />
      <MovieTopList title={"Top 10 phim bộ hôm nay"} />
      <MovieList title={'Phim Nhật Mới Oanh Tạc Chốn Này'}/>
      <MovieList title={'Phim Thái New: Không Drama Đời Không Nể'}/>
      <ComingSoon />
      <NewAnime />
      <MovieList title={'Điện Ảnh Hồng Kông ở Chỗ Này Này'}/>
      <MovieList title={'Tôi Sợ Con Người Em Rồi Đó, nhưng Không Bằng Sợ Ma'}/>
      <MovieList title={'Đường về nhà là vào tim ta...'}/>
    </div>
  )
}

export default Home
