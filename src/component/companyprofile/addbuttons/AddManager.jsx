import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputLabel from "@material-ui/core/InputLabel";
import Slide from "@material-ui/core/Slide";
import CloseIcon from "@material-ui/icons/Close";
import Grid from "@material-ui/core/Grid";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function AddManager() {
  const [open, setOpen] = React.useState(false);
  const maxWidth = "md";
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        style={{ marginBottom: "25px" }}
        variant="contained"
        color="secondary"
        onClick={handleClickOpen}
      >
        Add Manager
      </Button>
      <br />

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        TransitionComponent={Transition}
        fullWidth={true}
        maxWidth={maxWidth}
      >
        <div className="AddManager_primaryHeader">
          <h2>Add Manager </h2>
          <div className="AddManager_closeicon">
            <CloseIcon style={{ color: "black" }} onClick={handleClose} />
          </div>
        </div>
        <DialogTitle id="form-dialog-title"></DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Grid container spacing={3}>
              <Grid container spacing={3} style={{ marginLeft: "10px" }}>
                <Grid item xs>
                  <h3>First Name</h3>
                </Grid>
                <Grid item xs>
                  <h3>Last Name</h3>
                </Grid>
                <Grid item xs>
                  <h3>Email</h3>
                </Grid>
              </Grid>
              <Grid container spacing={3} style={{ marginLeft: "10px" }}>
                <Grid item xs>
                  <TextField
                    style={{ width: "250px", marginTop: "5px" }}
                    placeholder="Enter FirstName"
                    id="standard-basic"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs>
                  <TextField
                    style={{ width: "250px", marginTop: "5px" }}
                    placeholder="Enter LastName"
                    id="standard-basic"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs>
                  <TextField
                    style={{ width: "250px", marginTop: "5px" }}
                    placeholder="Enter Email"
                    id="standard-basic"
                    variant="standard"
                  />
                </Grid>
              </Grid>
              <Grid
                container
                spacing={3}
                style={{ marginTop: "10px", marginLeft: "10px" }}
              >
                <Grid item xs={7}>
                  <h3 className="">Default Question For Department</h3>
                </Grid>
                <Grid item xs={4}>
                  <h3 className="">Time Allocated</h3>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <div className="card1">
                  <TextField
                    style={{ marginLeft: "10px", width: "600px" }}
                    id="standard-basic"
                    label="New Question"
                    variant="standard"
                  />

                  <FormControl style={{ marginLeft: "30px" }}>
                    <InputLabel htmlFor="demo-customized-select-native">
                      min
                    </InputLabel>
                    <NativeSelect id="demo-customized-select-native">
                      <option aria-label="choose country" value="" />
                      <option value={10}>min</option>
                      <option value={20}>0</option>
                      <option value={30}>1</option>
                    </NativeSelect>
                  </FormControl>

                  <FormControl style={{ marginLeft: "30px" }}>
                    <InputLabel htmlFor="demo-customized-select-native">
                      sec
                    </InputLabel>
                    <NativeSelect id="demo-customized-select-native">
                      <option aria-label="choose country" value="" />
                      <option value={10}>sec</option>
                      <option value={20}>0</option>
                      <option value={30}>1</option>
                    </NativeSelect>
                  </FormControl>
                  <br />
                  <br />
                  <Button
                    onClick={handleClose}
                    variant="contained"
                    color="secondary"
                  >
                    Save
                  </Button>
                </div>
              </Grid>
            </Grid>
            <br />
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="primary">
            Cancel
          </Button>

          <Button onClick={handleClose} variant="contained" color="secondary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
