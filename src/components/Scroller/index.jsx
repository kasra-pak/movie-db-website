import React from "react";
import MovieCard from "./MovieCard";

export default function Scroller({ data }) {
  return (
    <div className='scroller flex touch-pan-x gap-4 overflow-y-visible overflow-x-scroll scroll-smooth px-1 pb-8 pt-3 xs:pt-6'>
      {data && data.map(item => <MovieCard key={item.id} data={item} />)}
    </div>
  );
}
