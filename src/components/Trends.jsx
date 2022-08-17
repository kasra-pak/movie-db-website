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
      <section className='aspect-[16/9] flex justify-center items-center'>
        <LoadingImg className='fill-primary w-12 mx-auto' />
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
                  <div className='absolute top-1/2 w-full text-gray-100 p-4 sm:p-6'>
                    <p className='font-bold tracking-wide text-sm-3xl capitalize truncate sm:text-3xl'>
                      {item.title}
                    </p>
                    <div className='grid grid-cols-[1fr_auto] items-center max-w-xl text-xs  my-2 xs:text-sm xs:gap-2 sm:text-base sm:gap-3'>
                      <div className='flex flex-wrap h-5 gap-1 font-medium tracking-wider text-slate-200 opacity-90 overflow-hidden xs:gap-2'>
                        {item.genres.map((genre, idx) => (
                          <p key={idx} className='capitalize'>{`${genre}${
                            idx === item.genres.length - 1 ? "" : " |"
                          }`}</p>
                        ))}
                      </div>
                      <div className='w-8 self-start xs:font-semibold xs:w-12 xs:row-span-2 sm:w-16 sm:self-center sm:text-lg'>
                        <ScoreCircle score={item.score.toFixed(1)} />
                      </div>
                      <p className='hidden max-w-md text-sm xs:line-clamp-2 xs:block sm:text-base sm:line-clamp-3'>
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
