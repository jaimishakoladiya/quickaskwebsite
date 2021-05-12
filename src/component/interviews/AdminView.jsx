import React from 'react'
import "./Interviews.css";
import CreateData from "./CreateData";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import CompanyFooter from '../companyprofile/CompanyFooter';
<<<<<<< HEAD
=======

>>>>>>> f4b9d3b648972a15af828b25977f5b4354d377b1

function AdminView() {
    return (
     
        <div>
             <div className="detail-data">
        <div className="detail-header1">
          <h5>ALLCANDIDATES</h5>
          <div className="detail-input">
           <h6>Search</h6> 
            <TextField
              type="date"
              style={{ margin: "20px" }}
              id="outlined-basic"
              variant="outlined"
            />
           
          </div>
        </div>
     
       <div className="detail-header2">
    
       <TableContainer >
        <Table aria-label="customized table">
        <TableHead id="headercss" >
            
          
              <TableHead id="headercss">Name</TableHead>
        
             <TableHead id="headercss" >JobTitle</TableHead>
   
           <TableHead id="headercss" >Status</TableHead>
            <TableHead id="headercss" >Date</TableHead>
           
            <TableHead id="headercss" >score</TableHead>
            <TableHead id="headercss" >Action</TableHead>
          
          </TableHead>
       
          <TableRow>
          <div className="interview_card1">
         <CreateData/>    </div>
          </TableRow>   
          
 

        </Table>
        
        </TableContainer> 
      
     
       
     </div>
  
     </div>
<<<<<<< HEAD
  
=======
  <CompanyFooter/>
>>>>>>> f4b9d3b648972a15af828b25977f5b4354d377b1
        </div>
    )
}

export default AdminView
