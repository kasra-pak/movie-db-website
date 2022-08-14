import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetail } from "../api/functions";

import Navbar from "../components/Navbar";
import Intro from "../components/Detail/Intro";
import InfoSection from "../components/Detail/InfoSection";
import Cast from "../components/Detail/Cast";

import LoadingImg from "../images/loading/loading.svg";
import Footer from "../components/Shared/Footer";

export default function Detail() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const { media, id } = useParams();

  useEffect(() => {
    getDetail(media, id).then(data => {
      setData(data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Navbar />
      {loading ? (
        <main className='min-h-[90vh] flex justify-center items-center'>
          <LoadingImg className='w-12 fill-primary' />
        </main>
      ) : (
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
