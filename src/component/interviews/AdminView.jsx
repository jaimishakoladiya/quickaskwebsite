import React, { useState } from 'react'
import "./Interviews.css";
import CreateData from "./CreateData";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import CompanyFooter from '../companyprofile/CompanyFooter';
import logo2 from '../images/logo2.png'
function AdminView() {
  const [name,setname]=useState();
  const inputchangefunction=(event)=>{
    setname(event.target.value);
    console.log(name);
  }
    return (
     <div>
         {/* <div style={{marginLeft:"-5%"}}>
             <div className="detail-data"> */}
        {/* <div className="detail-header1">
          <h5>ALLCANDIDATES</h5>
          <div className="detail-input">
           <h6>Search</h6> 
            <TextField
              type="text"
              style={{ margin: "20px" }}
              id="outlined-basic"
              variant="outlined"
              placeholder="Search By Name"
              name="name"
              onChange={inputchangefunction}
            />
           
          </div>
        </div> */}
     
       {/* <div className="detail-header2">
    
       
         <div className="interview_card1"> */}
      
      <CreateData name={name}/>  
         {/* </div> */}
     {/* </div>
  
     </div> */}
     <div>
        
        <div className="interview-footer">
             <img className="interview-footer-logo"  src={logo2}></img>
            <h4 style={{lineHeight:"5px"}}>QuickAsk © 2020.All Rights Reserved</h4>
         
        </div>
    </div>
         {/* </div> */}
        </div>
    )
}

export default AdminView
