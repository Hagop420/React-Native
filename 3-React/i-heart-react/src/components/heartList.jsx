import React from 'react';
import CandyHeart from './CandyHearts'


const messages = [
   'cool cud',
   'me my <3',
   'you are bear',
   'team bear',
   'time hug',
   'fang',
   'bog love',
   'me have love',
   'all hover',
   'sweat poo',
   'u hack',
   'stank love',
   'heart me',
   'wink bear',
   'bear bear',
   'be my bear',
   'yank o way',
   'mage love',
   'oy',
   'in a fan'
];




const heartList = () => {
   return (

      <div className='hearts-container'>
         {/* msg's value is the same as the callback paramater */}
         {messages.map((mess , index) => (
            <CandyHeart key={index} msg={mess} />
         ))}

         {/* Every time you are a map method you need to add a key prop with an index keyword in the callback parameter*/}
      
      </div>

   )
}
export default heartList