import React from "react";
import AddManager from "./addbuttons/AddManager";
import { connect } from "react-redux";

import EditManager from "./editbuttons/EditManager";
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
            props.data.manager.map((item,index)=>{
              var date=new Date(item.created_at)
              return(
                <>
        
          <tr className="company-tr" style={{fontSize:"15px"}}>
            <td className="company-td">{item.firstname} {item.lastname}</td>
            <td className="company-td">{item.email}</td>
            <td className="company-td">{item.registration_status}</td>
            <td className="company-td">{date.toLocaleDateString() + date.toLocaleTimeString()}</td>
            <td className="company-td">{item.isDeleted?"Deleted":"not deleted"}</td>
            <td className="company-td" id="Action_css">
           <EditManager id={index}/>
            </td>
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
