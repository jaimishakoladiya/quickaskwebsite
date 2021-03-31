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

import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

import CreateInterview from './CreateInterview';




const CandidateDetails = () =>{
 
  const style={
    fontSize : "17px",
    fontWeight:"bold",
   

    
  }
  const style2={
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
        
        <div className="create-btn"><Button onClick = {OpenBox} variant="contained" color="secondary" >
        Create Interview
        </Button></div><br></br>
        {open==true?
          <CreateInterview/>
        :null}
        <br></br>
        <div className="detail-data">
        <div className="detail-header1">
           <h5>ALLCANDIDATES</h5>
           <div className='detail-input'>Search
             <TextField  type="date" style={{ margin:'15px'}} id="outlined-basic"  variant="outlined" />
             <TextField   id="outlined-basic" label="By Name or ID" variant="outlined" />
           </div>
        </div>
       <div className="detail-header2">
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

        
          <TableRow style={style2}>
         <TableCell style={style2}>Date</TableCell>
          <TableCell style={style2} align="center">Job Title</TableCell>
            <TableCell style={style2} align="center">Department</TableCell>
            <TableCell style={style2} align="center">Manager</TableCell>
            <TableCell style={style2} align="center">Candidate</TableCell>
            <TableCell style={style2} align="center">Duration</TableCell>
            <TableCell style={style2} align="center">Action</TableCell>
            </TableRow>

            <TableRow style={style}>
          <TreeView
   
      defaultCollapseIcon={<ExpandMoreIcon/>}
      defaultExpandIcon={<ChevronRightIcon />}
      
    >
       <TableRow style={style2}>
        <TreeItem nodeId="1" label="DATE">
          <TableRow style={style}>    
        
    <TreeItem nodeId="2" label="Webstorm" > <TreeItem nodeId="3" label="src"/> </TreeItem>
    </TableRow>
         <TreeItem nodeId="4" label="Webstorm" > <TreeItem nodeId="5" label="src"/> </TreeItem>
         <TreeItem nodeId="6" label="Webstorm" > <TreeItem nodeId="7" label="src"/> </TreeItem>
          </TreeItem>
        
          </TableRow>
    
    </TreeView>
    </TableRow>
       
      
        </Table>
        </TableContainer>

       </div>
       {/* <h1 className="detail-found-data">No Data Found</h1> */}
     </div>
     
     </>
    );
}
export default CandidateDetails;