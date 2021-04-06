import React from 'react'
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
function ViewDelete() {
  const history = useHistory();
    return (
        <>
      <button style={{backgroundColor:"darkcyan",color:"white",cursor:"pointer",width:"40px",height:"35px",borderRadius:"6px", borderColor:" darkcyan",position:"relative" }}>
       <VisibilityIcon onClick={() => history.push("/viewrecord")}/>
         </button>
         
       <button style={{backgroundColor:" #f8384b",color:"white",cursor:"pointer",width:"40px",height:"35px",marginLeft:"4px",borderRadius:"6px",borderColor:"#dc3545",position:"relative"}}>
         <DeleteIcon/>
         </button>
         
        
        </>
    )
}

export default ViewDelete
