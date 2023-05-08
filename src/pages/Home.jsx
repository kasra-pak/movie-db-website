import React from "react";
import Trends from "@/components/Trends";
import Populars from "@/components/Populars";
import TopRatedItems from "@/components/TopRatedItems";
import Footer from "@/components/Shared/Footer";
import { useSearchContext } from "@/contexts/SearchContext";
import SearchResult from "@/components/SearchResult";
import Modal from "@/components/Modal";
import Header from "@/components/Header";

export default function Home() {
  const { searchTerm, searchBarOpen } = useSearchContext();
  return (
    <>
      <div className='relative'>
        <Header />
        <Trends />
      </div>
      <main>
        <Populars />
        <TopRatedItems />
        <Modal show={searchBarOpen && searchTerm}>
          <SearchResult />
        </Modal>
      </main>
      <Footer />
    </>
  );
}
