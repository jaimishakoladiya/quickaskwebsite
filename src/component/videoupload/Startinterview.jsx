import React, { useRef } from 'react'

import img1 from "../images/admin.png"
import Grid from "@material-ui/core/Grid";
import logo from "../images/logo2.png"
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import CameraIcon from '@material-ui/icons/Camera';
import Button from "@material-ui/core/Button";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import VideoFooter from './VideoFooter';
import Start from './Start';
// import "../companyprofile/Company.css"
// import "../videoupload/Video.css"
function StartInterview() {
<<<<<<< HEAD
    return (
        <div>
        <div className="video-header">
            <img className="logo" src={logo}></img>
        </div>
        <Grid container spacing={0}>
               
               <Grid id="start_grid" item xs>
<h2> PREPARE YOUR EQUIPMENT </h2><br/><br/>
<h3>You must test your system before you can continue with the interview. Here are the steps to follow:</h3><br/><br/>
<table >
  <tr>
    <th align="left" style={{fontSize:"18px",color:"gray"}}>1. To begin recording a test video,<br/> click on the Record button</th>
    <th><CameraIcon style={{backgroundColor:"darkcyan",marginRight:"-160px",width:"45",height:"45",borderRadius:"50%"}}/></th>
    
  </tr><br/>
  <tr>
    <th align="left" style={{fontSize:"18px",color:"gray"}}>2. To stop recording the test video,<br/> click on the Stop button</th>
    <th align="right"><PauseCircleFilledIcon style={{backgroundColor:"darkcyan",marginRight:"-100px",width:"45",height:"45",borderRadius:"50%"}}/></th>
   
  </tr><br/>
  <tr>
    <th align="left" style={{fontSize:"18px",color:"gray"}}>3. To ensure your video recorded <br/>properly, click on the play button</th>
    <th align="right"><PlayCircleFilledIcon style={{backgroundColor:"darkcyan",marginRight:"-100px",width:"45",height:"45",borderRadius:"50%"}}/></th>
   
  </tr><br/>
 
</table><br/>
<h3>You can repeat those steps until you are satisfied with <br/>your video.</h3><br/><br/>
<h3>After that, you can click on the Start Interview button  </h3>
               </Grid>
              
               <Grid id="start1_grid" item xs><br/>
               <div style={{border:"4px solid darkcyan",borderRadius:"30px",width:"500px",height:"400px"}}>
               <div className="img_h">
               <img style={{ height: "140px", width: "235px",marginTop:"60px",marginLeft:"130px"}} src={logo}></img>
             
               </div><br/>
             
              <table>
                <th ><CameraIcon style={{backgroundColor:"darkcyan",marginLeft:"150px",width:"45",height:"45",borderRadius:"50%"}}/></th>
                <th><PauseCircleFilledIcon style={{backgroundColor:"darkcyan",width:"45",marginLeft:"30px",height:"45",borderRadius:"50%"}}/></th>
        <th><PlayCircleFilledIcon style={{backgroundColor:"darkcyan",width:"45",marginLeft:"30px",height:"45",borderRadius:"50%"}}/></th>
     </table><br/>
             
               </div>
                 
               </Grid>
              
           </Grid>
           <Button style={{backgroundColor: "darkcyan",
                        fontWeight: "bold",
                        width:"180px",
                        marginTop:"-80px",
                        marginLeft:"1000px",
                        height:"50px",
                        color:"black"
                      }}>Start Interview</Button><br></br><br></br><br></br>
             <VideoFooter/>
        </div>
        
    )
=======
  const recordButton = useRef(null)
  const playButton = useRef(null)
  const recordedVideo = useRef(null)
  const cameraScreen = useRef(null)
 
  let mediaRecorder;
  let recordedBlobs;

  function handleSuccess(stream) {
    recordButton.current.disabled = false;
    recordButton && recordButton.current.addEventListener('click', () => {
      if (recordButton.current.textContent === 'Record') {
        startRecording();
      } else {
        stopRecording();
        recordButton.current.textContent = 'Record';
        playButton.current.disabled = false;

      }
    });
    // console.log('getUserMedia() got stream:', stream);
    window.stream = stream;

    const gumVideo = document.querySelector('video#gum');
    gumVideo.srcObject = stream;
  }
  function handleDataAvailable(event) {
    console.log('handleDataAvailable', event);
    if (event.data && event.data.size > 0) {
      recordedBlobs.push(event.data);
    }
  }
  function startRecording() {
    recordedBlobs = [];
    let options = { mimeType: 'video/webm;codecs=vp9,opus' };
    try {
      mediaRecorder = new MediaRecorder(window.stream, options);
    } catch (e) {
      console.error('Exception while creating MediaRecorder:', e);
      // errorMsgElement.current.innerHTML = `Exception while creating MediaRecorder: ${JSON.stringify(e)}`;
      return;
    }

    console.log('Created MediaRecorder', mediaRecorder, 'with options', options);
    console.log(recordButton)
    playButton.current.disabled = true;

    mediaRecorder.onstop = (event) => {
      console.log('Recorder stopped: ', event);
      console.log('Recorded Blobs: ', recordedBlobs);
    };


    mediaRecorder.ondataavailable = handleDataAvailable;
    mediaRecorder.start();
    console.log('MediaRecorder started', mediaRecorder);
  }

  function stopRecording() {
    mediaRecorder.stop();
    playButton && playButton.current.addEventListener('click', () => {
      const superBuffer = new Blob(recordedBlobs, { type: 'video/webm' });
      cameraScreen.current.src = null;
      cameraScreen.current.srcObject = null;
      cameraScreen.current.src = window.URL.createObjectURL(superBuffer);
      cameraScreen.current.controls = true;
      cameraScreen.current.muted=false;
      cameraScreen.current.play();
    });

  }
  async function init(constraints) {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      handleSuccess(stream);
    } catch (e) {
      console.error('navigator.getUserMedia error:', e);
      //  errorMsgElement.current.innerHTML = `navigator.getUserMedia error:${e.toString()}`;
    }
  }
  const startcamera = async () => {
    cameraScreen.current.muted=true;
  
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
    startRecording()

  }

  return (
    <div>
      <div className="start-header">
        <img className="logo" src={logo}></img>
      </div>
      <Grid container spacing={0}>

        <Grid id="start_grid" item xs>
          <h2> PREPARE YOUR EQUIPMENT </h2><br /><br />
          <h3>You must test your system before you can continue with the interview. Here are the steps to follow:</h3><br /><br />
          <table >
            <tbody>
              <tr>
                <td align="left" style={{ fontSize: "18px", color: "gray" }}>1. To begin recording a test video,<br /> click on the Record button</td>
                <td align="right"><CameraIcon style={{ backgroundColor: "darkcyan", marginRight: "-100px", width: "45", height: "45", borderRadius: "50%" }} /></td>

              </tr><br />
              <tr>
                <td align="left" style={{ fontSize: "18px", color: "gray" }}>2. To stop recording the test video,<br /> click on the Stop button</td>
                <td align="right"><PauseCircleFilledIcon style={{ backgroundColor: "darkcyan", marginRight: "-100px", width: "45", height: "45", borderRadius: "50%" }} /></td>

              </tr><br />
              <tr>
                <td align="left" style={{ fontSize: "18px", color: "gray" }}>3. To ensure your video recorded <br />properly, click on the play button</td>
                <td align="right"><PlayCircleFilledIcon style={{ backgroundColor: "darkcyan", marginRight: "-100px", width: "45", height: "45", borderRadius: "50%" }} /></td>

              </tr><br />
            </tbody>
          </table><br />
          <h3>You can repeat those steps until you are satisfied with <br />your video.</h3><br /><br />
          <h3>After that, you can click on the Start Interview button  </h3>
        </Grid>

        <Grid id="start1_grid" item xs><br />
          <div style={{ border: "4px solid darkcyan", borderRadius: "30px", width: "500px", height: "400px" }}>
            <div className="img_h">
              {/* <img style={{ height: "140px", width: "235px",marginTop:"60px",marginLeft:"130px"}} src={logo}></img> */}
              <video  id="gum" playsInline autoPlay muted ref={cameraScreen}></video>

            </div><br />

            <table>
              <tbody>
                <tr>
                  <td ><CameraIcon onClick={startcamera}  ref={recordButton} style={{ backgroundColor: "darkcyan", marginLeft: "150px", width: "45", height: "45", borderRadius: "50%" }} id="cameraicon" /></td>
                  <td><PauseCircleFilledIcon onClick={stopRecording} style={{ backgroundColor: "darkcyan", width: "45", marginLeft: "30px", height: "45", borderRadius: "50%" }} /></td>
                  <td><PlayCircleFilledIcon ref={playButton} style={{ backgroundColor: "darkcyan", width: "45", marginLeft: "30px", height: "45", borderRadius: "50%" }} /></td>
                </tr></tbody>
            </table><br />

          </div>

        </Grid>

      </Grid>
      <Button style={{
        backgroundColor: "darkcyan",
        fontWeight: "bold",
        width: "180px",
        marginTop: "-80px",
        marginLeft: "1000px",
        height: "50px",
        color: "black"
      }} disabled>Start Interview</Button><br></br><br></br><br></br>
      <CompanyFooter />
    </div>

  )
>>>>>>> f4b9d3b648972a15af828b25977f5b4354d377b1
}

export default StartInterview
