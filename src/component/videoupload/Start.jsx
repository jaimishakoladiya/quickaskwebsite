
import React, { useState } from 'react';
import ScriptTag from 'react-script-tag';
//  import './VIdeoStart'
import './Video.css'
const Start=()=>{
  const [disable,setdisable]=useState(false)
  let mediaRecorder;
  let recordedBlobs;
  
  const errorMsgElement = document.querySelector('span#errorMsg');
  const recordedVideo = document.querySelector('video#recorded');
  const recordButton = document.querySelector('button#record');
  const playButton = document.querySelector('button#play');
  const downloadButton = document.querySelector('button#download');
  console.log(recordedVideo)
  function handleSuccess(stream) {
    recordButton.disabled = false;
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
    let options = {mimeType: 'video/webm;codecs=vp9,opus'};
    try {
      mediaRecorder = new MediaRecorder(window.stream, options);
    } catch (e) {
      console.error('Exception while creating MediaRecorder:', e);
       errorMsgElement.innerHTML = `Exception while creating MediaRecorder: ${JSON.stringify(e)}`;
      return;
    }
  
    console.log('Created MediaRecorder', mediaRecorder, 'with options', options);
    recordButton.textContent = 'Stop Recording';
    console.log(recordButton)
    playButton.disabled = true;
    downloadButton.disabled = true;
    // setdisable(true)
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
  }
  async function init(constraints) {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      handleSuccess(stream);
    } catch (e) {
      console.error('navigator.getUserMedia error:', e);
      // errorMsgElement.innerHTML = `navigator.getUserMedia error:${e.toString()}`;
    }
  }
  const playbtn=()=>{
    const superBuffer = new Blob(recordedBlobs, {type: 'video/webm'});
  recordedVideo.src = null;
  recordedVideo.srcObject = null;
  recordedVideo.src = window.URL.createObjectURL(superBuffer);
  recordedVideo.controls = true;
  recordedVideo.play();
  }
  const downloadbtn=()=>{
    const blob = new Blob(recordedBlobs, {type: 'video/mp4'});
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'test.mp4';
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 100);
  }
  const startcamera=async ()=>{
    console.log("hii")
    const hasEchoCancellation = document.querySelector('#echoCancellation').checked;
  const constraints = {
    audio: {
      echoCancellation: {exact: hasEchoCancellation}
    },
    video: {
      width: 1280, height: 720
    }
  };
  console.log('Using media constraints:', constraints);
  await init(constraints)
  }

  const recordbtn=()=>{
    
    if (recordButton.textContent === 'Record') {
      startRecording();
    } else {
      stopRecording();
      recordButton.textContent = 'Record';
      playButton.disabled = false;
      downloadButton.disabled = false;
    }
  }
    return (
        <>
        {/* <ScriptTag type="text/javascript" src="./VIdeoStart.js" /> */}
       
    
    <div id="container">
      <video id="gum" playsInline autoPlay muted></video>
      <video id="recorded" playsInline loop></video>

      <div>
        <button id="start" onClick={startcamera}>Start camera</button>
        <button id="record" disabled onClick={recordbtn}>Record</button>
        <button id="play" disabled onClick={playbtn}>Play</button>
        <button id="download" disabled onClick={downloadbtn}>Download</button>
      </div>

      <div>
        <h4>Media Stream Constraints options</h4>
        <p>
          Echo cancellation: <input type="checkbox" id="echoCancellation" />
        </p>
      </div>

      <div>
        <span id="errorMsg"></span>
      </div>
    </div>
  <script>
    {
     
    }
  </script>

    </>
    )
}
export default Start