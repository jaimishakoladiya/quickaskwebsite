import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import Slide from "@material-ui/core/Slide";
import "./alert.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
function AlertBox(props) {
  const closebox = () => {
    props.closealert();
  };

  return (
    <div>
      <Dialog open={props.setopenalert} TransitionComponent={Transition}>
        <div id="error-dialog">
          <DialogTitle>
            <h3> Alert</h3>
          </DialogTitle>
          <DialogContent style={{ width: "400px" }}>
            <h4> {props.error}</h4>
          </DialogContent>
          <DialogActions>
            <Button style={{ backgroundColor: "#008b8b" }} onClick={closebox}>
          
             <h3>Ok</h3> 
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
}

export default AlertBox;
