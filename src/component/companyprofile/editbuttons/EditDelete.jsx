import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
function ViewDelete() {
  return (
    <>
      <button id="edit_btn">
        <EditIcon />
      </button>
      <button id="delete_btn">
        <DeleteIcon />
      </button>
    </>
  );
}
export default ViewDelete;
