import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetail } from "@/api/functions";
import useAsync from "@/hooks/AsyncHooks";

import Header from "@/components/Header";
import Intro from "@/components/Detail/Intro";
import Cast from "@/components/Detail/Cast";
import Footer from "@/components/Shared/Footer";
import LoadingImg from "@/images/loading/loading.svg";

export default function Detail() {
  const { isLoading, isSuccess, data, run } = useAsync();
  const { media, id } = useParams();

  useEffect(() => {
    run(getDetail(media, id));
  }, [id, media, run]);

  return (
    <>
      <Header blendOnTop />
      {isLoading && (
        <main className='flex min-h-[90vh] items-center justify-center'>
          <LoadingImg className='w-12 fill-primary' />
        </main>
      )}
      {isSuccess && (
        <main className='bg-secondary text-gray-100'>
          <Intro data={data} />

          <span className='mx-4 my-6 block h-px border-b border-dashed border-lostAtSee/[0.24]'></span>

          <section className='my-6 p-4 text-midnightExpress'>
            <h2 className='mb-4 font-barlow text-xl font-bold capitalize'>
              storyline
            </h2>
            <p>{data.overview}</p>
          </section>

          <section className='my-6 p-4 text-midnightExpress'>
            <h2 className='mb-4 font-barlow text-xl font-bold capitalize'>
              cast
            </h2>
            <Cast {...{ media, id }} />
          </section>
        </main>
      )}
      <Footer />
    </>
  );
}
