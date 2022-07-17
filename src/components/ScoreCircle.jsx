import React from "react";

export default function ScoreCircle({ score }) {
  let color;
  if (score >= 8) color = "#22c55e";
  else if (score >= 6) color = "#84cc16";
  else if (score >= 4) color = "#eab308";
  else color = "#ef4444";

  const styles = {
    background: `conic-gradient(${color} ${score * 10}%, rgb(31 41 55) 0 100%)`,
  };

  return (
    <>
      <div
        className='relative flex justify-center items-center border-2 border-secondary aspect-square rounded-full'
        style={styles}
      >
        <div className='absolute bg-secondary flex justify-center items-center w-[90%] aspect-square rounded-full border-2 border-secondary'>
          <p style={{ color }}>{score}</p>
        </div>
      </div>
    </>
  );
}
