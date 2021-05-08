import React from 'react'
import CompanyFooter from '../companyprofile/CompanyFooter'
import './Video.css'
import homeimg from '../images/inter.png'
import Button from "@material-ui/core/Button";
import logo from "../images/logo2.png"

function PractiseInterview() {
    return (
        <div>
         <div className="start-header">
            <img className="logo" src={logo}></img>
        </div>
        <div className="practise_head">
        <span className="practise_title">This is practise interview.use it to get acquainted with the interview process.</span>
        </div>
        <div>
            <img className="practise_video" src={homeimg} /><br></br><br></br>
            <Button id="practise_butn" variant="contained" color="secondary"><h3>Continue</h3></Button>
<br></br>
          </div>

         
          <br></br><br></br><br></br>

            <CompanyFooter/>
        </div>
    )
}

export default PractiseInterview
