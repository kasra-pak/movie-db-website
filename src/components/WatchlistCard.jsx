import React from "react";

const WatchlistCard = ({ data }) => {
  return (
    <div
      key={data.id}
      className='flex items-start gap-5 rounded-lg border border-lostAtSee/[0.24] p-5'
    >
      <div className='overflow-hidden rounded-lg'>
        <img src={data.poster} alt={data.title} className='w-20' />
      </div>

      <p>
        <span className='font-semibold text-midnightExpress'>{data.title}</span>
        <br />
        <span className='text-sm text-nightRendezvous'>{data.media}</span>
      </p>
    </div>
  );
};

export default WatchlistCard;
