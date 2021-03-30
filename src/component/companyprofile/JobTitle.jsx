import React from "react";
import Button from "@material-ui/core/Button";
import AddJob from "./addbuttons/AddJob";

const JobTitle = () => {
  return (
    <>
      <div className="JobTitle_card1">
        <h5 className="JobTitle_title-font">Job Title</h5>
        <table>
          <tr>
            <th>Name</th>
            <th>Depatment</th>
            <th>Action</th>
          </tr>

          <tr>
            <td>kuku</td>
            <td>bhaw</td>
            <td>minu</td>
          </tr>
        </table>
        <br></br> <AddJob />
        <br></br>
      </div>
    </>
  );
};

export default JobTitle;
