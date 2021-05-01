import react, { useState } from "react";
// import Select from 'react-select';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import "./Interviews.css";

import CreateInterview from "./CreateInterview";
import {connect} from 'react-redux';
import CreateData from "./CreateData";
import axios from "axios";
import { getmanager } from "../../redux/actions/interview/InterviewAction";

const CandidateDetails = (props) => {
  const [open, SetOpen] = useState(false);
  const user=JSON.parse(localStorage.getItem('user'));
  const token=user.token;
  const OpenBox = async () => {
    if (open == false) {
      SetOpen(true);
      
    } else {
      SetOpen(false);
    }

    const res =await axios({
      method:"get",
      url:"http://localhost:2002/getManager",
      headers:{
        Authorization:token
      }
    })
    console.log(res.data)
    props.getmanager(res.data.data)
    console.log(props.data.manager)
  };

  ///////////new
  const style = {
    fontSize: "17px",
    fontWeight: "bold",
  };
  const style2 = {
    fontSize: "17px",
    fontWeight: "bold",
  };
  const [openrow, setopen1] = useState(false);
  const [openrow2, setopen2] = useState(false);
  const [expand, setexpand] = useState(
    <ArrowRightIcon
      style={{ color: "darkcyan", fontSize: "50px", cursor: "pointer" }}
    />
  );
  const [expand1, setexpand1] = useState(
    <ArrowRightIcon
      style={{ color: "darkcyan", fontSize: "50px", cursor: "pointer" }}
    />
  );

  const expandrowfunc = () => {
    // setopen(true);

    if (openrow == false) {
      setopen1(true);
    } else {
      setopen1(false);
      setexpand(
        <ArrowRightIcon
          style={{ color: "darkcyan", fontSize: "50px", cursor: "pointer" }}
        />
      );
    }
  };
  const expandrowfunc1 = () => {
    // setopen(true);

    if (openrow2 == false) {
      setopen2(true);
    } else {
      setopen2(false);

      setexpand1(
        <ArrowRightIcon
          style={{ color: "darkcyan", fontSize: "50px", cursor: "pointer" }}
        />
      );
    }
  };

  const changeicon = () => {
    setexpand(
      <ArrowDropDownIcon
        style={{ color: "darkcyan", fontSize: "50px", cursor: "pointer" }}
      />
    );
    setexpand1(
      <ArrowDropDownIcon
        style={{ color: "darkcyan", fontSize: "50px", cursor: "pointer" }}
      />
    );
  };
  return (
    <>
      <div id="create-btn">
        <Button onClick={OpenBox} variant="contained" color="secondary">
          Create Interview
        </Button>
      </div>
      <br></br>
      {open == true ? <CreateInterview /> : null}
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
        <TableHead id="headercss" >
            <TableRow id="headercss" >
            
              <TableHead id="headercss">Date</TableHead>
             <TableHead id="headercss" >JobTitle</TableHead>
           <TableHead id="headercss" >Department</TableHead>
            <TableHead id="headercss" >Manager</TableHead>
            <TableHead id="headercss" >Candidate</TableHead>
            <TableHead id="headercss" >Duration</TableHead>
            <TableHead id="headercss" >Action</TableHead>
            </TableRow>
          </TableHead>
       
          <TableRow>
          <div className="interview_card1">
         <CreateData/>    </div> </TableRow>
          
 

        </Table>
        
        </TableContainer> 
      
    
 
     </div>
     </div>
     </>
    );
}
const mapStateToProps=state=>{
  return {
    data:state.interview
  }
}
const mapDispatchToProps=dispatch=>{
  return{
    getmanager:(data)=>{dispatch(getmanager(data))}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CandidateDetails);
