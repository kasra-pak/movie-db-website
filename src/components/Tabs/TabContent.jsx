import React from "react";
import { Link } from "react-router-dom";

function TabContent({ data, viewMode }) {
  const jobs = {
    acting: "actor",
    directing: "director",
    writing: "writer",
  };

  const itemsList = data.map(item => (
    <Link
      to={`/detail/${item.media}/${item.id}`}
      className='flex min-h-[70px] items-center gap-3 overflow-hidden rounded-md bg-secondary shadow-md'
      key={item.id}
    >
      <img
        src={item.poster}
        alt={item.title}
        className='aspect-[8/10] h-20 object-cover'
      />
      <div className='w-9/12 pr-3 capitalize text-gray-100'>
        <h3 className='w-full truncate font-semibold tracking-wider'>
          {item.title}
        </h3>
        <p className='text-slate-400'>
          {item.media === "person"
            ? jobs[item.known_for.toLowerCase()]
            : item.release}
        </p>
      </div>
    </Link>
  ));

  return (
    <div
      className={`grid gap-4 ${
        viewMode === "grid"
          ? "grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]"
          : "grid-cols-1"
      }`}
    >
      {itemsList}
    </div>
  );
}

export default TabContent;
