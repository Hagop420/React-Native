import React, { useState} from 'react';
import HeartSVG from './HeartSvg';


const colors = [
   '#b8e3f5',
   '#f5b8e4',
   '#b8f5b9',
   '#f5f3b8',
   '#e3b8f5',
   '#fffcf2'
];



const CandyHeart = astetic => {
   const randomCallClr=colors[Math.floor(Math.random() *colors.length)]

   const [color,setColor] = useState(colors[0]);

console.log(color);
useState(() => {
      const interval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        setColor(colors[randomIndex]);
      }, 1000);
  
      return () => clearInterval(interval);
   },[]); 
   
   return (
      <div className='heart'>
         <div className='heart-img'>
            <HeartSVG col={randomCallClr} /> 
           
         </div>
         <p className="heart-message">{ astetic.msg}</p>
      </div>
   )
}

export default CandyHeart