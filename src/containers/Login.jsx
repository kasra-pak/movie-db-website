import React, { useState } from "react"
import Navbar from "../components/Navbar"

import FacebookLogo from '../images/login/facebook.svg'
import TwitterLogo from '../images/login/twitter.svg'
import GoogleLogo from '../images/login/google.svg'

export default function Login() {
  const [userHasAcc, setUserHasAcc] = useState('true')

  function toggleForm() {
    setUserHasAcc(prevState => !prevState)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="bg-secondary grow flex justify-center items-center p-4">
        <div className="bg-gradient-to-b from-primary text-center rounded-md overflow-hidden p-4 pt-10 md:bg-none md:flex md:p-0">
          <div className="flex flex-col basis-1/2  justify-center items-center gap-3 md:bg-primary md:p-10 md:gap-10">
            <h1 className="text-gray-100 text-4xl font-bold tracking-wider uppercase">welcome!</h1>
            <p className="text-gray-100 max-w-sm md:max-w-lg">In order to use the editing and rating capabilities of MDB, as well as get personal recommendations you will need to login to your account.<span className="hidden md:inline"> If you do not have an account, registering for an account is free and simple. Click below to get started.</span></p>
            <button onClick={toggleForm} className="hidden text-gray-100 text-lg bg-primary self-center mt-4 px-10 py-2 rounded-full shadow-sm capitalize cursor-pointer hover:shadow-md hover:bg-orange-500 md:block md:border">{`${userHasAcc ? 'sign up' : 'log in'}`}</button>
          </div>
          <div className="md:flex flex-col justify-center basis-1/2 md:bg-orange-50 md:p-10">
            <h2 className="text-primary text-xl font-bold capitalize tracking-wider hidden md:block">{`${userHasAcc? 'log in with your account' : 'sing up for an account'}`}</h2>
            <div className={`${userHasAcc ? 'hidden' : 'flex'} justify-center gap-6 my-8 md:mb-2`}>
              <a href="#">
                <FacebookLogo className="fill-gray-100 w-12 md:fill-primary" />
              </a>
              <a href="#">
                <GoogleLogo className="fill-gray-100 w-12 md:fill-primary" />
              </a>
              <a href="#">
                <TwitterLogo className="fill-gray-100 w-12 md:fill-primary" />
              </a>
            </div>
            <p className={`hidden ${userHasAcc ? '' : 'md:block'}`}>or use your email for registration</p>
            <form className={`max-w-md flex flex-col gap-4 my-6 mx-auto md:w-full ${userHasAcc ? '' : 'md:mt-4'}`}>
              <label htmlFor="name" className="sr-only">full name</label>
              <input id="name" type="text" placeholder="Full Name" className={`${userHasAcc ? 'hidden' : 'block'} bg-orange-100 text-lg rounded-sm px-4 py-2 shadow-sm`} />
              <label htmlFor="email" className="sr-only">email address</label>
              <input id="email" type="email" placeholder="Email" className="bg-orange-100 text-lg rounded-sm px-4 py-2 shadow-sm" />
              <label htmlFor="pass" className="sr-only">password</label>
              <input id="pass" type="password" placeholder="Password" className="bg-orange-100 text-lg rounded-sm px-4 py-2 shadow-sm" />
              <label htmlFor="re-pass" className="sr-only">repeat password</label>
              <input id="re-pass" type="password" placeholder="Repeat Password" className={`${userHasAcc ? 'hidden' : 'block'} bg-orange-100 text-lg rounded-sm px-4 py-2 shadow-sm`} />
              <button type="button" onClick={toggleForm} className="self-center text-orange-100 underline md:hidden">Don't have an account?</button>
              <input type="button" className="text-gray-100 text-lg bg-primary self-center mt-4 px-10 py-2 rounded-full shadow-sm capitalize cursor-pointer hover:shadow-md hover:bg-orange-500" value={`${userHasAcc ? 'log in' : 'sign up'}`} />
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}