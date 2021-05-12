import React from 'react'

import img1 from "../images/start.png"
import Grid from "@material-ui/core/Grid";
import logo from "../images/logo2.png"
import "../videoupload/Video.css"
import Button from "@material-ui/core/Button";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import VideoFooter from './VideoFooter';
function FinishInterview() {
    return (
        <div>
        <div className="video-header">
            <img className="logo" src={logo}></img>
        </div>
        <Grid container spacing={0}>
               
               <Grid id="go_grid" item xs>
               <h1>You're All Done.</h1><br/><br/>
              <h3 > Congratulations On Finishing your<br/> Practice Interview. Now that<br/> You've taken the practice<br/>
               interview, you know what to <br/>expect when taking the real<br/>
               interview. if this had been a real <br/>
               interview, your answers would <br/>
               have been uploaded for the <br/>
               hiring manager to review..<br/></h3>
   </Grid>
              
               <Grid id="go1_grid" item xs>
              <div>
               <img style={{ height: "350px", width: "550px" }} src={img1}></img>
               </div>
               </Grid>
              
           </Grid>
           <Button style={{backgroundColor: "darkcyan",
                        fontWeight: "bold",
                        width:"180px",
                        marginTop:"-10px",
                        marginLeft:"990px",
                        height:"50px",
                        color:"black"
                      }}>Go To Interview</Button>
           <VideoFooter/>
        </div>

    )
}

export default FinishInterview
