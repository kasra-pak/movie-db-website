import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetail } from "../api/functions";
import useAsync from "../hooks/AsyncHooks";

import Navbar from "../components/Navbar";
import Intro from "../components/Detail/Intro";
import InfoSection from "../components/Detail/InfoSection";
import Cast from "../components/Detail/Cast";
import Footer from "../components/Shared/Footer";
import LoadingImg from "../images/loading/loading.svg";

export default function Detail() {
  const { isLoading, isSuccess, data, run } = useAsync();
  const { media, id } = useParams();

  useEffect(() => {
    run(getDetail(media, id));
  }, [id, media, run]);

  return (
    <>
      <Navbar />
      {isLoading && (
        <main className='flex min-h-[90vh] items-center justify-center'>
          <LoadingImg className='w-12 fill-primary' />
        </main>
      )}
      {isSuccess && (
        <main className='bg-secondary text-gray-100'>
          <Intro media={media} data={data} />

          <InfoSection SectionHeader='Storyline'>
            <p>{data.overview}</p>
          </InfoSection>

          <InfoSection SectionHeader={"cast"}>
            <Cast {...{ media, id }} />
          </InfoSection>
        </main>
      )}
      <Footer />
    </>
  );
}
