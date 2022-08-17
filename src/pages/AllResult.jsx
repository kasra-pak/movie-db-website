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
        <LoadingImg className='w-10 mx-auto fill-primary' />
      </div>
    );
  }

  if (isSuccess) {
    itemsList = data.map(item => (
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
          <h3 className='font-semibold tracking-wider w-full truncate sm:text-lg'>
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
        <div className='flex justify-between items-baseline max-w-2xl mx-auto mb-2 xs:mb-3'>
          <h1 className='text-xl text-slate-100 font-semibold tracking-wide capitalize xs:text-2xl'>
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
        <FadingLine className='max-w-2xl mx-auto' />

        <div className='bg-primary flex flex-col gap-3 max-w-lg mx-auto mt-5 p-3 rounded-md shadow-inner'>
          {itemsList}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default AllResults;
