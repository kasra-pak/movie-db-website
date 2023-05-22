import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useAsync from "@/hooks/AsyncHooks";
import { searchItems } from "@/api/functions";

import Header from "@/components/Header";
import MovieCard from "@/components/Scroller/MovieCard";
import Footer from "@/components/Shared/Footer";
import LoadingImg from "@/images/loading/loading.svg";
import PersonCard from "@/components/PersonCard";

const Search = () => {
  const { isLoading, isSuccess, data, run } = useAsync();
  const { query } = useParams();

  useEffect(() => {
    run(searchItems(query.replaceAll("-", " ")));
  }, [run, query]);

  if (isLoading) {
    return (
      <>
        <Header />

        <main className='my-8 flex h-[85vh] items-center justify-center px-4 sm:px-6'>
          <LoadingImg className='w-10 text-midnightExpress' />
        </main>
      </>
    );
  }

  if (isSuccess && data) {
    return (
      <>
        <Header />

        <main className='mx-auto max-w-6xl p-4 sm:p-6'>
          <h1 className='my-10 text-2xl font-bold text-midnightExpress min-[600px]:text-[1.625rem] min-[900px]:text-3xl xl:text-[2rem]'>
            {`All Results for "${query.replaceAll("-", " ")}"`}
          </h1>

          <div className='grid gap-6 min-[400px]:grid-cols-2 sm:grid-cols-3 min-[900px]:grid-cols-4'>
            {data.map(item =>
              item.media === "person" ? (
                <PersonCard key={item.id} data={item} />
              ) : (
                <MovieCard key={item.id} data={item} />
              )
            )}
          </div>
        </main>

        <Footer />
      </>
    );
  }
};

export default Search;
