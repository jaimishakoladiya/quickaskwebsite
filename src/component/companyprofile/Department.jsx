import React from "react";
import Button from "@material-ui/core/Button";
import AddDepartment from "./addbuttons/AddDepartment";
import { connect } from "react-redux";
import EditDepartment from "./editbuttons/EditDepartment";

const Department = (props) => {
  return (
    <>
      <div className="Department_card1">
        <h5 className="Department_title-font">Department</h5>
        <table className="company-table">
          <tr className="company-tr">
            <th className="company-th">Name</th>
            <th className="company-th">Cost center</th>
            <th className="company-th">Action</th>
          </tr>

        {
          props.data.deptdata.map((item,index)=>{
            return(
              <>
              <tr className="company-tr">
            <td className="company-td">{item.department}</td>
            <td className="company-td">{item.costcenter}</td>
            <td className="company-td"><EditDepartment/></td>
          </tr>
              </>
            )
          })
        }
        </table>
        <br></br> <AddDepartment />
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
export default connect(mapStateToProps)(Department);
