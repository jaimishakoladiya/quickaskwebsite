import React from "react";
import Button from "@material-ui/core/Button"
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
const ButtonDelete = (props) => {
  const handleClickClose = () => {
    props.closedelete();
  };
  return (
    <div>
      <Dialog
        open={props.opendelete}
        aria-labelledby="max-width-dialog-title">
        <DialogTitle id="max-width-dialog-title">PLEASE CONFIRM</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are You Sure ! You Want To Remove Candidate ..?
          </DialogContentText>
          <DialogActions>
            <Button
              onClick={handleClickClose}
              variant="contained"
              color="primary">Cancle
            </Button>
            <Button variant="contained" color="secondary">
              Delete
            </Button>
          </DialogActions>
          <DialogContent />
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default ButtonDelete;
