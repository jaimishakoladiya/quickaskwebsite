import React, { useState } from "react";
import PersonIcon from "@material-ui/icons/Person";
import CloseIcon from "@material-ui/icons/Close";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const Step1AddField = (props) => {
  console.log(props.newrecords)
  const [open, SetOpen] = useState(false);
  const [Yesopen, SetYesopen] = useState(false);
  const handleClickOpen = () => {
    SetOpen(true);
  };
  const handleClickClose = () => {
    SetOpen(false);
  };
  const YesFunction = () => {
    SetYesopen(true);
  };
  const OKFunction = () => {
    SetYesopen(false);
    SetOpen(false);
    props.deletefunction(props.id);
  };
  const handleDelete = () => {};

  return (

    <>
      <Chip
        id="Chip_box"
        icon={<PersonIcon />}
        label={`${props.newrecords.firstname}  ${props.newrecords.lastname}`}
         onClick={handleClickOpen}
        onDelete={handleDelete}
        deleteIcon={<CloseIcon />}
      ></Chip>
      <Dialog
      //id="Delete_dailog"
        open={open}
        onClose={handleClickClose}
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
            <Button onClick={YesFunction} variant="contained" color="secondary">
              Delete
            </Button>
            <Dialog
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
            </Dialog>
          </DialogActions>
          <DialogContent />
        </DialogContent>
      </Dialog>
    </>
  );
};
export default Step1AddField;
