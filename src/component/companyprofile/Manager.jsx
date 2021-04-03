import React from "react";
import Button from "@material-ui/core/Button";
import AddManager from "./addbuttons/AddManager";
import { PinDropSharp } from "@material-ui/icons";
import { connect } from "react-redux";
import EditDelete from "./editbuttons/EditDelete";
const Manager = (props) => {
  return (
    <>
      <div className="Manager_card1">
        <h5 className="Manager_title-font">Manager</h5>

        <table className="company-table">
          <tr className="company-tr">
            <th className="company-th">Name</th>
            <th className="company-th">Email</th>
            <th className="company-th">Status</th>
            <th className="company-th">Date</th>
            <th className="company-th">Deleted</th>
            <th className="company-th" id="Action_css">Actions</th>
          </tr>
          {
            props.data.managerdata.map((item,index)=>{
              return(
                <>
        
          <tr className="company-tr">
            <td className="company-td">{item.firstname} {item.lastname}</td>
            <td className="company-td">{item.email}</td>
            <td className="company-td">hey</td>
            <td className="company-td">hey</td>
            <td className="company-td">hey</td>
            <td className="company-td" id="Action_css"><EditDelete /></td>
          </tr>
          </>
          )
            })
          }
        </table>

        <br></br>
        <AddManager />
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

export default connect(mapStateToProps)(Manager);
