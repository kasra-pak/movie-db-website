import React from "react";
import MovieCard from "./MovieCard";

export default function Scroller({ data }) {
  return (
    <div className='scrollbar-hidden flex gap-4 overflow-x-scroll px-1 pb-8 pt-3 xs:pt-6'>
      {data && data.map(item => <MovieCard key={item.id} data={item} />)}
    </div>
  );
}
