import React, { useState } from "react";
import { registerUser, logInUser } from "@/firebase";
import useControledInput from "@/hooks/FormHooks";
import FormInput from "./FormInput";
import {
  validateName,
  validateEmail,
  validatePassword,
  validateRePassword,
} from "@/validations/LoginFormValidationRules";
import SubmitResultAlert from "./SubmitResultAlert";

import Spinner from "@/images/loading/spinner.svg";

function LoginForm({ userHasAcc, setUserHasAcc }) {
  const [name, nameErrors, updateName] = useControledInput(null, validateName);
  const [email, emailErrors, updateEmail] = useControledInput(
    null,
    validateEmail
  );
  const [password, passwordErrors, updatePassword] = useControledInput(
    null,
    validatePassword
  );
  const [rePassword, rePasswordErrors, updateRePassword] = useControledInput(
    null,
    repeatedPassword => validateRePassword(password, repeatedPassword)
  );
  const [submitStatus, setSubmitStatus] = useState("idle");

  function toggleForm() {
    setUserHasAcc(prevState => !prevState);
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitStatus("submitting");
    userHasAcc
      ? logInUser(email, password).catch(err => {
          setSubmitStatus(`error: ${err}`);
        })
      : registerUser(name, email, password).catch(err => {
          setSubmitStatus(`error: ${err}`);
        });
  }

  // console.log(
  //   Boolean(nameErrors || emailErrors || passwordErrors || rePasswordErrors)
  // );

  return (
    <form
      onSubmit={handleSubmit}
      className={`mx-auto my-6 flex max-w-md flex-col gap-4 md:w-full ${
        userHasAcc ? "" : "md:mt-4"
      }`}
    >
      <div className='relative flex flex-col gap-5'>
        {!userHasAcc && (
          <FormInput
            id={"name"}
            placeholder='Full Name'
            type='text'
            value={name}
            handleChange={updateName}
            errorMessage={nameErrors}
          />
        )}
        <FormInput
          id={"email"}
          placeholder='Email'
          type='email'
          value={email}
          handleChange={updateEmail}
          errorMessage={emailErrors}
        />
        <FormInput
          id={"password"}
          placeholder='Password'
          type='password'
          value={password}
          handleChange={updatePassword}
          errorMessage={passwordErrors}
        />
        {!userHasAcc && (
          <FormInput
            id={"passwordRepeat"}
            placeholder='Repeat Password'
            type='password'
            value={rePassword}
            handleChange={updateRePassword}
            disabled={!password || passwordErrors}
            errorMessage={rePasswordErrors}
          />
        )}

        <SubmitResultAlert
          submitStatus={submitStatus}
          setSubmitStatus={setSubmitStatus}
        />
      </div>
      <button
        type='button'
        onClick={toggleForm}
        className='self-center font-medium text-orange-100 underline md:hidden'
      >
        {userHasAcc ? "Don't have an account?" : "Have an account?"}
      </button>
      <button
        type='submit'
        disabled={Boolean(
          nameErrors ||
            emailErrors ||
            passwordErrors ||
            rePasswordErrors ||
            submitStatus.startsWith("error: ")
        )}
        className='mt-4 min-h-[50px] min-w-[130px] cursor-pointer self-center rounded-full bg-primary px-10 py-2 text-lg font-semibold capitalize text-gray-100 shadow-sm hover:bg-orange-500 hover:shadow-md'
      >
        {submitStatus === "submitting" ? (
          <Spinner className='mx-auto w-8 animate-spin fill-secondary' />
        ) : (
          `${userHasAcc ? "log in" : "sign up"}`
        )}
      </button>
    </form>
  );
}

export default LoginForm;
