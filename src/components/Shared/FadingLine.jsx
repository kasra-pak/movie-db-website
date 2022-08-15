import React from "react";

export default function FadingLine({ className }) {
  return (
    <div
      className={`bg-gradient-to-r from-orange-600 to-transparent h-1 w-full my-2 rounded-l-sm xs:mb-4 ${className}`}
    ></div>
  );
}
