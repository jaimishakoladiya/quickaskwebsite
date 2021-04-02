import React from 'react'
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

function ViewDelete() {
    return (
        <>
      <button style={{backgroundColor:"darkcyan",color:"white",width:"40px",height:"35px",borderRadius:"6px", borderColor:" darkcyan" }}>
       <VisibilityIcon/>
         </button>
         
       <button style={{backgroundColor:" #f8384b",color:"white",width:"40px",height:"35px",marginLeft:"4px",borderRadius:"6px",borderColor:"#dc3545"}}>
         <DeleteIcon/>
         </button>
         
        
        </>
    )
}

export default ViewDelete
