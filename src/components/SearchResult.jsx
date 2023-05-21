import React from "react";
import { Link } from "react-router-dom";
import { useSearchContext } from "@/contexts/SearchContext";
import LoadingImg from "@/images/loading/loading.svg";

export default function SearchResult() {
  const { results, searching, searchTerm } = useSearchContext();

  const jobs = {
    acting: "actor",
    directing: "director",
    writing: "writer",
  };

  if (searching) {
    return (
      <div className='flex h-[518px] items-center p-10'>
        <LoadingImg className='mx-auto w-10 fill-midnightExpress' />
      </div>
    );
  }

  if (results) {
    return (
      <div className='scrollbar-hidden mx-auto flex max-h-[70vh] max-w-3xl flex-col gap-3 overflow-y-auto p-6'>
        {results.slice(0, 5).map((item, idx) => (
          <Link
            to={`/detail/${item.media}/${item.id}`}
            key={idx}
            className='flex gap-4 rounded-lg bg-white shadow-multi'
          >
            <div className='flex-shrink-0 overflow-hidden rounded-l-lg'>
              <img
                src={item.picture}
                alt={item.title}
                className='aspect-[2/3] w-12'
              />
            </div>

            <div className='flex flex-col justify-center gap-0.5 text-sm text-nightRendezvous'>
              <p className='line-clamp-1 font-semibold text-midnightExpress'>
                {item.title}
              </p>

              <p>
                {item.media === "person"
                  ? jobs[item.known_for.toLowerCase()]
                  : item.release}
              </p>
            </div>
          </Link>
        ))}
        <Link
          to='/'
          className='mt-4 block w-full max-w-max self-center rounded-lg bg-midnightExpress px-4 py-1.5 text-center text-sm font-bold text-white hover:bg-nightfall'
        >
          View all results for &quot;{searchTerm}&quot;
        </Link>
      </div>
    );
  }
}
