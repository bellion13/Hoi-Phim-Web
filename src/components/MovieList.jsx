import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title }) => {
  // render a few sample cards to mimic the screenshot (limit to 8)
  const items = new Array(8).fill(0)

  return (
    <section className="w-full px-6 pb-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white text-2xl font-bold">{title}
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {items.map((_, i) => (
          <MovieCard key={i} />
        ))}
      </div>
    </section>
  )
}

export default MovieList
