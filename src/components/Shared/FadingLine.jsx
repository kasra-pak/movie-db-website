import React from "react";

export default function FadingLine({ className }) {
  return (
    <div
      className={`my-2 h-1 w-full rounded-l-sm bg-gradient-to-r from-orange-600 to-transparent xs:mb-4 ${className}`}
    ></div>
  );
}
