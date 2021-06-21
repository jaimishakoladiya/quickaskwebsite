import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import VideoFooter from "./VideoFooter";
import VideoHeader from "./VideoHeader";
import { useParams, useHistory } from "react-router-dom";
import RecordRTC from "recordrtc";
import StartInterviewTips from "./StartInterviewTips";

function RealInterview() {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.token;
  const { tokenid } = useParams();
  const history = useHistory();
  const [open, setopen] = useState(false);
  const cameraScreen = useRef(null);
  const stopButton = useRef(null);
  const questionno = useRef(null);
  const question = useRef(null);
  const [praciteque, setpracticeque] = useState();
  const [qno, setqno] = useState();

  useEffect(async () => {
    if (open) {
      const res = await axios({
        method: "get",
        url: `http://localhost:2002/addattempt/${tokenid}`,
      });
      console.log(res.data);
      getquestion();
    }
  }, [open]);

  var mediaStream = null;
  let recorder;
  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then(async function (stream) {
        if (cameraScreen) {
            cameraScreen.current.srcObject=stream;
        }
        recorder = RecordRTC(stream, {
          type: "video",
        });
        recorder.startRecording();

        stopButton &&
          stopButton.current.addEventListener("click", () => {
            startNextQuestion();
            getquestion();
          });
      });
  };
  const getquestion = async (iscount = false) => {
    const res = await axios({
      method: "get",
      url: `http://localhost:2002/getquestion/${tokenid}/${iscount}`,
      headers: {
        Authorization: token,
      },
    });

    console.log(res.data);

    if (res.data) {
      let questionData = res.data;

      setpracticeque(questionData.question);
      setqno("Q:" + (+questionData.order + 1));
      startVideo();
    } else {
      console.log("hhhh");
      stopVideoRecording();
      if (recorder) {
        recorder.stopRecording(postFiles);
      }
      history.push("/GoodBye");
      return;
    }
  };
  function generateRandomString() {
    if (window.crypto) {
      var a = window.crypto.getRandomValues(new Uint32Array(3));
      var token = "";
      for (var i = 0, l = a.length; i < l; i++) token += a[i].toString(36);
      return token;
    } else {
      return (Math.random() * new Date().getTime())
        .toString(36)
        .replace(/\./g, "");
    }
  }
  function postFiles() {
    var blob = recorder.getBlob();
    var fileName = generateRandomString() + `.webm`;
    var file = new File([blob], fileName, { type: "video/webm" });
    console.log(file);
    upload(file);
    // console.log(file)
    if (mediaStream) mediaStream.stop();
  }
  async function upload(data) {
    var formData = new FormData();
    formData.append("file", data);
    formData.append("key", tokenid);
    formData.append("question", question.current.textContent);
    formData.append(
      "qno",
      parseInt(questionno.current.textContent.split("Q:")[1]) - 1
    );
    console.log(formData.get('key'));
    const res = await axios({
      method: "post",
      url: `http://localhost:2002/start/videoUpload/uploadFile`,
      data: formData,
      headers: {
        Authorization: token
      },
    });
  }

  function startNextQuestion() {
    stopVideoRecording();
  }
  function stopVideoRecording() {
    if (recorder) {
      recorder.stopRecording(postFiles);
    }
  }
  const startinterview = () => {
    setopen(true);
  };

  return (
    <div>
      <VideoHeader />
      {open ? (
        <>
          <div className="main1_div">
            <h3 ref={questionno}>{qno}</h3>
            <h2 ref={question}>{praciteque}</h2>
          </div>
          <div className="main_div">
            <div>
              <video
                style={{
                  height: "350px",
                  width: "640px",
                  border: "8px solid darkcyan",
                }}
                ref={cameraScreen}
                id="gum"
                playsInline
                autoPlay
                muted
              ></video>

              <div className="main2_div">
                <div>
                  <Button
                    ref={stopButton}
                    style={{
                      backgroundColor: "darkcyan",
                      fontWeight: "bold",
                      width: "180px",
                      marginLeft: "25px",
                      marginTop: "11px",
                      height: "50px",
                      color: "black",
                    }}
                  >
                    Next Question
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <StartInterviewTips start={startinterview} />
      )}

      <VideoFooter />
    </div>
  );
}

export default RealInterview;
