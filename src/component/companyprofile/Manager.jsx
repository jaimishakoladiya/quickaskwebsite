import React from "react";
import Button from "@material-ui/core/Button";
import AddManager from "./addbuttons/AddManager";

const Manager = () => {
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
            <th className="company-th">Actions</th>
          </tr>

          <tr className="company-tr">
            <td className="company-td">hey</td>
            <td className="company-td">ck</td>
            <td className="company-td">hey</td>
            <td className="company-td">hey</td>
            <td className="company-td">hey</td>
            <td className="company-td">hey</td>
          </tr>
        </table>

        <br></br>
        <AddManager />
        <br></br>
      </div>
    </>
  );
};

export default Manager;
