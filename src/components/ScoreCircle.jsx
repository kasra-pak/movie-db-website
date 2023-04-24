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
        className='relative flex aspect-square items-center justify-center rounded-full border-2 border-secondary'
        style={styles}
      >
        <div className='absolute flex aspect-square w-[90%] items-center justify-center rounded-full border-2 border-secondary bg-secondary'>
          <p style={{ color }}>{score}</p>
        </div>
      </div>
    </>
  );
}
