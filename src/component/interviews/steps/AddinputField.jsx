import React from "react";
import TextField from "@material-ui/core/TextField";

const AddInputField = (props) => {
  return (
    <>
      <TextField
        id="standard-basic"
        openInput={props.openInput}
        placeholder="Fname"
      />
    </>
  );
};
export default AddInputField;
