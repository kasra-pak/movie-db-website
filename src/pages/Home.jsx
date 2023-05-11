import React from "react";
import Trends from "@/components/Trends";
import Populars from "@/components/Populars";
import TopRatedItems from "@/components/TopRatedItems";
import Footer from "@/components/Shared/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header blendOnTop />
      <Trends />
      <main>
        <Populars />
        <TopRatedItems />
      </main>
      <Footer />
    </>
  );
}
