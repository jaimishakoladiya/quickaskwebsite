import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
 import VisibilityIcon from '@material-ui/icons/Visibility';
  import DeleteIcon from '@material-ui/icons/Delete';
  import { useHistory } from "react-router-dom";
import axios from 'axios'
import { connect } from 'react-redux';
import { getadminview } from '../../redux/actions/interview/InterviewAction';


function  ViewDelete(props) {
  const [open, setOpen] = React.useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.token;
  const handleClickOpen = async () => {
    setOpen(true);
    
  };
  const history = useHistory();
  const handleClose = async () => {
    const res=await axios({
      method:'post',
      url:'http://localhost:2002/deleteCandidate',
      data:{candidates:props.id},              
      headers:{
        Authorization:token
      }
    })
    console.log(res.data)
  props.getadminview()
    setOpen(false);
  };

  return (
    <div>
        
        <button id="edit_btn" onClick={() => history.push("/viewrecord")}>       <VisibilityIcon/>
         </button>
       
       <button id="delete_btn"  onClick={handleClickOpen} > <DeleteIcon/> 
         </button> 
      
      <Dialog
        open={open}                                                              
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div style={{borderTop:"10px solid darkcyan"}}>
        <DialogTitle id="max-width-dialog-title"><h3>Success</h3></DialogTitle>
        <DialogContent style={{ width: "400px" }}>
          <DialogContentText>
      <h4>Interview Event Delete Succesfully.</h4>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
  
          <Button onClick={handleClose}
         variant="contained" style={{ backgroundColor: "#008b8b" }}  autoFocus>
          <h3>Ok</h3> 
          </Button>
        </DialogActions>
        </div>
      </Dialog>
    </div>
  );
}
const mapStateToProps=state=>{
  return {
    data:state.interview
  }
}
const mapDispatchToProps=dispatch=>{
  return {
    
    getadminview:()=>{dispatch(getadminview())}
    
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ViewDelete);