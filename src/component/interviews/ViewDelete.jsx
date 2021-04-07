// import React from 'react'
// import VisibilityIcon from '@material-ui/icons/Visibility';
// import DeleteIcon from '@material-ui/icons/Delete';
// import Button from '@material-ui/core/Button';
// import { useHistory } from 'react-router-dom';
// import { useState } from 'react';
// import ButtonDelete from './steps/ButtonDelete';
// import AlertBox from './../alert/AlertBox';

// function ViewDelete() {
// //   const history=useHistory();
// //   const [opendelete,setopendelete] = useState(true);
// //   const [openalert, setopenalert] = useState(true);
  
 

// // const closedelete =()=>{
// //   setopendelete(false);

// // };
// //   const deletealert =()=>{
// //     console.log("fgh")
// //     setopendelete(true);
// //     return <ButtonDelete
// //     opendelete={opendelete}
// //     closedelete={closedelete}
// //       />
  
// //   };
//   // const closealert = () => {
//   //   setopenalert(false);
//   // };
//   // const erroralert = () => {
//   //   setopenalert(true);
//   //   return (
//   //     <AlertBox
//   //       setopenalert={openalert}
//   //       closealert={closealert}
      
//   //     />
//   //   );
//   // }; 
//     return (
//         <>
//       <button id="edit_btn">
//        <VisibilityIcon/>
//          </button>
//          {/* {deletealert}
//        <button id="delete_btn"
//          onClick={() => {
//            console.log("hg");
//            setopendelete(true);
//              }} > <DeleteIcon/> 
//          </button> */}
//         </>
//     )
// }

// export default ViewDelete
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
 import VisibilityIcon from '@material-ui/icons/Visibility';
  import DeleteIcon from '@material-ui/icons/Delete';
 import { connect } from 'react-redux';



function  ViewDelete(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        
        <button id="edit_btn">       <VisibilityIcon/>
         </button>
       
       <button id="delete_btn"  onClick={handleClickOpen} > <DeleteIcon/> 
         </button> 
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
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

// const mapDispatchToProps = dispatch =>{
//   return{
//     deletecandidate:(id)=>{dispatch(deletecandidate(id))}
//   }
// }
export default ViewDelete