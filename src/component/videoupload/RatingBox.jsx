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


function RatingBox(props) {

  const user=JSON.parse(localStorage.getItem('user'));
  const token=user.token;
  const type=user.data.type;
  console.log(type)
  var newpath=`/video/test.mp4`
  const classes = useStyles();
  const [reviewdata,setreviewdata]=useState()
  const [data, setvalue] = useState({
    rating: props.rate,
    review: ''
  });
  const [status,setstatus]=useState(false)
  const [message,setmessage]=useState();
  const [open, setOpen] = useState(false);
  const [openalert, setopenalert] = useState(false);
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

async function postreview(){
  const name=type==="admin"?`${user.data.admin.firstname} ${user.data.admin.lastname}`:
  `${user.data.manager.firstname} ${user.data.manager.lastname}`
  console.log(name)
  const reviewdata={
    candidateToken:props.candidateid,
    managerToken:null,
    name:name,
    questionNumber:props.index+1,
    rating:data.rating,
    review:data.review,
    videoPath:props.path
}
console.log(reviewdata);
  var res=await axios({
    method:'post',
    url:'http://localhost:2002/post-video-review',
    data:reviewdata,
    headers:{
      Authorization:token
    }
  })
  console.log(res.data);
  setstatus(res.data.status);
  setmessage(res.data.message);
}
  const onSubmit = (event) => {
    console.log(event)
    postreview();
    console.log(data)
    setopenalert(true)

  };
async function getreviews(){
  var res=await axios({
    method:'get',
    url:`http://localhost:2002/interview/${props.candidateid}/reviews/${props.path}`,
    headers:{
      Authorization:token
    }
  })
  console.log(res.data)
 setreviewdata(res.data.data)
 console.log(reviewdata)
 
}
  const closealert = () => {
    setopenalert(false);
    setOpen(false);
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
    getreviews()
  };
  ;
  const handleClose = () => {
    setOpen(false);

  };

  return (
    <div>
<div style={{display:"flex",justifyContent:"center",marginLeft:"400px"}}>
     {props.data? <PlayCircleOutlineIcon onClick={handleClickOpen}
       style={{ width: "43px", height: "43px",marginRight:"8px", color: "darkcyan" }} />:null}
   <StarIcon style={{marginTop:"6px"}}/><h3 style={{marginTop:"6px",marginRight:"25px"}}>{props.rate}</h3>
</div>
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

              onClick={onSubmit}
              variant="contained"
              color="secondary"
            >
              Submit
</Button>
<hr style={{marginTop:"10px"}}/>

{reviewdata && reviewdata.map((item,index)=>{
  return <div key={index} style={{border:"1px solid #f6c34c",width:"100%",borderRadius:"10px",height:"auto",color:"black",marginTop:'7px'}}>
  <div style={{display:"flex"}}><h3 style={{marginLeft:"20px"}}>{item.name}</h3>
<h2 style={{marginTop:"0px",marginLeft:"10px"}}><Rating precision={0.5} value={item.rating}/></h2></div>
<h4 style={{marginLeft:"50px"}}>{item.review?item.review:"-"}</h4>
</div>
})}

          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}


export default RatingBox
