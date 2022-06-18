import React, { useState } from 'react'

export default function ScoreCircle({ score }) {
  // const [color, setColor] = useState()

  // const style = `background: conic-gradient(green 50%, transparent 0 100%)`

  let color;
  if (score >= 8)
    color = 'bg-green-500'
  else if (score >= 6 )
    color = 'bg-lime-500'
  else if (score >= 4 )
    color = 'bg-orange-500'
  else 
    color = 'bg-red-500'

  return (
    <div className={`flex text-xs ${color} justify-center items-center w-6 aspect-square rounded-full py-px px-2 xs:text-base xs:px-4`}>
      {/* <div className='wtf rounded-full absolute inset-0 '></div> */}
      {score}
    </div>
  )
}

// pre class: `flex text-xs ${color} justify-center items-center w-6 rounded-md py-px px-2 xs:text-base xs:px-4`