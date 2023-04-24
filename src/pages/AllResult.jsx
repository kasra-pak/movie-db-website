import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useAsync from "../hooks/AsyncHooks";
import { getPopularItems, getTopRatedItems } from "../api/functions";

import Navbar from "../components/Navbar";
import Footer from "../components/Shared/Footer";
import FadingLine from "../components/Shared/FadingLine";
import SlideButton from "../components/Shared/SlideButton";
import LoadingImg from "../images/loading/loading.svg";

function AllResults() {
  const { isLoading, isSuccess, data, run } = useAsync();
  const { resultsFor, media } = useParams();
  const [mediaFilter, setMediaFilter] = useState(media);

  useEffect(() => {
    if (resultsFor === "top") {
      run(getTopRatedItems(mediaFilter));
    } else if (resultsFor === "popular") {
      run(getPopularItems(mediaFilter));
    }
  }, [mediaFilter, resultsFor, run]);

  let itemsList;

  if (isLoading) {
    itemsList = (
      <div className='bg-secondary p-4'>
        <LoadingImg className='mx-auto w-10 fill-primary' />
      </div>
    );
  }

  if (isSuccess) {
    itemsList = data.map(item => (
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
          <h3 className='w-full truncate font-semibold tracking-wider sm:text-lg'>
            {item.title}
          </h3>
          <p className='text-slate-400'>{item.release}</p>
        </div>
      </Link>
    ));
  }

  return (
    <>
      <Navbar />

      <main className='p-4 sm:p-6'>
        <div className='mx-auto mb-2 flex max-w-2xl items-baseline justify-between xs:mb-3'>
          <h1 className='text-xl font-semibold capitalize tracking-wide text-slate-100 xs:text-2xl'>
            {resultsFor === "top" && "top rated"}
            {resultsFor === "popular" && "popular"}
            {resultsFor === "search" && `all results for "searchTerm"`}
          </h1>
          <SlideButton
            id='media_slider'
            leftText='movie'
            rightText='tv'
            activeSide={mediaFilter}
            toggle={setMediaFilter}
          />
        </div>
        <FadingLine className='mx-auto max-w-2xl' />

        <div className='mx-auto mt-5 flex max-w-lg flex-col gap-3 rounded-md bg-primary p-3 shadow-inner'>
          {itemsList}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default AllResults;
