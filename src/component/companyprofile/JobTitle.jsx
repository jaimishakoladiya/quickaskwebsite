import React from "react";
import AddJob from "./addbuttons/AddJob";
import { connect } from "react-redux";
// import EditDepartment from "./editbuttons/EditDepartment";
import EditJob from "./editbuttons/EditJob";

const JobTitle = (props) => {
  return (
    <>
      <div className="JobTitle_card1">
        <h5 className="JobTitle_title-font">Job Title</h5>
        <table className="company-table">
          <tr className="company-tr">
            <th className="company-th">Name</th>
            <th className="company-th">Depatment</th>
            <th className="company-th" id="Action_css">
              Action
            </th>
          </tr>
          {props.data.job.map((item, index) => {
            return (
              <>
                <tr className="company-tr">
                  <td className="company-td">{item.title}</td>
                  <td className="company-td">{item.department}</td>
                  <td className="company-td" id="Action_css">
                    <EditJob id={index} />
                  </td>
                </tr>
              </>
            );
          })}
        </table>
        <br></br> <AddJob />
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

export default connect(mapStateToProps)(JobTitle);
