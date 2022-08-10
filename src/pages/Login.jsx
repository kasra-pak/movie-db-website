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
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <main className='bg-secondary grow flex justify-center items-center p-4'>
        <div className='bg-gradient-to-b from-primary text-center rounded-md overflow-hidden p-4 pt-10 md:bg-none md:flex md:p-0'>
          <div className='flex flex-col basis-1/2  justify-center items-center gap-3 md:bg-primary md:p-10 md:gap-10'>
            <h1 className='text-gray-100 text-4xl font-bold tracking-wider uppercase'>
              welcome!
            </h1>
            <p className='text-gray-100 max-w-sm md:max-w-lg'>
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
              className='hidden text-gray-100 text-lg bg-primary self-center mt-4 px-10 py-2 rounded-full shadow-sm capitalize cursor-pointer hover:shadow-md hover:bg-orange-500 md:block md:border'
            >{`${userHasAcc ? "sign up" : "log in"}`}</button>
          </div>
          <div className='md:flex flex-col justify-center basis-1/2 md:bg-orange-50 md:p-10'>
            <h2 className='text-primary text-xl font-bold capitalize tracking-wider hidden md:block'>{`${
              userHasAcc ? "log in with your account" : "sing up for an account"
            }`}</h2>
            <div
              className={`${
                userHasAcc ? "hidden" : "flex"
              } justify-center gap-6 my-8 md:mb-2`}
            >
              <a href='#'>
                <FacebookLogo className='fill-gray-100 w-12 md:fill-primary' />
              </a>
              <a href='#'>
                <GoogleLogo className='fill-gray-100 w-12 md:fill-primary' />
              </a>
              <a href='#'>
                <TwitterLogo className='fill-gray-100 w-12 md:fill-primary' />
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
