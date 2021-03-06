import React, { useState } from 'react'
import "./Interviews.css";
import CreateData from "./CreateData";
import TextField from "@material-ui/core/TextField";
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
  }
    return (
     <div>
         <div style={{marginLeft:"-5%"}}>
             <div className="detail-data">
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
     
       
      
      <CreateData name={name}/>  
       
  
     </div>
     <div style={{margin:"500px"}}></div>
        
        <div className="interview-footer">
             <img className="interview-footer-logo"  src={logo2}></img>
            <h4 style={{lineHeight:"5px"}}>QuickAsk © 2020.All Rights Reserved</h4>
         
        </div>
    </div>
         </div>
        
    )
}
export default AdminView
