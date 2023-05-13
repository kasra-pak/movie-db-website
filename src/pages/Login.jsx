import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth, logInUser } from "@/firebase";
import useControlledInput from "@/hooks/FormHooks";
import { validateEmail } from "@/validations/loginFormValidationRules";
import Header from "@/components/Header";

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
              <svg
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
                viewBox='0 0 32 32'
                className='mx-auto w-6 fill-[#1877F2]'
              >
                <path d='M26.67 4H5.33A1.34 1.34 0 0 0 4 5.33v21.34A1.34 1.34 0 0 0 5.33 28h11.49v-9.28H13.7v-3.63h3.12v-2.67c0-3.1 1.89-4.79 4.67-4.79.93 0 1.86 0 2.79.14V11h-1.91c-1.51 0-1.8.72-1.8 1.77v2.31h3.6l-.47 3.63h-3.13V28h6.1A1.34 1.34 0 0 0 28 26.67V5.33A1.34 1.34 0 0 0 26.67 4Z' />
              </svg>
            </button>

            <button
              href='#'
              className='flex-grow rounded-lg border border-lostAtSee/[.32] p-2.5 hover:border-current hover:bg-midnightExpress/[.08] hover:shadow-[0_0_0_1px_currentColor]'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
                viewBox='0 0 256 262'
                className='mx-auto w-6'
              >
                <path
                  fill='#4285F4'
                  d='M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027'
                />
                <path
                  fill='#34A853'
                  d='M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1'
                />
                <path
                  fill='#FBBC05'
                  d='M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782'
                />
                <path
                  fill='#EB4335'
                  d='M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251'
                />
              </svg>
            </button>

            <button
              href='#'
              className='flex-grow rounded-lg border border-lostAtSee/[.32] p-2.5 hover:border-current hover:bg-midnightExpress/[.08] hover:shadow-[0_0_0_1px_currentColor]'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                className='mx-auto w-6 fill-[#1DA1F2]'
                aria-hidden='true'
              >
                <path d='M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z' />
              </svg>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
