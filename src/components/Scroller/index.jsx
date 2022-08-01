import React from "react";
import MovieCard from "./MovieCard";

export default function Scroller({ data }) {
  return (
    <div className='scroller flex gap-4 pt-3 pb-8 px-1 overflow-y-visible overflow-x-scroll scroll-smooth touch-pan-x xs:pt-6'>
      {data && data.map(item => <MovieCard key={item.id} data={item} />)}
    </div>
  );
}
