import react, { useState } from 'react';
// import Select from 'react-select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import './Interviews.css';
import CreateInterview from './CreateInterview';
const CandidateDetails = () =>{
  const style={
    fontSize : "17px",
    fontWeight:"bold"
    
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
        <div className="btn"><Button onClick = {OpenBox} variant="contained" color="secondary" >
        Create Interview
        </Button></div><br></br>
        {open==true?
          <CreateInterview/>
        :null}
        <br></br>
        <div className="comdata">
        <div className="header1">
           <h4>ALLCANDIDATES</h4>
           <div className='input'>Search
             <TextField  type="date" style={{ margin:'15px'}} id="outlined-basic"  variant="outlined" />
             <TextField id="outlined-basic" label="By Name or ID" variant="outlined" />
           </div>
        </div>
       <div className="header2">
       <TableContainer >
        <Table aria-label="customized table">
        <TableHead style={style} >
          <TableRow style={style}>
            <TableCell style={style}>Date</TableCell>
            <TableCell style={style} align="center">Job Title</TableCell>
            <TableCell style={style} align="center">Department</TableCell>
            <TableCell style={style} align="center">Manager</TableCell>
            <TableCell style={style} align="center">Candidate</TableCell>
            <TableCell style={style} align="center">Duration</TableCell>
            <TableCell style={style} align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        </Table>
        </TableContainer>
       
       </div>
       <h1 className="NDFound">No Data Found</h1>
     </div>
     </>
    );
}
export default CandidateDetails;