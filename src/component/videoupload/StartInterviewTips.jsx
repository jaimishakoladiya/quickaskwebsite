import React from 'react'
import './Video.css'
import Button from "@material-ui/core/Button";
import VideoFooter from './VideoFooter';

function StartInterviewTips(props) {
    return (
        <div>
        
        <div className="practise_head">
        <span className="practise_title"> please follow below tips before your start the interview process.</span>
        </div>
        <div>
        <div className="tips_text">
            <h2>TIPS</h2>
            <h4>• Test your internet connection, camera, sound, video program, and test it all again right before the interview process.
</h4>
            <h4>• Select the proper location for the interview, control the lighting, and display a generic background.
</h4>
            <h4>• Dress professionally and avoid bright colors. Remember nothing too flashy or suggestive with clothing.</h4>
            <h4>• You need to speak very clearly and avoid mumbling or talking too fast, they are much more noticeable in an online interview.</h4>
            <h4>• Look directly into the camera and not at the screen or monitor to make good eye contact.</h4>
           
            </div>
            {/* <Button id="tips_butn1" variant="contained" color="secondary"><h3>I Agree</h3></Button> */}
             <Button id="tips_butn2" onClick={props.start} variant="contained" color="secondary"><h3>Continue</h3></Button>
<br></br>
          </div>

         
          <br></br><br></br>

            <VideoFooter/>
        </div>
    )
}

export default StartInterviewTips
