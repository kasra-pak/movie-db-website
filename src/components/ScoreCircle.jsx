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
        className='hidden relative justify-center items-center w-11 border-2 border-secondary aspect-square rounded-full xs:flex'
        style={styles}
      >
        <div className='absolute w-9 bg-secondary aspect-square rounded-full border-2 border-secondary flex justify-center items-center'>
          <p
            className='text-text-xs font-semibold xs:text-sm'
            style={{ color }}
          >
            {score}
          </p>
        </div>
      </div>

      <div
        className='text-xs rounded-full p-1 xs:hidden'
        style={{ backgroundColor: color }}
      >
        {score}
      </div>
    </>
  );
}
