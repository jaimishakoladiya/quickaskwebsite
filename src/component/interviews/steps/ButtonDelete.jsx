import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const ButtonDelete = () => {
  const [open, SetOpen] = useState(false);
  const [Yesopen , SetYesopen] = useState(false);
  const HandleClickOpen = () => {
    SetOpen(true);
  };
  const handleClickClose = () => {
    SetOpen(false);
  };
  const YesFunction = () =>{
  
     SetYesopen(true);
  }
  const OKFunction =()=>{
    SetYesopen(false);
    SetOpen(false);
  }
  return (
    <React.Fragment>
      <Button onClick={HandleClickOpen} variant="contained" color="secondary">
        <DeleteIcon />
      </Button>
      <Dialog
        open={open}
        onClose={handleClickClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">Are You Sure ..?:</DialogTitle>
        <DialogContent>
          <DialogContentText>You Want To Delete This Item</DialogContentText>
          <DialogActions>
            <Button
              onClick={handleClickClose}
              variant="contained"
              color="primary">
              Cancle
            </Button>
            <Button
              onClick={YesFunction}
              variant="contained"
              color="secondary">
              Delete
            </Button>
            <Dialog
            open={Yesopen}
            onClose={handleClickClose}
            aria-labelledby="max-width-dialog-title" >
                      <DialogTitle id="max-width-dialog-title">Deleted Successfully</DialogTitle>
                      <DialogContent>
                      <DialogContentText><CheckCircleIcon/></DialogContentText>
                      </DialogContent>
                      <Button
              onClick={OKFunction}
              variant="contained"
              color="secondary">
              OK
            </Button>
            </Dialog>
          </DialogActions>

          <DialogContent />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};
export default ButtonDelete;
