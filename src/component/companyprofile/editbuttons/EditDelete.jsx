
import React from 'react'
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';

function ViewDelete() {
    return (
        <>
      <button  id="edit_btn">
       <EditIcon/>
         </button>
         
       <button id="delete_btn">
         <DeleteIcon/>
         </button>
         
        
        </>
    )
}

export default ViewDelete
