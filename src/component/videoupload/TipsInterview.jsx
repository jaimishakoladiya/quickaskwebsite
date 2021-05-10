import React from 'react'
import CompanyFooter from '../companyprofile/CompanyFooter'
import './Video.css'
import homeimg from '../images/inter.png'
import Button from "@material-ui/core/Button";
import logo from "../images/logo2.png"

function TipsInterview() {
    return (
        <div>
         <div className="start-header">
            <img className="logo" src={logo}></img>
        </div>
        <div className="practise_head">
        <span className="practise_title">Follow this tips before start the interview process.</span>
        </div>
        <div>
        <div className="tips_text">
            <h2>*Tips*</h2><br></br>
            <h4>1.balllllllllllllllllllllllllll</h4>
            <h4>2.meeeeeeeeeeeeeeeeeeee</h4>
            <h4>1.balllllllllllllllllllllllllll</h4>
            <h4>2.meeeeeeeeeeeeeeeeeeee</h4>
            <h4>1.balllllllllllllllllllllllllll</h4>
           
            </div>
            {/* <Button id="tips_butn1" variant="contained" color="secondary"><h3>I Agree</h3></Button> */}
             <Button id="tips_butn2" variant="contained" color="secondary"><h3>Continue</h3></Button>
<br></br>
          </div>

         
          <br></br><br></br><br></br><br></br>

            <CompanyFooter/>
        </div>
    )
}

export default TipsInterview
