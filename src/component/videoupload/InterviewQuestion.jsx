import React from 'react'
import img1 from "../images/admin.png"
import Grid from "@material-ui/core/Grid";
import logo from "../images/logo2.png"

import Button from "@material-ui/core/Button";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import VideoFooter from './VideoFooter';
import VideoHeader from './VideoHeader';

function InterviewQuestion() {
    return (
        <div>
         <VideoHeader/>
        {/* <div className="main_div">
          <img src={img1}/>
         <Button style={{backgroundColor: "darkcyan",
                        fontWeight: "bold",
                        width:"180px",
                        marginTop:"-50px",
                        marginLeft:"1050px",
                        height:"50px",
                        color:"black"
                      }}>Start Interview</Button>
        </div> */}
        
        {/* <div className="main_div">
               <div>
               <img style={{ height: "300px", width: "500px" }} src={img1}></img>
               </div><br/>
            </div> */}
     <div className="main1_div">             
<h2>Q.1</h2>
<h3>hjhhh?</h3></div>
            <div className="main_div">
     
<div>  <img style={{ height: "350px", width: "640px" ,border:"8px solid darkcyan"}} src={img1}></img>

<div className="main2_div">
<div>
<Button style={{backgroundColor: "darkcyan",
                        fontWeight: "bold",
                        width:"180px",
                       marginLeft:"25px",
                       marginTop:"11px",
                        height:"50px",
                        color:"black"
                      }}>Next Question</Button></div>
</div> </div>
   
            </div>
            
           <VideoFooter/>
        </div>
        
    )
}

export default InterviewQuestion
