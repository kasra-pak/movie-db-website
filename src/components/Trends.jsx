import React, { useState, useEffect } from "react";
import { getTrendingItems } from "../api/functions";
import ImageSlider from "../components/ImageSlider";
import LoadingImg from "../images/loading/loading.svg";
import Carousel from "./Carousel";

export default function Trends() {
  const [loading, setLoading] = useState(true);
  const [trends, setTrends] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    getTrendingItems().then(items => {
      setTrends(items);
      setLoading(false);
    });
  }, []);

  if (loading)
    return (
      <section className='aspect-[9/5] flex justify-center items-center'>
        <LoadingImg className='fill-primary w-12 mx-auto' />
      </section>
    );

  return (
    true && (
      <section>
        {/* <ImageSlider
        data={trends}
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
      /> */}
        <Carousel>
          <div>slide - 1</div>
          <div>slide - 2</div>
          <div>slide - 3</div>
          <div>slide - 4</div>
          <button>next</button>
          <button>prev</button>
        </Carousel>
      </section>
    )
  );
}
