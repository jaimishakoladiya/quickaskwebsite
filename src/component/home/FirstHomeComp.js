import React from "react";
import Button from "@material-ui/core/Button";
import homeimg from "../images/inter.png";

function FirstHomeComp() {
  return (
    <>
      <div className="home-start">
        <div className="home-head-title">
          <div>
            <img className="home-img" src={homeimg} />
          </div>
          <h3 className="home-title">WE</h3>
          <h3 className="home-title">PRE-SCREEN</h3>
          <h3 className="home-title">INTERVIEWERS</h3>
          <br></br>

          <h4 style={{ fontStyle: "-moz-initial", fontSize: "25px" }}>
           
            so you don't have to worry about it
          </h4>
          <br></br>
          <br></br>

          <div className="home-border"></div>
          <br></br>

     <Button id="home-free-button" variant="contained" color="secondary">try it free</Button><br></br><br></br><br></br><br></br><br></br>
    </div>
    </div>
        </>
    )
}

export default FirstHomeComp;
