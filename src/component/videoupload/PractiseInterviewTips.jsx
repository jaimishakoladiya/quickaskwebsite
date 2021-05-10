import React from 'react'
import './Video.css'
import homeimg from '../images/inter.png'
import Button from "@material-ui/core/Button";
import logo from "../images/logo2.png"
import VideoFooter from './VideoFooter';

function PractiseInterviewTips() {
    return (
        <div>
        <div className="start-header">
           <img className="logo" src={logo}></img>
       </div>
       <div className="practise_head">
       <span className="practise_title">  This is practice interview. Use it to get acquainted with the interview process.</span>
       </div>
       <div>
       <div className="tips_text">
           <h2>*TIPS*</h2>
           <h4>• Test your internet connection, camera, sound, video program, and test it all again right before the interview process.
</h4>
           <h4>• Select the proper location for the interview, control the lighting, and display a generic background.
</h4>
           <h4>• Dress professionally and avoid bright colors. Remember nothing too flashy or suggestive with clothing.</h4>
           <h4>• You need to speak very clearly and avoid mumbling or talking too fast, they are much more noticeable in an online interview.</h4>
           <h4>• Look directly into the camera and not at the screen or monitor to make good eye contact.</h4>
          
           </div>
           {/* <Button id="tips_butn1" variant="contained" color="secondary"><h3>I Agree</h3></Button> */}
            <Button id="tips_butn2" variant="contained" color="secondary"><h3>Continue</h3></Button>
<br></br>
         </div>

        
         <br></br><br></br>

           <VideoFooter/>
       </div>
   )
}

export default PractiseInterviewTips
