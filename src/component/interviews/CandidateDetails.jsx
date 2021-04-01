import react, { useState } from "react";
// import Select from 'react-select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import './Interviews.css';
import InterviewDataGrid from '../interviews/InterviewDataGrid'

import CreateInterview from './CreateInterview';

import DemoGrid from './DemoGrid';




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

   ///////////newwwwwwwwwwwwwwwww
   const style = {
    fontSize: "17px",
    fontWeight: "bold",


  }
  const style2 = {
    fontSize: "17px",
    fontWeight: "bold",

  }
   const [openrow, setopen1] = useState(false);
  const [expand, setexpand] = useState(<ArrowRightIcon style={{ color: "darkcyan", fontSize: "50px", cursor: "pointer" }} />);

   const [open1, SetOpen1] = useState(false);
 

  const expandrowfunc = () => {
    // setopen(true);

    if (openrow == false) {
      setopen1(true);
    }
    else {
      setopen1(false)
      setexpand(<ArrowRightIcon style={{ color: "darkcyan", fontSize: "50px", cursor: "pointer" }} />)
    }

  }
  const changeicon = () => {
    setexpand(<ArrowDropDownIcon style={{ color: "darkcyan", fontSize: "50px", cursor: "pointer" }} />)
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
              style={{ margin: "12px" }}
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

        {/* start new row */}
          
              
                <TableRow/>
 
                <TableRow style={style2}>
                <TableCell style={style}><div onClick={() => {
                  changeicon()
                  expandrowfunc()
                  
                }
                }>{expand}</div></TableCell>
                <TableCell style={style2}>2-1-20</TableCell>
                <TableCell style={style2} align="center">web</TableCell>
                <TableCell style={style2} align="center">Android</TableCell>
                <TableCell style={style2} align="center">4k</TableCell>
                <TableCell style={style2} align="center">4</TableCell>
                <TableCell style={style2} align="center">2min</TableCell>
                <TableCell style={style2} align="center">Action</TableCell>
              </TableRow>

              {openrow ? <> <div className="openbox"  > 
              {/* <InterviewDataGrid/> */}
              <DemoGrid/>
              </div>
                </>:null}
                
              
                <TableRow/>
        </Table>
        
        </TableContainer>
      
       </div>
 
     </div>
     
     </>
    );
}
export default CandidateDetails;
