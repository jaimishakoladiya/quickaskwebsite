import React ,{useRef} from 'react'
import img1 from "../images/admin.png"
import Grid from "@material-ui/core/Grid";
import logo from "../images/logo2.png"

import Button from "@material-ui/core/Button";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import VideoFooter from './VideoFooter';
import VideoHeader from './VideoHeader';

function InterviewQuestion() {
  const cameraScreen = useRef(null)
  const recordButton=useRef(null)
  function handleSuccess(stream) {
    console.log('getUserMedia() got stream:', stream);
    window.stream = stream;

    const gumVideo = document.querySelector('video#gum');
    gumVideo.srcObject = stream;
  }
  async function init(constraints) {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      handleSuccess(stream);
    } catch (e) {
      console.error('navigator.getUserMedia error:', e);
      
    }
  }
  const startcamera = async () => {
   
   const constraints = {
   audio: {
        echoCancellation: { exact: true }
      },
      video: {
        width: 1280, height: 720
      }
    };
    console.log('Using media constraints:', constraints);
    await init(constraints)
  }

  
    return (
        <div>
         <VideoHeader/>
     <div className="main1_div">             
<h2>Q.1</h2>
<h3>hjhhh?</h3></div>
            <div className="main_div">
     
<div> 
 {/* <img style={{ height: "350px", width: "640px" ,border:"8px solid darkcyan"}} src={img1}></img> */}
<video style={{height: "350px", width: "640px" ,border:"8px solid darkcyan"}}  id="gum" playsInline autoPlay muted ref={cameraScreen}></video>

<div className="main2_div">
<div>
<Button onClick={startcamera}  ref={recordButton} style={{backgroundColor: "darkcyan",
                        fontWeight: "bold",
                        width:"180px",
                       marginLeft:"25px",
                       marginTop:"11px",
                        height:"50px",
                        color:"black"
                      }}>Next Question</Button></div>
</div> </div>
   
            </div>
            
           <VideoFooter/>
        </div>
        
    )
}

export default InterviewQuestion
