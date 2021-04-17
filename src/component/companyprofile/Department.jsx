import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddDepartment from "./addbuttons/AddDepartment";
import { connect } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import EditDepartment from "./editbuttons/EditDepartment";
import AlertBox from "../alert/AlertBox";

const Department = (props) => {
  // console.log("dept" + props.data.deptdata.department)
  const [openedit, setopenedit] = useState(true);
  const closeedit = () => {
    setopenedit(false);
  };

  const openeditdailog = () => {
    setopenedit(true);
    console.log(openedit);
  
    return <EditDepartment openedit={openedit} closeedit={closeedit} />;
  };
  return (
    <>
      <div className="Department_card1">
        <h5 className="Department_title-font">Department</h5>
        <table className="company-table">
          <tr className="company-tr">
            <th className="company-th">Name</th>
            <th className="company-th">Cost center</th>
            <th className="company-th" id="Action_css">
              Action
            </th>
          </tr>

          {props.data.deptdata.map((item, index) => {
            return (
              <>
                <tr className="company-tr">
                  <td className="company-td">{item.department}</td>
                  <td className="company-td">{item.costcenter}</td>
                  <td className="company-td" id="Action_css">
                  
                      <EditDepartment id={index}/>
                    
                  </td>
                </tr>
              </>
            );
          })}
        </table>
        <br></br> <AddDepartment />
        <br></br>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    data: state.companyprofile,
  };
};
export default connect(mapStateToProps)(Department);
