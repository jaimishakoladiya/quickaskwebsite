import React from 'react'
import "./Interviews.css";
import CreateData from "./CreateData";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

function AdminView() {
    return (
        <div>
             <div className="detail-data">
        <div className="detail-header1">
          <h5>ALLCANDIDATES</h5>
          <div className="detail-input">
           <h5>Search</h5> 
            <TextField
              type="date"
              style={{ margin: "10px" }}
              id="outlined-basic"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="By Name or ID"
              variant="outlined"
            />
          </div>
        </div>
     
       <div className="detail-header2">
    
       <TableContainer >
        <Table aria-label="customized table">
        <TableHead id="headercss" >
            
            <TableHead id="headercss"></TableHead>
              <TableHead id="headercss">Date</TableHead>
              <TableHead id="headercss"></TableHead>
             <TableHead id="headercss" >JobTitle</TableHead>
   
           <TableHead id="headercss" >Department</TableHead>
            <TableHead id="headercss" >Manager</TableHead>
            <TableHead id="headercss" >Candidate</TableHead>
            <TableHead id="headercss" >Duration</TableHead>
            <TableHead id="headercss" >Action</TableHead>
          
          </TableHead>
       
          <TableRow>
          <div className="interview_card1">
         <CreateData/>    </div> </TableRow>
          
 

        </Table>
        
        </TableContainer> 
      
    
 
     </div>
     </div>

        </div>
    )
}

export default AdminView
