import React from "react";
import FadingLine from "../Shared/FadingLine";
FadingLine;

export default function InfoSection({ SectionHeader, children }) {
  return (
    <section className='p-4 text-gray-100'>
      <h2 className='text-xs-2xl font-semibold capitalize tracking-wider'>
        {SectionHeader}
      </h2>
      <FadingLine />
      {children}
    </section>
  );
}
