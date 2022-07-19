import React, { useState, useEffect } from "react";
import { getTrendingItems } from "../api/functions";
import { Link } from "react-router-dom";
import LoadingImg from "../images/loading/loading.svg";
import Carousel from "./Carousel";
import ScoreCircle from "./ScoreCircle";

export default function Trends() {
  const [loading, setLoading] = useState(true);
  const [trends, setTrends] = useState(null);

  useEffect(() => {
    getTrendingItems().then(items => {
      setTrends(items);
      setLoading(false);
    });
  }, []);

  if (loading)
    return (
      <section className='aspect-[16/9] flex justify-center items-center'>
        <LoadingImg className='fill-primary w-12 mx-auto' />
      </section>
    );

  return (
    trends && (
      <section>
        <Carousel className='max-h-[80vh]'>
          {trends.map(item => {
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
                    <div className='grid grid-cols-[1fr_auto] items-center my-2 xs:gap-2'>
                      <div className='flex flex-wrap h-5 gap-1 text-xs font-medium tracking-wider text-slate-200 opacity-90 overflow-hidden xs:text-sm xs:gap-2'>
                        {item.genres.map((genre, idx) => (
                          <p key={idx} className='capitalize'>{`${genre}${
                            idx === item.genres.length - 1 ? "" : " |"
                          }`}</p>
                        ))}
                      </div>
                      <div className='text-xs w-8 self-start xs:font-semibold xs:text-sm xs:w-12 xs:row-span-2 sm:w-16 sm:self-center'>
                        <ScoreCircle score={item.score.toFixed(1)} />
                      </div>
                      <p className='hidden max-w-md text-sm xs:line-clamp-2 xs:block sm:line-clamp-4'>
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
