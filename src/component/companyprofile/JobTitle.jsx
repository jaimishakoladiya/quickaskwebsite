import React , { useState }from "react";
import AddJob from "./addbuttons/AddJob";
import { connect } from 'react-redux';
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
// import EditDepartment from "./editbuttons/EditDepartment";
import EditJob from "./editbuttons/EditJob";

const JobTitle = (props) => {
  const [openedit,setopenedit]=useState(true);
   const closeedit=()=>{
     setopenedit(false);
   }

  const openeditdailog=()=>{
    setopenedit(true);
    return <EditJob openedit={openedit} closeedit={closeedit}/>
  }
  return (
    <>
      <div className="JobTitle_card1">
        <h5 className="JobTitle_title-font">Job Title</h5>
        <table className="company-table">
          <tr className="company-tr">
            <th className="company-th">Name</th>
            <th className="company-th">Depatment</th>
            <th className="company-th" id="Action_css">Action</th>
          </tr>
    {
      props.data.jobdata.map((item,index)=>{
        return(
          <>
          <tr className="company-tr">
        <td className="company-td">{item.jobtitle}</td>
        <td className="company-td">{item.department}</td>
        <td className="company-td" id="Action_css">
        {/* <button id="edit_btn">
                      <EditIcon />
                    </button>
                    <button id="delete_btn">
                      <DeleteIcon />
                    </button> */}
                  <EditJob id={index}/>
        </td>
      </tr>
   
          </>
        )
      })}
        
          
        </table>
        <br></br> <AddJob />
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

export default connect(mapStateToProps)(JobTitle);
