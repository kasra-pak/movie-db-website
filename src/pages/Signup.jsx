import React, { useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth, registerUser, logInUser } from "@/firebase";
import useControlledInput from "@/hooks/FormHooks";
import {
  validateName,
  validateEmail,
  validatePassword,
  validateRePassword,
} from "@/validations/LoginFormValidationRules";
import Header from "@/components/Header";
import Facebook from "@/images/home/facebook.svg";
import Google from "@/images/home/google.svg";
import Twitter from "@/images/home/twitter.svg";

export default function Signup() {
  const [user] = useAuthState(auth);
  const [name, nameErrors, updateName] = useControlledInput(null, validateName);
  const [email, emailErrors, updateEmail] = useControlledInput(
    null,
    validateEmail
  );
  const [password, passwordErrors, updatePassword] = useControlledInput(
    null,
    validatePassword
  );

  const [rePassword, rePasswordErrors, updateRePassword] = useControlledInput(
    null,
    validateRePassword
  );
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.state);

  useEffect(() => {
    if (user) {
      if (location.state?.from) {
        navigate(location.state.from);
      }

      navigate(-1);
    }
  }, [user, navigate, location]);

  const handleSubmit = e => {
    e.preventDefault();

    registerUser(name, email, password).catch(err => {
      console.log(`signup error: ${err}`);
    });

    logInUser(name, email).catch(err => {
      console.log(`login error: ${err}`);
    });
  };

  return (
    <div
      className={`flex min-h-screen flex-col bg-overlay bg-cover bg-center bg-no-repeat`}
    >
      <Header />
      <main className='flex grow items-center justify-center p-4'>
        <div className='min-[900px]:text-left w-full max-w-[400px] overflow-hidden rounded-xl bg-white p-8 text-center text-nightRendezvous shadow-big'>
          <p className='mb-4 font-barlow text-2xl font-bold capitalize text-midnightExpress min-[600px]:text-[1.625rem] min-[900px]:text-3xl xl:text-[2rem]'>
            Get Started
          </p>

          <p className='text-sm'>
            Already have an account?
            <Link
              to='/login'
              className='font-semibold text-smashingPumpkins underline-offset-1 hover:underline'
            >
              {" "}
              Login
            </Link>
          </p>

          <form onSubmit={handleSubmit} className='my-8 flex flex-col gap-y-5'>
            <div className='rounded-lg bg-lostAtSee1'>
              <label htmlFor='fullname' className='sr-only text-lostAtSee'>
                Full Name
              </label>
              <input
                type='text'
                name='fullname'
                id='fullname'
                placeholder='Full Name'
                value={name || ""}
                onChange={updateName}
                className='w-full bg-transparent p-3.5 text-midnightExpress outline-none'
              />
            </div>
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

            <div className='rounded-lg bg-lostAtSee1'>
              <label
                htmlFor='confirmpassword'
                className='sr-only text-lostAtSee'
              >
                Password
              </label>
              <input
                type='password'
                name='confirmpassword'
                id='confirmpassword'
                placeholder='Confirm Password'
                value={rePassword || ""}
                onChange={updateRePassword}
                className='w-full bg-transparent p-3.5 text-midnightExpress outline-none'
              />
            </div>

            <button className='h-12 w-full rounded-lg bg-midnightExpress p-2 text-[15px] font-bold text-white'>
              Sign Up
            </button>

            <p className='text-xs text-nightRendezvous'>
              I agree to
              <Link
                to=''
                className='mx-1 inline-block text-midnightExpress underline decoration-nightRendezvous/40 hover:decoration-inherit'
              >
                Terms of Service
              </Link>
              and
              <Link
                to=''
                className='mx-1 inline-block text-midnightExpress underline decoration-nightRendezvous/40 hover:decoration-inherit'
              >
                Privacy Policy.
              </Link>
            </p>
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
