
// import React, { useState } from 'react';
// import useScript from 'react-script-hook';
// // import ScriptTag from 'react-script-tag';
// //  import './VIdeoStart'
// import './Video.css'
// const Start=()=>{
//   const[shouldLoadStripe,setshouldLoadStripe]=useState(true);
//   const [loading, error] = useScript({ src: 'src\component\videoupload\VIdeoStart.js' });
// console.log(error)
 
  
//     return (
//         <>
//         {/* <ScriptTag type="text/javascript" src="./VIdeoStart.js" /> */}
       
//         {loading?
//         <>
//         <div id="container">
//       <video id="gum" playsInline autoPlay muted></video>
//       <video id="recorded" playsInline loop></video>

//       <div>
//         <button id="start" >Start camera</button>
//         <button id="record" disabled >Record</button>
//         <button id="play" disabled >Play</button>
//         <button id="download" disabled >Download</button>
//       </div>

//       <div>
//         <h4>Media Stream Constraints options</h4>
//         <p>
//           Echo cancellation: <input type="checkbox" id="echoCancellation" />
//         </p>
//       </div>

//       <div>
//         <span id="errorMsg"></span>
//       </div>
//     </div>
//         </>:null}
    
//   {/* {shouldLoadStripe===false?setshouldLoadStripe(true):null} */}
//     </>
//     )
// }
// export default Start