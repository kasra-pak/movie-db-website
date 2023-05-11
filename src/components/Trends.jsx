import React, { useEffect } from "react";
import { getTrendingItems } from "@/api/functions";
import useAsync from "@/hooks/AsyncHooks";
import Carousel from "@/components/Carousel";
import LoadingImg from "@/images/loading/loading.svg";

export default function Trends() {
  const { isLoading, isSuccess, run, data } = useAsync();

  useEffect(() => {
    run(getTrendingItems());
  }, [run]);

  if (isLoading)
    return (
      <section className='flex aspect-[16/9] items-center justify-center bg-black/40'>
        <LoadingImg className='mx-auto w-12 fill-primary' />
      </section>
    );

  return (
    isSuccess && (
      <section>
        <Carousel data={data} />
      </section>
    )
  );
}
