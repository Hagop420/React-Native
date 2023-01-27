import React from 'react';
import {Component} from 'react'
import heart_1 from '../svg/heart.svg'
// heart img component
// const Heart = props => {
//    return <div>
    
//      <div className='heart'>
//      <img className='heart-img' src={heart_1} alt='heart' />
//      <p className='heart-message'>{props}</p>
//    </div>
//    </div>
// }



class Heart extends Component{
  render() {
    return (
      <div>
    
     <div className='heart'>
     <img className='heart-img' src={heart_1} alt='heart' />
     <p className='heart-message'>{this.props.msg}</p>
   </div>
   </div>
    )
  }
}


export default Heart
