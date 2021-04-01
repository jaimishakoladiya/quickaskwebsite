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
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import CreateInterview from './CreateInterview';
const InterviewDataGrid = () => {
  const [openrow, setopen] = useState(false);
  const [expand, setexpand] = useState(<ArrowRightIcon style={{ color: "darkcyan", fontSize: "50px", cursor: "pointer" }} />);

  const style = {
    fontSize: "17px",
    fontWeight: "bold",


  }
  const style2 = {
    fontSize: "17px",
    fontWeight: "bold",

  }
  const style3 = {
    marginTop: "15px",
    marginLeft: "70px",
  }
  const style4 = {

  }
  const [open, SetOpen] = useState(false);
  const OpenBox = () => {
    if (open == false) {
      SetOpen(true);
    }
    else {
      SetOpen(false);
    }
  }

  const expandrowfunc = () => {
    // setopen(true);

    if (openrow == false) {
      setopen(true);
    }
    else {
      setopen(false)
      setexpand(<ArrowRightIcon style={{ color: "darkcyan", fontSize: "50px", cursor: "pointer" }} />)
    }

  }
  const changeicon = () => {
    setexpand(<ArrowDropDownIcon style={{ color: "darkcyan", fontSize: "50px", cursor: "pointer" }} />)
  }
  return (

    <>

     
           


              <TableRow style={style2}>
                <TableCell style={style}><div onClick={() => {
                  changeicon()
                  expandrowfunc()
                }
                }>{expand}</div></TableCell>
                <TableCell style={style2}>2-1-20</TableCell>
                <TableCell style={style2} align="center">web</TableCell>
                <TableCell style={style2} align="center">Department</TableCell>
                <TableCell style={style2} align="center">Manager</TableCell>
                <TableCell style={style2} align="center">Candidate</TableCell>
                <TableCell style={style2} align="center">Duration</TableCell>
                <TableCell style={style2} align="center">Action</TableCell>
              </TableRow>

              {openrow ? <> <div className="openbox">
                <TableRow style={style}>
                  <TreeView

                    defaultCollapseIcon={<ArrowDropDownIcon style={{ fontSize: "29px", color: "darkcyan" }} />}
                    defaultExpandIcon={<ArrowRightIcon style={{ fontSize: "29px", color: "darkcyan" }} />}>
                    {/* Question List */}
                    <TreeItem nodeId="1" label="Questions List" style={style3}> <TreeItem nodeId="4" style={style4} />
                      <TableHead>
                        <TableRow>
                          <TableCell align="left"><h3 style={{ color: "darkcyan", marginLeft: "19px", fontSize: "18px" }}>Questions</h3></TableCell>
                          <TableCell ><h3 style={{ marginLeft: "500px", color: "darkcyan", fontSize: "18px" }}>Total Allowed</h3></TableCell>
                        </TableRow> </TableHead>
                      <TableCell id="name">1.kjk</TableCell>
                      <TableCell id="question-box">3mins<br />
                      </TableCell>
                      <TableRow><TableCell id="name">2.kk</TableCell>
                        <TableCell id="question-box">0 min</TableCell>
                      </TableRow>
                      <TableRow><TableCell id="name"></TableCell>
                        <TableCell id="question-box">Duration: 3 mins
                      </TableCell>
                      </TableRow>
                    </TreeItem>

                    
                      {/* Candidates */}
                    <TreeItem nodeId="2" label="All Candidates" style={style3} > <TreeItem nodeId="5" />
                      <TableHead>
                        <TableRow >
                          <TableCell id="candidate-css">Candidate</TableCell>
                          <TableCell id="candidate-css">Candidate ID</TableCell>
                          <TableCell id="candidate-css" >Interview Tries</TableCell>
                          <TableCell id="candidate-css">Email</TableCell>
                          <TableCell id="candidate-css">Status</TableCell>
                          <TableCell id="candidate-css">Action </TableCell>
                        </TableRow>
                        <TableRow >
                          <TableCell id="candidate-inline-css">1.kljk</TableCell>
                          <TableCell id="candidate-inline-css"></TableCell>
                          <TableCell id="candidate-inline-css" >0</TableCell>
                          <TableCell id="candidate-inline-css">Email@gmail.com</TableCell>
                          <TableCell id="candidate-inline-css">khjk</TableCell>
                          <TableCell id="candidate-inline-css">Edit </TableCell>
                        </TableRow>
                      </TableHead><br />
                      <Button variant="contained" color="secondary" style={{ marginLeft: "25px" }}>
                        Add  </Button>


                   {/* Panel Members */}
                    </TreeItem>
                    <TreeItem nodeId="3" label="Panel Member" style={style3} > <TreeItem nodeId="6" />
                      <TableHead>
                        <TableRow >
                        <TableCell></TableCell>
                          <TableCell id="panel-css">Panel Member</TableCell>
                          <TableCell id="panel-css"><h3 style={{ marginLeft: "400px", fontSize: "18px" }}>Email</h3></TableCell>
                          <TableCell id="panel-css" >Action</TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                        <TableRow >
                        <TableCell></TableCell>
                          <TableCell id="panel-inline-css">1.khjhj</TableCell>

                          <TableCell id="panel-inline-css">email@gmail.com</TableCell>
                          <TableCell id="panel-inline-css" >Action</TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                        <br />
                      </TableHead>
                      <Button variant="contained" color="secondary" style={{ marginLeft: "25px" }}>
                        Add</Button>
                    </TreeItem>
                  </TreeView>
                  <h1 style={{ marginBottom: "14px", lineHeight: "60px", marginLeft: "400px" }}>No Result found</h1>
                </TableRow>
              </div></> : null}
           
         
     
    </>
  );
}
export default InterviewDataGrid;