import React from "react";
import Navbar from "@/components/Navbar";
import Trends from "@/components/Trends";
import StickySearchBar from "@/components/SearchBar/StickySearchBar";
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
      {/* <Navbar /> */}
      <div className='relative'>
        <Header />
        <Trends />
      </div>
      <main>
        <StickySearchBar />
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
