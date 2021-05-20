import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import Button from "@material-ui/core/Button";
import VideoFooter from './VideoFooter';
import VideoHeader from './VideoHeader';
import {useLocation ,useHistory, useParams} from 'react-router-dom'
import RecordRTC from 'recordrtc';

function InterviewQuestion() {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.token;
  const location=useLocation()
  const history=useHistory()
  const {tokenid,id}=useParams()

let noofquestion;
   const [praciteque, setpracticeque] = useState()
   const [qno,setqno]=useState()
   let indexQuestionLoad=0
  const cameraScreen = useRef(null)
  const startButton = useRef(null)
  const stopButton = useRef(null)
  const questionno = useRef(null)
  const question = useRef(null)
  useEffect(() => {
    // startVideo()
    getquestion(true)
  }, [])
 
	var mediaStream = null;
  let recorder;
 const startVideo=()=>{
  navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
}).then(async function(stream) {
  cameraScreen.current.srcObject = stream;
  recorder = RecordRTC(stream, {
        type: 'video'
    });
    recorder.startRecording();

     stopButton && stopButton.current.addEventListener('click', () => {
      startNextQuestion()
    getquestion()
     })
   
});
 }
  const getquestion = async (iscount=false) => {
    const res = await axios({
      method: 'get',
      url: `http://localhost:2002/getquestion/${tokenid}/${id}/${iscount}`,
      headers: {
        Authorization: token
      }
    })
  
   let practiceData=res.data.questions;
    noofquestion=res.data.questions.length;
    // UpdateQuestion()
				if (practiceData.length > indexQuestionLoad) {
          setpracticeque(practiceData[indexQuestionLoad].question);
					setqno('Q:' + (+practiceData[indexQuestionLoad].order + 1));
          startVideo()
				  
					      			indexQuestionLoad++
          console.log(indexQuestionLoad)
          return;
        }
        else{
          console.log("nooo")
         stopVideoRecording()
					if (recorder) { recorder.stopRecording(postFiles); }
          history.push(`/starttest/${tokenid}`)
        }
  }
  function postFiles() {
    var blob = recorder.getBlob();
		var fileName = generateRandomString() + '.webm';
		var file = new File([blob], fileName, { type: 'video/webm' });
		upload('/start/videoUpload/uploadFile', file);
      console.log(file)
		if (mediaStream) mediaStream.stop();
	
	}
 
 async function upload(url,file){
console.log(url)
console.log(file)
console.log(question.current.textContent)
const res=await axios({
  method:'post',
  url:`http://localhost:2002/start/videoUpload/uploadFile`,
  data:{
    file:file,
    key:`${tokenid}/${id}`,
    question:question.current.textContent,
    qno:parseInt(questionno.current.textContent.split("Q:")[1]) - 1
  },
  headers:{
    Authorization:token
  }
})
console.log(res)
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
  
  function startNextQuestion() {
		stopVideoRecording();
	}
	function stopVideoRecording() {
    if (recorder) { recorder.stopRecording(postFiles); }
	}

  const stopbtn=()=>{
    startNextQuestion()
    getquestion()
  }

  return (
    <div>
      <VideoHeader />
      <div className="main1_div">
        <h2 ref={questionno}>{qno}</h2>
        <h3 ref={question}>{praciteque}</h3></div>
      <div className="main_div">

        <div>
          <video style={{ height: "350px", width: "640px", border: "8px solid darkcyan" }} id="gum" playsInline autoPlay muted ref={cameraScreen}></video>

          <div className="main2_div">
            <div>
              <Button  ref={stopButton} style={{
                backgroundColor: "darkcyan",
                fontWeight: "bold",
                width: "180px",
                marginLeft: "25px",
                marginTop: "11px",
                height: "50px",
                color: "black"
              }}>Next Question</Button>
              {/* <Button ref={startButton} onClick={startbtn} style={{
                backgroundColor: "darkcyan",
                fontWeight: "bold",
                width: "180px",
                marginLeft: "25px",
                marginTop: "11px",
                height: "50px",
                color: "black",
                display:'none'
              }}>Next Question</Button> */}
              </div>
          </div>
           </div>

      </div>

      <VideoFooter />
    </div>

  )
}

export default InterviewQuestion
