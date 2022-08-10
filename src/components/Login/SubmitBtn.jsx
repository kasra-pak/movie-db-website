import React from "react";

function SubmitBtn({ submitStatus, setSubmitStatus }) {
  return (
    <div
      onClick={() => setSubmitStatus(false)}
      className={`absolute inset-0 -top-px bg-red-900 text-slate-100 font-semibold capitalize flex flex-col justify-center items-center gap-y-2 rounded-md transition-[transform,_opacity] origin-top shadow-lg cursor-pointer ${
        submitStatus ? "scale-[101%] opacity-100" : "scale-y-0 opacity-0"
      }`}
    >
      <p className='text-xl tracking-wider'>{submitStatus}</p>
      <p className='text-base opacity-90'>Click to try again</p>
    </div>
  );
}

export default SubmitBtn;
