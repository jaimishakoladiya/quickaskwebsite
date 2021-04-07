import React from "react";
import Button from "@material-ui/core/Button";
import AddJob from "./addbuttons/AddJob";

const JobTitle = () => {
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

          <tr className="company-tr">
            <td className="company-td">kuku</td>
            <td className="company-td">bhaw</td>
            <td className="company-td">minu</td>
          </tr>
        </table>
        <br></br> <AddJob />
        <br></br>
      </div>
    </>
  );
};

export default JobTitle;
