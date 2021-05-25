import React, { useRef ,useState} from 'react'
import RecordRTC from 'recordrtc';
import axios from 'axios'
import Grid from "@material-ui/core/Grid";
import logo from "../images/logo2.png"
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import CameraIcon from '@material-ui/icons/Camera';
import Button from "@material-ui/core/Button";
import CompanyFooter from '../companyprofile/CompanyFooter';
import VideoFooter from './VideoFooter';
import VideoHeader from './VideoHeader';
function Startinterview(props) {
  const [isdisable,setdisable]=useState(true);
  const icon = {
    background:"darkcyan",width:"60px",height:"60px",borderRadius:"10%" 
  }
  const iconcss= {
    backgroundColor: "darkcyan", margin:"-8.5px 0px", width: "45", height: "45", borderRadius: "50%"
  }
  const iconcss2 ={
    backgroundColor: "darkcyan", marginRight: "-100px", width: "45", height: "45", borderRadius: "50%" 
  }
  const iconcss3={
    fontSize: "18px", color: "gray"

  }
  const recordButton = useRef(null)
  const playButton = useRef(null)
  const cameraScreen = useRef(null)
  const videoScreen = useRef(null)
   const stopButton=useRef(null)
  // let mediaRecorder;
  // let recordedBlobs;

  // function handleSuccess(stream) {
  //   console.log('getUserMedia() got stream:', stream);
  //   window.stream = stream;

  //   const gumVideo = document.querySelector('video#gum');
  //   gumVideo.srcObject = stream;
  // }
  // function handleDataAvailable(event) {
  //   console.log('handleDataAvailable', event);
  //   if (event.data && event.data.size > 0) {
  //     recordedBlobs.push(event.data);
  //   }
  // }
  // function startRecording() {
  //   recordedBlobs = [];
  //   let options = { mimeType: 'video/webm;codecs=vp9,opus' };
  //   try {
  //     mediaRecorder = new MediaRecorder(window.stream, options);
  //   } catch (e) {
  //     console.error('Exception while creating MediaRecorder:', e);
      
  //     return;
  //   }

  //   console.log('Created MediaRecorder', mediaRecorder, 'with options', options);
  //   // playButton.current.disabled = true;
  //   // stopButton.current.addEventListener('click',stopRecording)
  //   mediaRecorder.onstop = (event) => {
  //     console.log('Recorder stopped: ', event);
  //     console.log('Recorded Blobs: ', recordedBlobs);
  //   };


  //   mediaRecorder.ondataavailable = handleDataAvailable;
  //   mediaRecorder.start();
  //   console.log('MediaRecorder started', mediaRecorder);
  // }
  // function generateRandomString() {
	// 	if (window.crypto) {
	// 		var a = window.crypto.getRandomValues(new Uint32Array(3));
	// 		var token = '';
	// 		for (var i = 0, l = a.length; i < l; i++) token += a[i].toString(36);
	// 		return token;
	// 	} else {
	// 		return (Math.random() * new Date().getTime()).toString(36).replace(/\./g, '');
	// 	}
	// }

  // function stopRecording() {
  //   setdisable(false)
  //   mediaRecorder.stop();
  //   playButton && playButton.current.addEventListener('click', () => {
  //     // var blob = mediaRecorder.getBlob();
	// 	var fileName = generateRandomString() + '.webm';
	// 	var file = new File(recordedBlobs, fileName, { type: 'video/webm' });
  //     const superBuffer = new Blob(recordedBlobs, { type: 'video/webm' });
  //     console.log(file)
  //     cameraScreen.current.style.display='none'
  //     videoScreen.current.removeAttribute('style')
  //     videoScreen.current.src = null;
  //     videoScreen.current.srcObject = null;
  //     videoScreen.current.src = window.URL.createObjectURL(superBuffer);
  //     videoScreen.current.controls = true;
  //     videoScreen.current.muted=false;
  //     videoScreen.current.play();
  //   });
  //   const btn=document.getElementById("startbtn")
  //   btn.removeAttribute('disabled')
  //   console.log(btn.disabled)
  // }
  // async function init(constraints) {
  //   try {
  //     const stream = await navigator.mediaDevices.getUserMedia(constraints);
  //     handleSuccess(stream);
  //   } catch (e) {
  //     console.error('navigator.getUserMedia error:', e);
      
  //   }
  // }
  // const startcamera = async () => {
  //   document.getElementById("logo").style.display = "none";
  //   cameraScreen.current.style.display="block"
  //   videoScreen.current.style.display='none'
  //   stopButton.current.disabled=false;
  //   cameraScreen.current.muted=true;
  //   cameraScreen.current.controls = false;
  //  const constraints = {
  //  audio: {
  //       echoCancellation: { exact: true }
  //     },
  //     video: {
  //       width: 1280, height: 720
  //     }
  //   };
  //   console.log('Using media constraints:', constraints);
  //   await init(constraints)
  //   startRecording()

  // }
  let recorder;
  const startVideo = () => {
    document.getElementById("logo").style.display = "none";
    cameraScreen.current.style.display="block"
    videoScreen.current.style.display='none'
    cameraScreen.current.style.display="block"
    recordButton.current.disabled=true;
    stopButton.current.disabled=false;
    playButton.current.disabled=true;

    navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    }).then(async function (stream) {
      cameraScreen.current.srcObject = stream;
      recorder = RecordRTC(stream, {
        type: 'video'
      });
      recorder.startRecording();
      stopButton && stopButton.current.addEventListener('click', () => {
        setdisable(false)
        recorder.stopRecording(postFile);
        recordButton.current.disabled=false;
        stopButton.current.disabled=true;
        playButton.current.disabled=false;
    })
   

    });
  }
  function generateRandomString() {
		if (window.crypto) {
			var a = window.crypto.getRandomValues(new Uint32Array(3));
			var token = '';
			for (var i = 0, l = a.length; i < l; i++) token += a[i].toString(36);
			return token;
		} else {
			return (Math.random() * new Date().getTime()).toString(36).replace(/\./g, '');
		}
	}
  const postFile=()=>{

    var blob = recorder.getBlob();
		var fileName = generateRandomString() + `.webm`
     
		var file = new File([blob], fileName, { type: 'video/webm' });
    console.log(file)
    upload(file)
    playButton && playButton.current.addEventListener('click', () => {
      cameraScreen.current.style.display='none'
      videoScreen.current.removeAttribute('style')
    videoScreen.current.src = window.URL.createObjectURL(blob);
      videoScreen.current.muted=false;

    })
  }
  
  const upload=async (data)=>{
    var formData = new FormData();
  formData.append('file', data);
   const res=await axios({
     method:'post',
     url:'http://localhost:2002/videoUpload/configure',
     data:formData
   })
  }
  return (
    <>
     {/* <div className="start-header">
        <img className="logo" src={logo}></img>
      </div> */}
      <VideoHeader/>
    <div style={{marginBottom:"100px"}}>
     
      <Grid container spacing={0}>

        <Grid id="start_grid" item xs>
          <h2> PREPARE YOUR EQUIPMENT </h2><br /><br />
          <h3>You must test your system before you can continue with the interview. Here are the steps to follow:</h3><br /><br />
          <table >
            <tbody>
              <tr>
                <td align="left" style={iconcss3}>1. To begin recording a test video,<br /> click on the Record button</td>
                <td align="right"><CameraIcon style={iconcss2} /></td>

              </tr><br />
              <tr>
                <td align="left" style={iconcss3}>2. To stop recording the test video,<br /> click on the Stop button</td>
                <td align="right"><PauseCircleFilledIcon style={iconcss2}/></td>

              </tr><br />
              <tr>
                <td align="left" style={iconcss3}>3. To ensure your video recorded <br />properly, click on the play button</td>
                <td align="right"><PlayCircleFilledIcon style={iconcss2} /></td>

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
              <video style={{display:'none'}}  id="screen" playsInline autoPlay muted ref={videoScreen}></video>

            </div><br />

            <table>
              <tbody>
                <tr>
                   <div style={{marginLeft:"150px",marginTop:"-3px"}}> 
                   <td><button onClick={startVideo}  ref={recordButton} style={icon}><CameraIcon style={iconcss} /></button></td>
                  <td><button disabled  ref={stopButton} style={icon}><PauseCircleFilledIcon  style={iconcss} /></button></td>
                  <td><button disabled ref={playButton} style={icon}><PlayCircleFilledIcon style={iconcss} /></button></td></div>
                </tr></tbody>
            </table><br />

          </div>

        </Grid>

      </Grid>
      <Button disabled={isdisable} id="startbtn" style={{
        backgroundColor: "darkcyan",
        fontWeight: "bold",
        width: "180px",
        marginTop: "-80px",
        marginLeft: "1000px",
        height: "50px",
        color: "black"
      }} onClick={()=>{
        props.open()
      }}  >Start Interview</Button><br></br><br></br><br></br>
     
    </div>
    <VideoFooter />
    </>
  )
}

export default Startinterview
