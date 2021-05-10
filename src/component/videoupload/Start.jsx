
import React, { useState, useRef } from 'react';

//  import './VIdeoStart'
import './Video.css'
const Start = () => {
  const [disable, setdisable] = useState(false)
  const recordButton = useRef(null)
  const playButton = useRef(null)
  const downloadButton = useRef(null)
  const recordedVideo = useRef(null)
  const cameraScreen = useRef(null)
  const errorMsgElement=useRef(null)
  let mediaRecorder;
  let recordedBlobs;

  console.log(recordButton)
  function handleSuccess(stream) {
    recordButton.current.disabled = false;
    recordButton && recordButton.current.addEventListener('click', () => {
      if (recordButton.current.textContent === 'Record') {
        startRecording();
      } else {
        stopRecording();
        recordButton.current.textContent = 'Record';
        playButton.current.disabled = false;
        downloadButton.current.disabled = false;
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
      errorMsgElement.current.innerHTML = `Exception while creating MediaRecorder: ${JSON.stringify(e)}`;
      return;
    }

    console.log('Created MediaRecorder', mediaRecorder, 'with options', options);
    recordButton.current.textContent = 'Stop Recording';
    console.log(recordButton)
    playButton.current.disabled = true;
    downloadButton.current.disabled = true;
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
    playButton && playButton.current.addEventListener('click', () => {
      recordedVideo.current.style.display = "inline";
      cameraScreen.current.style.display = "none";
      const superBuffer = new Blob(recordedBlobs, { type: 'video/webm' });
      recordedVideo.current.src = null;
      recordedVideo.current.srcObject = null;
      recordedVideo.current.src = window.URL.createObjectURL(superBuffer);
      recordedVideo.current.controls = true;
      recordedVideo.current.play();
    });
    downloadButton && downloadButton.current.addEventListener('click', () => {
      const blob = new Blob(recordedBlobs, { type: 'video/mp4' });
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
    });
  }
  async function init(constraints) {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      handleSuccess(stream);
    } catch (e) {
      console.error('navigator.getUserMedia error:', e);
       errorMsgElement.current.innerHTML = `navigator.getUserMedia error:${e.toString()}`;
    }
  }
 
  const startcamera = async () => {
    cameraScreen.current.style.display = "inline";
    recordedVideo.current.style.display = "none";

    const hasEchoCancellation = document.querySelector('#echoCancellation').checked;
    const constraints = {
      audio: {
        echoCancellation: { exact: hasEchoCancellation }
      },
      video: {
        width: 1280, height: 720
      }
    };
    console.log('Using media constraints:', constraints);
    await init(constraints)
    // startRecording()

  }

  const recordbtn = () => {
    console.log("hhh")
    if (recordButton.current.textContent === 'Record') {
      startRecording();
    } else {
      stopRecording();
      recordButton.current.textContent = 'Record';
      playButton.current.disabled = false;
      downloadButton.current.disabled = false;
    }
  }
  return (
    <>
      {/* <ScriptTag type="text/javascript" src="./VIdeoStart.js" /> */}


      <div id="container">
        <video id="gum" playsInline autoPlay muted ref={cameraScreen}></video>
        <video id="recorded" playsInline loop ref={recordedVideo}></video>

        <div>
          <button id="start" onClick={startcamera}>Start camera</button>
          <button id="record" disabled onClick={recordbtn} ref={recordButton}>Record</button>
          <button id="play" disabled ref={playButton}>Play</button>
          <button id="download" disabled ref={downloadButton}>Download</button>
        </div>

        <div>
          <h4>Media Stream Constraints options</h4>
          <p>
            Echo cancellation: <input type="checkbox" id="echoCancellation" />
          </p>
        </div>

        <div>
          <span id="errorMsg" ref={errorMsgElement}></span>
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




