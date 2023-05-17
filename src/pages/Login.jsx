import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth, logInUser } from "@/firebase";
import useControlledInput from "@/hooks/FormHooks";
import { validateEmail } from "@/validations/LoginFormValidationRules";
import Header from "@/components/Header";
import Facebook from "@/images/home/facebook.svg";
import Google from "@/images/home/google.svg";
import Twitter from "@/images/home/twitter.svg";

export default function Login() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [email, emailErrors, updateEmail] = useControlledInput(
    null,
    validateEmail
  );
  const [password, passwordErrors, updatePassword] = useControlledInput(null);
  const [submitStatus, setSubmitStatus] = useState("idle");

  useEffect(() => {
    if (user) {
      // navigate("/", { replace: true });
      navigate(-1);
    }
  }, [user, navigate]);

  const handleSubmit = e => {
    e.preventDefault();
    logInUser(email, password).catch(err => {
      setSubmitStatus(`error: ${err}`);
    });
  };

  return (
    <div
      className={`flex min-h-screen flex-col bg-overlay bg-cover bg-center bg-no-repeat`}
    >
      <Header />
      <main className='flex grow items-center justify-center p-4'>
        <div className='w-full max-w-[400px] overflow-hidden rounded-xl bg-white p-8 text-center text-nightRendezvous shadow-big'>
          <p className='mb-4 font-barlow text-2xl font-bold capitalize text-midnightExpress'>
            login
          </p>

          <p className='text-sm'>
            Don&apos;t have an account?
            <Link
              to='/signup'
              className='font-semibold text-smashingPumpkins underline-offset-1 hover:underline'
            >
              {" "}
              Get started
            </Link>
          </p>

          <form onSubmit={handleSubmit} className='my-8 flex flex-col gap-y-5'>
            <div className='rounded-lg bg-lostAtSee1'>
              <label htmlFor='email' className='sr-only text-lostAtSee'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Email address'
                value={email || ""}
                onChange={updateEmail}
                className='w-full bg-transparent p-3.5 text-midnightExpress outline-none'
              />
            </div>

            <div className='rounded-lg bg-lostAtSee1'>
              <label htmlFor='password' className='sr-only text-lostAtSee'>
                Password
              </label>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='Password'
                value={password || ""}
                onChange={updatePassword}
                className='w-full bg-transparent p-3.5 text-midnightExpress outline-none'
              />
            </div>

            <Link
              to=''
              className='self-end text-sm text-nightRendezvous underline decoration-nightRendezvous/40 hover:decoration-inherit'
            >
              Forgot password?
            </Link>

            <button className='h-12 w-full rounded-lg bg-midnightExpress p-2 text-[15px] font-bold text-white'>
              Login
            </button>
          </form>

          <span className='mb-8 flex items-center gap-2 text-sm text-lostAtSee'>
            <span className='h-px w-full bg-lostAtSee/[.24]'></span>
            <p className='shrink-0'>or continue with</p>
            <span className='h-px w-full bg-lostAtSee/[.24]'></span>
          </span>

          <div className='flex gap-4 text-midnightExpress'>
            <button
              href='#'
              className='flex-grow rounded-lg border border-lostAtSee/[.32] p-2.5 hover:border-current hover:bg-midnightExpress/[.08] hover:shadow-[0_0_0_1px_currentColor]'
            >
              <Facebook className='mx-auto w-6 fill-[#1877F2]' />
            </button>

            <button
              href='#'
              className='flex-grow rounded-lg border border-lostAtSee/[.32] p-2.5 hover:border-current hover:bg-midnightExpress/[.08] hover:shadow-[0_0_0_1px_currentColor]'
            >
              <Google className='mx-auto w-6' />
            </button>

            <button
              href='#'
              className='flex-grow rounded-lg border border-lostAtSee/[.32] p-2.5 hover:border-current hover:bg-midnightExpress/[.08] hover:shadow-[0_0_0_1px_currentColor]'
            >
              <Twitter className='mx-auto w-6 fill-[#1DA1F2]' />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
