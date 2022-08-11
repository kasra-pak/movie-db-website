import React from "react";
import LogoImg from "../../images/navbar/logo.svg";

export default function Logo() {
  return (
    <>
      <div className='w-5 sm:w-8'>
        <LogoImg />
      </div>
      <p className='text-2xl font-semibold space'>
        M<span className='hidden xs:inline'>OVIE </span>DB
      </p>
    </>
  );
}
