import React, { useState, useEffect,useRef } from "react";
import { Field, Formik, Form } from "formik";
import * as yup from "yup";
import axios from "axios";
import { withStyles } from '@material-ui/core/styles';
import img1 from "../images/start.png"
import StarIcon from '@material-ui/icons/Star';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import CloseIcon from "@material-ui/icons/Close";
import Grid from "@material-ui/core/Grid";
import "../companyprofile/Company.css";
import { makeStyles } from "@material-ui/core";
import AlertBox from "../alert/AlertBox"
import { connect } from "react-redux"

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
const useStyles = makeStyles((theme) => ({
    dialogWrapper: {
        position: "absolute",
        top: theme.spacing(0),
        backgroundColor: "#eef5f6",
        maxWidth:"700px",
       
      },
    root: {
      display: 'flex',
      flexDirection: 'column',
      '& > * + *': {
        marginTop: theme.spacing(1),
      },
    },
  }));
// const useStyle = makeStyles((theme) => ({
 
// }));

function RatingBox(props) {
console.log(props.key)
var newpath=`E:/askaway${props.path}`

useEffect(()=>{
  // playSelectedFile()
},[])
  var playSelectedFile = function (event) {
    // var file = this.files[0]
    // var type = file.type
    // var videoNode = document.querySelector('video')
    // var canPlay = videoNode.canPlayType(type)
    // if (canPlay === '') canPlay = 'no'
    // var message = 'Can play type "' + type + '": ' + canPlay
    // var isError = canPlay === 'no'
    // displayMessage(message, isError)

    // if (isError) {
    //   return
    // }

    // var fileURL = URL.createObjectURL(newpath)
    cameraScreen.current.src = newpath
  }

const classes = useStyles();
    const [message,setmessage]=useState();
    const [status,setstatus]=useState(null);
    const [open, setOpen] = useState(false);
    const [openalert, setopenalert] = useState(true);
  
  const cameraScreen = useRef(null)
   
    const initialValues = {
      firstname: '',
      lastname:'',
      companyemail: '',
  
    };
    const onSubmit = (values) => {
      setOpen(false);
    };
    const validationSchema = yup.object({
      firstname: yup.string().required("All fields are required"),
      lastname: yup.string().required("All fields are required"),
      companyemail:yup.string().email("Enter Valid Email").required("All fields are required"),
    });
  
  
    const closealert = () => {
      setopenalert(false);
    };
    const erroralert = (error) => {
      return (
        <AlertBox
          setopenalert={openalert}
          closealert={closealert}
          error={error}
        />
      );
    };
    
  
    const handleClickOpen = () => {
      setOpen(true);
      // cameraScreen.current.src = newpath;
		
    }
    
    const handleClose = () => {
      setOpen(false);
     
    }
  
    return (
      <div>
  
  <PlayCircleOutlineIcon onClick={handleClickOpen}  style={{ width: "43px", height: "43px",margin:"-14px 0px", color: "darkcyan" }} />
  {/* <StarIcon style={{ color: "black", margin: "-5px 5px" }} />Name */}
        
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
          TransitionComponent={Transition}
          fullWidth={true}
          // maxWidth="md"
          classes={{ paper: classes.dialogWrapper }}
        
        >
          <div className="AddDepartment_primaryHeader">
            <h3>{props.question} </h3>
            <div className="AddDepartment_closeicon">
              <CloseIcon style={{ color: "black" }} onClick={handleClose} />
            </div>
          </div>
          <DialogTitle id="form-dialog-title"></DialogTitle>
          <DialogContent>
            <DialogContentText>
              <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
              validationSchema={validationSchema}
              >
                {(formik) => {
  
  
                  return (
                    <>
                      <Form> 
                         {/* <img style={{ height: "350px", width: "640px" }} src={img1}></img> */}
                      {/* <video  style={{ height: "350px", width: "640px", border: "8px solid darkcyan" }}  src={newpath} ref={cameraScreen} id="gum"  autoPlay controls ></video> */}
                      <video  width="640" height="264" autoPlay controls>
        <source src={newpath} type='video/mp4' />
    </video>
                       {console.log(newpath)}

                         <br/>

                         <h2>Please Rate This Interview</h2>
                        <div className={classes.root}>
                              <Rating name="half-rating"  precision={0.5} onChange={(event)=>{
                                console.log(event.target.value)
                              }} /><br/>
                      </div>
                      <TextareaAutosize aria-label="minimum height" style={{width:"650px"}} rowsMin={4} placeholder="Please Add a Review" />

                      <Button 
                          type="submit"
                       
                          onClick={() => {
                            setopenalert(true);
                          }}
                          variant="contained"
                          color="secondary"
                        >
                          Submit
                        </Button>
                      </Form>
                    
                    </>
                  );
                }}
              </Formik>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
  const mapDispatchToProps = dispatch => {
    return {
     
      // fetchdata:()=>{dispatch(fetchdata())}
    }
  }
  
  export default connect( mapDispatchToProps)(RatingBox)
  