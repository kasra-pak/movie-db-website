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
      className='bg-secondary min-h-[70px] flex items-center gap-3 rounded-md shadow-md overflow-hidden'
      key={item.id}
    >
      <img
        src={item.poster}
        alt={item.title}
        className='h-20 aspect-[8/10] object-cover'
      />
      <div className='text-gray-100 capitalize pr-3 w-9/12'>
        <h3 className='font-semibold tracking-wider w-full truncate'>
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
