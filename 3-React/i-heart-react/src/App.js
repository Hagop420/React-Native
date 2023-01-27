import React from 'react';
import Header from './components/header'; 
import HeartListing from './components/heartList';
import HeartsColored from './components/CandyHearts';
// import Heart from './components/heartImg'; 
import './App.css';

document.body.style.background='limegreen'


// main function here below
function App(props) {

 
  
  return (
    
    <>
     <Header />
      <HeartListing />
      <HeartsColored />
   
    </>
  );

}

export default App;
