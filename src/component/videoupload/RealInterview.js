import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import Button from "@material-ui/core/Button";
import VideoFooter from './VideoFooter';
import VideoHeader from './VideoHeader';
import {useLocation} from 'react-router-dom'
import RecordRTC from 'recordrtc';
import FinishInterview from './FinishInterview';

function RealInterview() {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.token;
  const [open,setopen]=useState(false)
//   const location=useLocation()
//   const tokenval=location.pathname.split('/')[3]
// //  const [practiceData,setpracticeData]=useState([])
// let practiceData;
//    const [praciteque, setpracticeque] = useState()
//    const [qno,setqno]=useState()
//    let indexQuestionLoad=0
//   const cameraScreen = useRef(null)
//   const startButton = useRef(null)
//   const stopButton = useRef(null)
//   useEffect(() => {
//     startVideo()
//     getquestion(true)
//   }, [])
//   var mediaRecorder;
//   var recordedBlobs;
// 	var mediaStream = null;
//   let recorder;
//  const startVideo=()=>{
//   navigator.mediaDevices.getUserMedia({
//     video: true,
//     audio: true
// }).then(async function(stream) {
//   cameraScreen.current.srcObject = stream;
//   recorder = RecordRTC(stream, {
//         type: 'video'
//     });
//     recorder.startRecording();

//     // const sleep = m => new Promise(r => setTimeout(r, m));
//     // await sleep(3000);
//      stopButton && stopButton.current.addEventListener('click', () => {
//     //   recorder.stopRecording(function() {
//     //     let blob = recorder.getBlob();
//     //     alert(blob);
//     //     console.log(blob)
//     //     UpdateQuestion()
//     // });
//     recorder.stopRecording(postFiles)
//     UpdateQuestion()
//      })
   
// });
//  }
//   const getquestion = async (iscount=false) => {
//     const res = await axios({
//       method: 'get',
//       url: `http://localhost:2002/getquestion/1rwf1l4kopg8n2c/0000000000/${iscount}`,
//       headers: {
//         Authorization: token
//       }
//     })
//     console.log(res.data);
    
 
//     // startcamera()
//     practiceData=res.data.questions
//     UpdateQuestion()
// 				// if (practiceData.length > indexQuestionLoad) {
//         //   setpracticeque(practiceData[indexQuestionLoad].question);
// 				// 	setqno('Q:' + (+practiceData[indexQuestionLoad].order + 1));
//         //   // startVideo()
				  
// 				// 	setindex(indexQuestionLoad+1)
//         //   console.log(indexQuestionLoad)

//         // }
//         // else{
//         //   console.log("nooo")
        
//         //   // stopVideoRecording()
// 				// 	// if (mediaRecorder) { mediaRecorder.stop(postFiles); }
//         // }
//   }
//   const UpdateQuestion=()=>{
//     if (practiceData.length > indexQuestionLoad) {
//             setpracticeque(practiceData[indexQuestionLoad].question);
//       			setqno('Q:' + (+practiceData[indexQuestionLoad].order + 1));
            
//             startVideo()
//       			indexQuestionLoad++;
//             console.log(indexQuestionLoad)
  
//           }
//           else{
//             console.log('nooo')
//           }
//   }
//   function postFiles() {
//     var blob = recorder.getBlob();
// 		var fileName = generateRandomString() + '.webm';
// 		var file = new File([blob], fileName, { type: 'video/webm' });
// 		// xhr('/start/videoUpload/uploadFile', file, function (responseText) { });
// console.log(file)
// 		if (mediaStream) mediaStream.stop();
	
// 	}
//   function handleDataAvailable(event) {
//     console.log('handleDataAvailable', event);
//     if (event.data && event.data.size > 0) {
//       recordedBlobs.push(event.data);
//     }
//   }
//   function handleSuccess(stream) {
//     console.log('getUserMedia() got stream:', stream);
//     window.stream = stream;

//     // const gumVideo = document.querySelector('video#gum');
//     cameraScreen.current.srcObject = stream;
//   }
//   async function init(constraints) {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia(constraints);
//       handleSuccess(stream);
//     } catch (e) {
//       console.error('navigator.getUserMedia error:', e);

//     }
//   }
//   function startRecording() {
//     recordedBlobs = [];
//     let options = { mimeType: 'video/webm;codecs=vp9,opus' };
//     console.log('getUserMedia() got stream:', window.stream);

//     try {
//       mediaRecorder = new MediaRecorder(window.stream, options);
//     } catch (e) {
//       console.error('Exception while creating MediaRecorder:', e);
      
//       return;
//     }

//     console.log('Created MediaRecorder', mediaRecorder, 'with options', options);
//     mediaRecorder.onstop = (event) => {
//       console.log('Recorder stopped: ', event);
//       console.log('Recorded Blobs: ', recordedBlobs);
//     };


//     mediaRecorder.ondataavailable = handleDataAvailable;
//     mediaRecorder.start();
//     console.log('MediaRecorder started', mediaRecorder);
//     setTimeout(function () {
//       stopButton.current.style.display="block";
//     stopButton.current.disabled = false;

//     }, 1000)
//   }
//   function generateRandomString() {
// 		if (window.crypto) {
// 			var a = window.crypto.getRandomValues(new Uint32Array(3));
// 			var token = '';
// 			for (var i = 0, l = a.length; i < l; i++) token += a[i].toString(36);
// 			return token;
// 		} else {
// 			return (Math.random() * new Date().getTime()).toString(36).replace(/\./g, '');
// 		}
// 	}
//   function stopRecording() {
//     console.log(mediaRecorder);
   
//     mediaRecorder.stop();
//     // UpdateQuestion()
//     var fileName = generateRandomString() + '.webm';
// 		var file = new File(recordedBlobs, fileName, { type: 'video/webm' });
//       const superBuffer = new Blob(recordedBlobs, { type: 'video/webm' });
//       console.log(file)
//   }
//   const startcamera = async () => {

//     const constraints = {
//       audio: {
//         echoCancellation: { exact: true }
//       },
//       video: {
//         width: 1280, height: 720
//       }
//     };
//     console.log('Using media constraints:', constraints);
//     await init(constraints)
   
//      startRecording()
//   }
//   function startNextQuestion() {
// 		stopVideoRecording();
// 	}
// 	function stopVideoRecording() {
//     // if (mediaRecorder) { mediaRecorder.stop(postFiles); }
// 		stopRecording()
// 	}

//   const startbtn=()=>{
//     stopButton.current.disabled = true;
// 		stopVideoRecording();
//   }

//   const stopbtn=()=>{
//     // startButton.current.disabled = false;
//     // stopButton.current.style.display="none"
//     // stopButton.current.disabled = true;
// 		//  startNextQuestion();
// 		// // getquestion();
    
//   }

const startinterview=()=>{
    setopen(true)
}
  return (
    <div>
      <VideoHeader />
      {open?<><div className="main1_div">
        <h2>1</h2>
        <h3>kkkk</h3></div>
      <div className="main_div">

        <div>
          <video style={{ height: "350px", width: "640px", border: "8px solid darkcyan" }} id="gum" playsInline autoPlay muted ></video>

          <div className="main2_div">
            <div>
              <Button  style={{
                backgroundColor: "darkcyan",
                fontWeight: "bold",
                width: "180px",
                marginLeft: "25px",
                marginTop: "11px",
                height: "50px",
                color: "black"
              }}>Next Question</Button>
              </div>
          </div>
           </div>

      </div></>:
      <FinishInterview start={startinterview}/>
}
    
      
      <VideoFooter />
    </div>

  )
}

export default RealInterview
