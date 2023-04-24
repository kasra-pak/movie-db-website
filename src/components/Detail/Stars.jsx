import React from "react";
import StarImg from "../../images/home/star.svg";

export default function Stars({ score }) {
  const stars = [];
  const decimal = score % 1;
  let decimal_flag = true;

  for (let i = 1; i <= 10; i++) {
    if (i < score) {
      stars.push(<StarImg key={i} className='w-2.5 fill-primary' />);
    } else if (decimal_flag) {
      stars.push(<StarImg key={i} className='w-2.5 fill-slate-500' />);
      decimal_flag = false;
    } else {
      stars.push(<StarImg key={i} className='w-2.5 fill-slate-500' />);
    }
  }

  return (
    <div className='flex w-full flex-wrap justify-between'>
      <div className='flex gap-0.5'>{stars}</div>
      <p className='w-max text-xs font-semibold tracking-wider text-slate-300'>
        {score} / 10
      </p>
    </div>
  );
}
