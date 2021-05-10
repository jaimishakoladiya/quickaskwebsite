import React from 'react'

import img1 from "../images/admin.png"
import Grid from "@material-ui/core/Grid";
import logo from "../images/logo2.png"
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import CameraIcon from '@material-ui/icons/Camera';
import Button from "@material-ui/core/Button";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import CompanyFooter from '../companyprofile/CompanyFooter'
// import "../companyprofile/Company.css"
function StartInterview() {
    return (
        <div>
        <div className="start-header">
            <img className="logo" src={logo}></img>
        </div>
        <Grid container spacing={0}>
               
               <Grid id="start_grid" item xs>
<h2> PREPARE YOUR EQUIPMENT </h2><br/><br/>
<h3>You must test your system before you can continue with the interview. Here are the steps to follow:</h3><br/><br/>
<table >
  <tr>
    <th align="left" style={{fontSize:"18px",color:"gray"}}>1. To begin recording a test video,<br/> click on the Record button</th>
    <th><CameraIcon style={{backgroundColor:"darkcyan",marginRight:"-160px",width:"45",height:"45",borderRadius:"50%"}}/></th>
    
  </tr><br/>
  <tr>
    <th align="left" style={{fontSize:"18px",color:"gray"}}>2. To stop recording the test video,<br/> click on the Stop button</th>
    <th align="right"><PauseCircleFilledIcon style={{backgroundColor:"darkcyan",marginRight:"-100px",width:"45",height:"45",borderRadius:"50%"}}/></th>
   
  </tr><br/>
  <tr>
    <th align="left" style={{fontSize:"18px",color:"gray"}}>3. To ensure your video recorded <br/>properly, click on the play button</th>
    <th align="right"><PlayCircleFilledIcon style={{backgroundColor:"darkcyan",marginRight:"-100px",width:"45",height:"45",borderRadius:"50%"}}/></th>
   
  </tr><br/>
 
</table><br/>
<h3>You can repeat those steps until you are satisfied with <br/>your video.</h3><br/><br/>
<h3>After that, you can click on the Start Interview button  </h3>
               </Grid>
              
               <Grid id="start1_grid" item xs><br/>
               <div style={{border:"4px solid darkcyan",borderRadius:"30px",width:"500px",height:"400px"}}>
               <div className="img_h">
               <img style={{ height: "140px", width: "235px",marginTop:"60px",marginLeft:"130px"}} src={logo}></img>
               </div><br/>
             
              <table>
                <th ><CameraIcon style={{backgroundColor:"darkcyan",marginLeft:"150px",width:"45",height:"45",borderRadius:"50%"}}/></th>
                <th><PauseCircleFilledIcon style={{backgroundColor:"darkcyan",width:"45",marginLeft:"30px",height:"45",borderRadius:"50%"}}/></th>
        <th><PlayCircleFilledIcon style={{backgroundColor:"darkcyan",width:"45",marginLeft:"30px",height:"45",borderRadius:"50%"}}/></th>
     </table><br/>
             
               </div>
                 
               </Grid>
              
           </Grid>
           <Button style={{backgroundColor: "darkcyan",
                        fontWeight: "bold",
                        width:"180px",
                        marginTop:"-80px",
                        marginLeft:"1000px",
                        height:"50px",
                        color:"black"
                      }}>Start Interview</Button><br></br><br></br><br></br>
             <CompanyFooter/>
        </div>
        
    )
}

export default StartInterview
