import React, { useState, useEffect, useRef } from "react";
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
import video from '../../video/test.mp4'
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    position: "absolute",
    top: theme.spacing(0),
    backgroundColor: "#eef5f6",
    maxWidth: "700px",

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
  console.log(props.name);
  console.log(props.candidateid)
  console.log(props.index);
  console.log(props.question);
  console.log(props.path);
  const user=JSON.parse(localStorage.getItem('user'));
  const token=user.token;
  var newpath=`F:/askaway${props.path}`
  const classes = useStyles();
  const [data, setvalue] = useState({
    rating: '',
    review: ''
  });
  const [status,setstatus]=useState(false)
  const [message,setmessage]=useState();
  const [open, setOpen] = useState(false);
  const [openalert, setopenalert] = useState();
  const inputchangefunction = (event) => {
    const { name, value } = event.target;

    setvalue((oldvalue) => {
      return {
        ...oldvalue,
        [name]: value
      }
    })
    console.log(data);
  }
  const cameraScreen = useRef(null)
const reviewdata={
      candidateToken:props.candidateid,
      managerToken:null,
      name:props.name,
      questionNumber:props.index+1,
      rating:data.rating,
      review:data.review,
      videoPath:props.path
}
console.log(reviewdata);
async function postreview(data){
  var res=await axios({
    method:'post',
    url:'http://localhost:2002/post-video-review',
    data:data,
    headers:{
      Authorization:token
    }
  })
  console.log(res.data);
  setstatus(res.data.status);
  setmessage(res.data.message);
}
  const onSubmit = (values) => {
    // setopenalert(true);
    postreview(reviewdata);
    console.log(data)
    setOpen(false);
    setopenalert(true)

  };
 


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
  };
  ;
  const handleClose = () => {
    setOpen(false);

  };

  return (
    <div>

      <PlayCircleOutlineIcon onClick={handleClickOpen} style={{ width: "43px", height: "43px", margin: "-14px 0px", color: "darkcyan" }} />
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
            <video style={{ height: "350px", width: "640px", border: "8px solid darkcyan" }} src={newpath} ref={cameraScreen} id="gum" playsInline autoPlay muted ></video>

            <br />
      {status!=null?erroralert(message):null}
            <h2>Please Rate This Interview</h2>
            <div className={classes.root}>
              <Rating name="rating" precision={0.5} value={data.rating} onChange={inputchangefunction} /><br />
            </div>
            <TextareaAutosize aria-label="minimum height" style={{ width: "650px" }} name="review" value={data.review} rowsMin={4} onChange={inputchangefunction} placeholder="Please Add a Review" />

            <Button
              type="submit"

              onClick={()=>{
                // setopenalert(true)
                onSubmit()
              }}
              variant="contained"
              color="secondary"
            >
              Submit
</Button>
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

export default connect(mapDispatchToProps)(RatingBox)
