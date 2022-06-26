import React from "react"
import LogoImg from "../images/navbar/logo.svg"

export default function Logo() {
  return (
    <>
      <div className="w-7 sm:w-8">
        <LogoImg  />
      </div>
      <p className="text-4xl font-semibold space">
        M<span className="hidden sm:inline">OVIE </span>DB
      </p>
    </>
  )
}