import React, { useState } from "react";
import { registerUser, logInUser } from "../../firebase";
import useControledInput from "../../hooks/FormHooks";
import FormInput from "./FormInput";
import {
  validateName,
  validateEmail,
  validatePass,
} from "../../validations/LoginFormValidationRules";
import SubmitBtn from "./SubmitBtn";

import Spinner from "../../images/loading/spinner.svg";

function LoginForm({ userHasAcc, setUserHasAcc }) {
  const [name, nameErrors, updateName] = useControledInput(null, validateName);
  const [email, emailErrors, updateEmail] = useControledInput(
    null,
    validateEmail
  );
  const [pass, passErrors, updatePass] = useControledInput(null, validatePass);
  const [rePass, rePassErrors, updateRePass] = useControledInput(null);
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  function toggleForm() {
    setUserHasAcc(prevState => !prevState);
  }

  function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    userHasAcc
      ? logInUser(email, pass).catch(err => {
          setSubmitStatus(err);
          setLoading(false);
        })
      : registerUser(name, email, pass).catch(err => {
          setSubmitStatus(err);
          setLoading(false);
        });
  }
  // console.log(nameErrors, emailErrors, passErrors, rePassErrors);

  return (
    <form
      onSubmit={handleSubmit}
      className={`max-w-md flex flex-col gap-4 my-6 mx-auto md:w-full ${
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
          value={pass}
          handleChange={updatePass}
          errorMessage={passErrors}
        />
        {!userHasAcc && (
          <FormInput
            id={"passwordRepeat"}
            placeholder='Repeat Password'
            type='password'
            value={rePass}
            handleChange={updateRePass}
            disabled={!pass || passErrors}
            errorMessage={pass !== rePass ? ["Passwords Do not match"] : null}
          />
        )}

        <SubmitBtn
          submitStatus={submitStatus}
          setSubmitStatus={setSubmitStatus}
        />
      </div>
      <button
        type='button'
        onClick={toggleForm}
        className='self-center text-orange-100 underline md:hidden'
      >
        {userHasAcc ? "Don't have an account?" : "Have an account?"}
      </button>
      <button
        type='submit'
        disabled={nameErrors || emailErrors || passErrors || rePassErrors}
        className='text-gray-100 text-lg bg-primary self-center min-w-[130px] min-h-[50px] mt-4 px-10 py-2 rounded-full shadow-sm capitalize cursor-pointer hover:shadow-md hover:bg-orange-500'
      >
        {loading ? (
          <Spinner className='fill-secondary w-8 mx-auto animate-spin' />
        ) : (
          `${userHasAcc ? "log in" : "sign up"}`
        )}
      </button>
    </form>
  );
}

export default LoginForm;
