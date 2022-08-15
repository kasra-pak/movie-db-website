import React from "react";
import { Link } from "react-router-dom";
import { useSearchContext } from "../contexts/SearchContext";
import LoadingImg from "../images/loading/loading.svg";

export default function SearchResult() {
  const { results, searching } = useSearchContext();
  const jobs = {
    acting: "actor",
    directing: "director",
    writing: "writer",
  };

  return (
    <div>
      {searching ? (
        <LoadingImg className='fill-primary w-12 mx-auto' />
      ) : (
        results && (
          <div className='flex flex-col gap-3'>
            {results.map((item, idx) => (
              <Link
                to={`/detail/${item.media}/${item.id}`}
                className='bg-secondary min-h-[70px] flex items-center gap-3 rounded-md shadow-md overflow-hidden'
                key={idx}
              >
                <img
                  src={item.picture}
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
            ))}
            <Link
              to='/'
              className='bg-primary text-gray-100 font-bold tracking-wide text-center mt-2 px-4 py-2 rounded-md shadow-sm hover:bg-orange-500 hover:shadow-md'
            >
              Show all results
            </Link>
          </div>
        )
      )}
    </div>
  );
}
