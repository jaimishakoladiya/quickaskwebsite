import React from 'react'

import img1 from "../images/admin.png"
import Grid from "@material-ui/core/Grid";
import CompanyFooter from "../companyprofile/CompanyFooter";
import "../companyprofile/Company.css"
function Startinterview() {
    return (
        <div>
        {/* <div className="start-header"></div>
        <Grid container spacing={0}>
               
               <Grid item xs >
               PREPARE YOUR EQUIPMENT
You must test your system before you can continue with the interview. Here are the steps to follow:
1. To begin recording a test video, click on the Record button

2. To stop recording the test video, click on the Stop button

3. To ensure your video recorded properly, click on the play button

You can repeat those steps until you are satisfied with your video.
After that, you can click on the Start Interview button    
               </Grid>
              
               <Grid item xs>
               <p>
              
<img style={{ height: "400px", width: "500px" }} src={img1}></img>

                   <br></br>
                  </p>
                 
               </Grid>
              
           </Grid> */}
           <CompanyFooter/>
        </div>
        
    )
}

export default Startinterview
