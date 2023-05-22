import React, { forwardRef } from "react";
import MovieCard from "./MovieCard";

const Scroller = forwardRef(({ data }, ref) => {
  return (
    <div
      ref={ref}
      className='scrollbar-hidden flex gap-4 overflow-x-scroll pb-8 pt-3 xs:pt-6'
    >
      {data &&
        data.map(item => (
          <MovieCard
            key={item.id}
            data={item}
            className='w-5/12 max-w-[270px] shrink-0 '
          />
        ))}
    </div>
  );
});

Scroller.displayName = "Scroller";

export default Scroller;
