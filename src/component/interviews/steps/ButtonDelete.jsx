import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const ButtonDelete = (props) => {


  
  const handleClickClose = () => {

    props.closedelete();
  
  };
  // const YesFunction = () => {
  //   SetYesopen(true);
  // };
  // const OKFunction = () => {
  //   SetYesopen(false);
  //   SetOpen(false);
  //   props.deletefunction(props.id);
  // };
  // const handleDelete = () => {};
  // console.log(props.newrecords)
  return (
    <div>
    
      {/* <Button variant="contained" color="secondary">
                      <DeleteIcon/>
                    </Button> */}
     
      <Dialog
        open={props.opendelete}
        //onClose={handleClickClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">PLEASE CONFIRM</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are You Sure ! You Want To Remove Candidate ..?
          </DialogContentText>
          <DialogActions>
            <Button
              onClick={handleClickClose}
              variant="contained"
              color="primary"
            >
              Cancle
            </Button>
            <Button variant="contained" color="secondary">
              Delete
            </Button>

            {/* <Dialog
              open={Yesopen}
              onClose={handleClickClose}
              aria-labelledby="max-width-dialog-title"
            >
              <DialogTitle id="max-width-dialog-title">
                Deleted Successfully
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  <CheckCircleIcon />
                </DialogContentText>
              </DialogContent>
              <Button
                onClick={OKFunction}
                variant="contained"
                color="secondary"
              >
                OK
              </Button>
            </Dialog> */}
          </DialogActions>

          <DialogContent />
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default ButtonDelete;
