import React from "react";

function SubmitResultAlert({ submitStatus, setSubmitStatus }) {
  return (
    <div
      onClick={() => setSubmitStatus("idle")}
      className={`absolute inset-0 -top-px flex origin-top cursor-pointer flex-col items-center justify-center gap-y-2 rounded-md bg-red-900 font-semibold capitalize text-slate-100 shadow-lg transition-[transform,_opacity] ${
        submitStatus.startsWith("error: ")
          ? "scale-[101%] opacity-100"
          : "scale-y-0 opacity-0"
      }`}
    >
      <p className='text-xl tracking-wider'>
        {submitStatus.replace("error: ", "")}
      </p>
      <p className='text-base opacity-90'>Click to try again</p>
    </div>
  );
}

export default SubmitResultAlert;
