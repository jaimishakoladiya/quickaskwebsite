import React from "react";
import Button from "@material-ui/core/Button";
import AddDepartment from "./addbuttons/AddDepartment";

const Department = () => {
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

          <tr className="company-tr">
            <td className="company-td">kuku</td>
            <td className="company-td">bhaw</td>
            <td className="company-td">minu</td>
          </tr>
        </table>
        <br></br> <AddDepartment />
        <br></br>
      </div>
    </>
  );
};

export default Department;
