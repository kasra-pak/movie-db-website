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
        <LoadingImg className='mx-auto w-12 fill-primary' />
      ) : (
        results && (
          <div className='flex flex-col gap-3'>
            {results.map((item, idx) => (
              <Link
                to={`/detail/${item.media}/${item.id}`}
                className='flex min-h-[70px] items-center gap-3 overflow-hidden rounded-md bg-secondary shadow-md'
                key={idx}
              >
                <img
                  src={item.picture}
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
            ))}
            <Link
              to='/'
              className='mt-2 rounded-md bg-primary px-4 py-2 text-center font-bold tracking-wide text-gray-100 shadow-sm hover:bg-orange-500 hover:shadow-md'
            >
              Show all results
            </Link>
          </div>
        )
      )}
    </div>
  );
}
