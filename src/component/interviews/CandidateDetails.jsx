import react, { useState } from "react";
// import Select from 'react-select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import './Interviews.css';
import InterviewDataGrid from '../interviews/InterviewDataGrid'

import CreateInterview from './CreateInterview';




const CandidateDetails = () =>{
 
  const headercss={
    fontSize : "17px",
    fontWeight:"bold",
  
   
    
  }
   const [open ,SetOpen] = useState(false);
   const OpenBox =()=>{
          if(open==false){
            SetOpen(true);
          }
          else{
            SetOpen(false);
          }
   }
return(
 
        <>
        <div id
        ="create-btn"><Button onClick = {OpenBox} variant="contained" color="secondary" >
        Create Interview
        </Button></div><br></br>
        {open==true?
          <CreateInterview/>
        :null}
        <br></br>
        <div className="detail-data">
        <div className="detail-header1">
          <h5>ALLCANDIDATES</h5>
          <div className="detail-input">
            Search
            <TextField
              type="date"
              style={{ margin: "15px" }}
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
        <TableHead style={headercss} >
        
            <TableCell></TableCell>
              <TableCell style={headercss}>Date</TableCell>
             <TableCell style={headercss} align="center">Job Title</TableCell>
            <TableCell style={headercss} align="center">Department</TableCell>
            <TableCell style={headercss} align="center">Manager</TableCell>
            <TableCell style={headercss} align="center">Candidate</TableCell>
            <TableCell style={headercss} align="center">Duration</TableCell>
            <TableCell style={headercss} align="center">Action</TableCell>
     
          </TableHead>
  <InterviewDataGrid/>
  <InterviewDataGrid/>
        </Table>
        </TableContainer>
       
       </div>
 
     </div>
     
     </>
    );
}
export default CandidateDetails;
