import React from 'react'
import PersonIcon from "@material-ui/icons/Person";
import CloseIcon from "@material-ui/icons/Close";
import Chip from "@material-ui/core/Chip";

const Step1AddField =(props)=>{
    const handleDelete = () => {};
    return(
        <Chip
        id="Chip_box"
        icon={<PersonIcon />}
        label={props.Records}
         //onClick={handleCickOpen}
        onDelete={handleDelete}
        deleteIcon={<CloseIcon />}
      ></Chip>
      
    );
}
export default Step1AddField;