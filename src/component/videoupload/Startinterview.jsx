import React, { useRef } from 'react'

import img1 from "../images/admin.png"
import Grid from "@material-ui/core/Grid";
import logo from "../images/logo2.png"
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import CameraIcon from '@material-ui/icons/Camera';
import Button from "@material-ui/core/Button";
import CompanyFooter from '../companyprofile/CompanyFooter';
import VideoFooter from './VideoFooter';
import VideoHeader from './VideoHeader';
function Startinterview() {
  const recordButton = useRef(null)
  const playButton = useRef(null)
  const cameraScreen = useRef(null)
   
  let mediaRecorder;
  let recordedBlobs;

  function handleSuccess(stream) {
    console.log('getUserMedia() got stream:', stream);
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
      
      return;
    }

    console.log('Created MediaRecorder', mediaRecorder, 'with options', options);
    playButton.current.disabled = true;

    mediaRecorder.onstop = (event) => {
      console.log('Recorder stopped: ', event);
      console.log('Recorded Blobs: ', recordedBlobs);
    };

    // document.getElementById("start").removeAttribute('disabled')

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
    const btn=document.getElementById("startbtn")
    btn.removeAttribute('disabled')
    console.log(btn.disabled)
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
    document.getElementById("logo").style.display = "none";
    cameraScreen.current.style.display="block"
    cameraScreen.current.muted=true;
    cameraScreen.current.controls = false;
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
    <>
     {/* <div className="start-header">
        <img className="logo" src={logo}></img>
      </div> */}
      <VideoHeader/>
    <div style={{marginBottom:"50px"}}>
     
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
              <img id='logo' style={{ height: "140px", width: "235px",marginTop:"60px",marginLeft:"130px"}} src={logo}></img>
              <video style={{display:'none'}}  id="gum" playsInline autoPlay muted ref={cameraScreen}></video>

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
      <Button disabled id="startbtn" style={{
        backgroundColor: "darkcyan",
        fontWeight: "bold",
        width: "180px",
        marginTop: "-80px",
        marginLeft: "1000px",
        height: "50px",
        color: "black"
      }} onClick={()=>{
        alert("oooll")
      }}  >Start Interview</Button><br></br><br></br><br></br>
     
    </div>
    <VideoFooter />
    </>
  )
}

export default Startinterview
