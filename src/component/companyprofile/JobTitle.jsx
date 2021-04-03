import React from "react";
import Button from "@material-ui/core/Button";
import AddJob from "./addbuttons/AddJob";

import Department from './Department';
import { connect } from 'react-redux';

const JobTitle = (props) => {
  return (
    <>
      <div className="JobTitle_card1">
        <h5 className="JobTitle_title-font">Job Title</h5>
        <table className="company-table">
          <tr className="company-tr">
            <th className="company-th">Name</th>
            <th className="company-th">Depatment</th>
            <th className="company-th">Action</th>
          </tr>
    {
      props.data.jobdata.map((item,index)=>{
        return(
          <>
          <tr className="company-tr">
        <td className="company-td">{item.jobtitle}</td>
        <td className="company-td">{item.department}</td>
        <td className="company-td">minu</td>
      </tr>
   
          </>
        )
      })}
        
          
        </table>
        <br></br> <AddJob />
        <br></br>
      </div>
    </>
  );
};
const mapStateToProps=state=>{
  return{
    data:state.companyprofile
  }
}

export default connect(mapStateToProps)(JobTitle);
