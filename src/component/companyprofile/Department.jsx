import React from "react";

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
            <th className="company-th" id="Action_css">
              Action
            </th>
          </tr>

          {props.data.users.map((item, index) => {
            return (
              <tr className="company-tr" key={index}>
                <td className="company-td">{item.name}</td>
                <td className="company-td">{item.cost_center}</td>
                <td className="company-td" id="Action_css">
                  <EditDepartment id={index} />
                </td>
              </tr>
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
