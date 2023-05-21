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
      <div>
        <LoadingImg className='mx-auto w-12 fill-midnightExpress' />
      </div>
    );
  }

  if (results) {
    return (
      <div className='scrollbar-hidden flex max-h-[70vh] flex-col gap-3 overflow-y-auto border-y border-lostAtSee/40 p-6'>
        {results.map((item, idx) => (
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
          className='mt-4 block w-full max-w-sm self-center rounded-lg bg-midnightExpress py-1.5 text-center text-sm font-bold text-white'
        >
          View all results for &quot;{searchTerm}&quot;
        </Link>
      </div>
    );
  }
}
