import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Navbar from "../components/Navbar";

import FacebookLogo from "../images/login/facebook.svg";
import TwitterLogo from "../images/login/twitter.svg";
import GoogleLogo from "../images/login/google.svg";
import LoginForm from "../components/Login/LoginForm";

export default function Login() {
  const [userHasAcc, setUserHasAcc] = useState("true");
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      // navigate("/", { replace: true });
      navigate(-1);
    }
  }, [user]);

  function toggleForm() {
    setUserHasAcc(prevState => !prevState);
  }

  return (
    <div className='flex min-h-screen flex-col'>
      <Navbar />
      <main className='flex grow items-center justify-center bg-secondary p-4'>
        <div className='overflow-hidden rounded-md bg-gradient-to-b from-primary p-4 pt-10 text-center md:flex md:bg-none md:p-0'>
          <div className='flex basis-1/2 flex-col  items-center justify-center gap-3 md:gap-10 md:bg-primary md:p-10'>
            <h1 className='text-4xl font-bold uppercase tracking-wider text-gray-100'>
              welcome!
            </h1>
            <p className='max-w-sm font-medium text-gray-100 md:max-w-lg'>
              In order to use the editing and rating capabilities of MDB, as
              well as get personal recommendations you will need to login to
              your account.
              <span className='hidden md:inline'>
                {" "}
                If you do not have an account, registering for an account is
                free and simple. Click below to get started.
              </span>
            </p>
            <button
              onClick={toggleForm}
              className='mt-4 hidden cursor-pointer self-center rounded-full bg-primary px-10 py-2 text-lg capitalize text-gray-100 shadow-sm hover:bg-orange-500 hover:shadow-md md:block md:border'
            >{`${userHasAcc ? "sign up" : "log in"}`}</button>
          </div>
          <div className='basis-1/2 flex-col justify-center md:flex md:bg-orange-50 md:p-10'>
            <h2 className='hidden text-xl font-bold capitalize tracking-wider text-primary md:block'>{`${
              userHasAcc ? "log in with your account" : "sing up for an account"
            }`}</h2>
            <div
              className={`${
                userHasAcc ? "hidden" : "flex"
              } my-8 justify-center gap-6 md:mb-2`}
            >
              <a href='#'>
                <FacebookLogo className='w-12 fill-gray-100 md:fill-primary' />
              </a>
              <a href='#'>
                <GoogleLogo className='w-12 fill-gray-100 md:fill-primary' />
              </a>
              <a href='#'>
                <TwitterLogo className='w-12 fill-gray-100 md:fill-primary' />
              </a>
            </div>
            <p className={`hidden ${userHasAcc ? "" : "md:block"}`}>
              or use your email for registration
            </p>
            <LoginForm userHasAcc={userHasAcc} setUserHasAcc={setUserHasAcc} />
          </div>
        </div>
      </main>
    </div>
  );
}
