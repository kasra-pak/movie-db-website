import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getTrendingItems } from "../api/functions";
import useAsync from "../hooks/AsyncHooks";
import Carousel from "./Carousel";
import ScoreCircle from "./ScoreCircle";
import LoadingImg from "../images/loading/loading.svg";

export default function Trends() {
  const { isLoading, isSuccess, run, data } = useAsync();

  useEffect(() => {
    run(getTrendingItems());
  }, [run]);

  if (isLoading)
    return (
      <section className='flex aspect-[16/9] items-center justify-center'>
        <LoadingImg className='mx-auto w-12 fill-primary' />
      </section>
    );

  return (
    isSuccess && (
      <section>
        <Carousel className='max-h-[80vh]'>
          {data.map(item => {
            return (
              <div
                key={item.id}
                style={{ backgroundImage: `url(${item.backdrop})` }}
                className='bg-cover bg-center'
              >
                <div className='absolute inset-0 top-1/3 bg-gradient-to-t	from-gray-800'></div>

                <Link
                  className='absolute inset-0'
                  to={`/detail/${item.media}/${item.id}`}
                >
                  <div className='absolute top-1/2 w-full p-4 text-gray-100 sm:p-6'>
                    <p className='truncate text-sm-3xl font-bold capitalize tracking-wide sm:text-3xl'>
                      {item.title}
                    </p>
                    <div className='my-2 grid max-w-xl grid-cols-[1fr_auto] items-center  text-xs xs:gap-2 xs:text-sm sm:gap-3 sm:text-base'>
                      <div className='flex h-5 flex-wrap gap-1 overflow-hidden font-medium tracking-wider text-slate-200 opacity-90 xs:gap-2'>
                        {item.genres.map((genre, idx) => (
                          <p key={idx} className='capitalize'>{`${genre}${
                            idx === item.genres.length - 1 ? "" : " |"
                          }`}</p>
                        ))}
                      </div>
                      <div className='w-8 self-start xs:row-span-2 xs:w-12 xs:font-semibold sm:w-16 sm:self-center sm:text-lg'>
                        <ScoreCircle score={item.score.toFixed(1)} />
                      </div>
                      <p className='hidden max-w-md text-sm xs:block xs:line-clamp-2 sm:text-base sm:line-clamp-3'>
                        {item.overview}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </Carousel>
      </section>
    )
  );
}
