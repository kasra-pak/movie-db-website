import React from "react"
import FadingLine from "../FadingLine"
FadingLine

export default function InfoSection({ SectionHeader, children }) {
  return (
    <section className="text-gray-100 p-4">
      <h2 className="text-xs-2xl font-semibold tracking-wider capitalize">{SectionHeader}</h2>
      <FadingLine />
      {children}
    </section>
  )
}