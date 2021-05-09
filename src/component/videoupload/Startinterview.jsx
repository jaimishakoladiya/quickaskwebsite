import React from 'react'

import img1 from "../images/admin.png"
import Grid from "@material-ui/core/Grid";
import logo from "../images/logo2.png"
import './Video.css'
import Button from "@material-ui/core/Button";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import CompanyFooter from '../companyprofile/CompanyFooter'
// import "../companyprofile/Company.css"
function Startinterview() {
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
    <th><PersonAddIcon style={{backgroundColor:"darkcyan",marginRight:"-160px",width:"35",height:"35",borderRadius:"50%"}}/></th>
    
  </tr><br/>
  <tr>
    <th align="left" style={{fontSize:"18px",color:"gray"}}>2. To stop recording the test video,<br/> click on the Stop button</th>
    <th align="right"><PersonAddIcon style={{backgroundColor:"darkcyan",marginRight:"-100px",width:"35",height:"35",borderRadius:"50%"}}/></th>
   
  </tr><br/>
  <tr>
    <th align="left" style={{fontSize:"18px",color:"gray"}}>3. To ensure your video recorded <br/>properly, click on the play button</th>
    <th align="right"><PersonAddIcon style={{backgroundColor:"darkcyan",marginRight:"-100px",width:"35",height:"35",borderRadius:"50%"}}/></th>
   
  </tr><br/>
 
</table><br/>
<h3>You can repeat those steps until you are satisfied with <br/>your video.</h3><br/><br/>
<h3>After that, you can click on the Start Interview button  </h3>
               </Grid>
              
               <Grid id="start1_grid" item xs>
               <div style={{border:"4px solid darkcyan",borderRadius:"30px"}}>
               <div>
               <img style={{ height: "300px", width: "500px" }} src={img1}></img>
               </div><br/>
             
              <table>
                <th ><PersonAddIcon style={{backgroundColor:"darkcyan",marginRight:"30px",marginLeft:"190px",width:"35",height:"35",borderRadius:"50%"}}/></th>
                <th><PersonAddIcon style={{backgroundColor:"darkcyan",marginRight:"30px",width:"35",height:"35",borderRadius:"50%"}}/></th>
                <th><PersonAddIcon style={{backgroundColor:"darkcyan",marginRight:"30px",width:"35",height:"35",borderRadius:"50%"}}/></th>
              </table><br/>
             
               </div>
                 
               </Grid>
              
           </Grid>
           <Button style={{backgroundColor: "darkcyan",
                        fontWeight: "bold",
                        width:"180px",
                        marginTop:"-50px",
                        marginLeft:"1050px",
                        height:"50px",
                        color:"black"
                      }}>Start Interview</Button><br></br><br></br><br></br>
             <CompanyFooter/>
        </div>
        
    )
}

export default Startinterview
