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
          <LoadingImg className='w-12 fill-midnightExpress' />
        </main>
      )}
      {isSuccess && (
        <main className='bg-secondary text-gray-100'>
          <Intro data={data} />

          <span className='mx-4 my-6 block h-px max-w-6xl border-b border-dashed border-lostAtSee/[0.24] min-[900px]:mx-6 lg:hidden min-[1182px]:mx-auto'></span>

          <section className='mx-auto my-6 max-w-6xl p-4 text-midnightExpress sm:p-6'>
            <h2 className='mb-4 font-barlow text-lg font-bold capitalize min-[900px]:text-xl'>
              storyline
            </h2>
            <p>{data.overview}</p>
          </section>

          <section className='mx-auto my-6 max-w-6xl p-4 text-midnightExpress sm:p-6'>
            <h2 className='mb-4 font-barlow text-lg font-bold capitalize min-[900px]:text-xl'>
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
