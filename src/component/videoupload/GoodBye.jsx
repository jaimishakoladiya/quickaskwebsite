import React from 'react'
import img1 from "../images/start.png"
import Grid from "@material-ui/core/Grid";
import "../videoupload/Video.css"

import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import VideoFooter from './VideoFooter';
import VideoHeader from './VideoHeader';
function GoodBye() {

  const history = useHistory();
  const pushfunction = () => {
    history.push("/")

  }
  console.log(history);
  return (
    <div>
      <VideoHeader />
      <Grid container spacing={0}>

        <Grid id="go_grid" item xs>
          <h1>You're All Done.</h1><br /><br />
          <h3 >Congratulations on finishing your <br />
            interview. The answers you<br /> recorded will now be sent<br />
            to the hiring manager for review. <br />Thank you for using AskAway, <br />
            and best of luck with the rest<br /> of your hiring process!</h3>
        </Grid>
        <Grid id="go1_grid" item xs>
          <div>
            <img style={{ height: "350px", width: "550px" }} src={img1}></img>
          </div>
        </Grid>
      </Grid>
      <Button onClick={pushfunction} style={{
        backgroundColor: "darkcyan",
        fontWeight: "bold",
        width: "180px",
        marginTop: "50px",
        marginLeft: "990px",
        height: "50px",
        color: "black"
      }}>Go To Home</Button>
      <VideoFooter />
    </div>

  )
}

export default GoodBye
