import React from 'react';


// header
const loveU = 'React is a fun and amazing way to compile all your knowledge into one including'
const htmlCssandJs = 'HTML,CSS,AND JS'


const Header = head => {
   // css
   const styles = {
     container: {
       textShadow: '1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue' ,
       transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
     }
   }
   // 
   return <div style={{textAlign:'center'}}>
 <h2 className='App-header' style={Object.assign({}, styles.container, {fontFamily:'cursive, serif'})}>❤️ React hearts ❤️</h2>
     <p>
       <em>{loveU}</em>
       <strong> <em>{htmlCssandJs}</em> </strong>
     </p>
   </div>
}


export default Header
 