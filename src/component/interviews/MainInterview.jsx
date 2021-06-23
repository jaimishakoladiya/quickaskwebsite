import React ,{useState}from 'react'
import Button from '@material-ui/core/Button';
import interviewimg from "../images/hye.jpg"
import { useHistory } from "react-router-dom";
function MainInterview(props) {
    const history = useHistory()
    return (
        <div style={{marginBottom:"150px"}}>
      <div className="interview-img">
        <img src={interviewimg}/>
        </div>
            <h1 className="interview-title">Online Interview,</h1>
            <h1 className="interview-title2">Improve Hiring Method</h1>
            <h4 className="interview-text">Any manager or Admin of the Company can create <br></br> the interview for candidate.
            make sure to give <br></br>candidates necessary information, like the name <br></br>of the interviewer and estimated interview duration. </h4>
            <Button variant="contained" id="interview-btn" onClick={props.openinterviewform}>Create Interview</Button>
        </div>
    )
}
export default MainInterview
