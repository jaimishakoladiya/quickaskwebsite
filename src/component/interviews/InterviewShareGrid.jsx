import React, { useState, useEffect } from "react";
import { Field, Formik, Form } from "formik";
import * as yup from "yup";
import axios from "axios";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
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
const useStyle = makeStyles((theme) => ({
  dialogWrapper: {
    position: "absolute",
    top: theme.spacing(0),
    backgroundColor: "#eef5f6",
    maxWidth:"500px",
   
  },
}));

const  InterviewShareGrid=(props)=>{
  console.log(props.managerid);
  console.log(props.candidateid);
  const user=JSON.parse(localStorage.getItem('user'));
  const token=user.token;
    const [message,setmessage]=useState();
    const [status,setstatus]=useState(null);
    const [open, setOpen] = useState(false);
    const [openalert, setopenalert] = useState(true);
  
    // useEffect(() => {
    //   fetchdata()
    //  },[])
async function managershare(data){
  var res=await axios({
    method:'post',
    url:'http://localhost:2002/manager/share',
    data:data,
    headers:{
      Authorization:token
    }
  })
  console.log(res.data);
  setstatus(res.data.status);
  setmessage(res.data.message);
}
    const classes = useStyle();
    const initialValues = {
      firstname: '',
      lastname:'',
      companyemail: '',
      
    };
    const onSubmit = (values) => {
      
      managershare({"firstname":values.firstname,
                   "lastname":values.lastname,
                   "email":values.companyemail,
                   "candidateToken":props.candidateid,
                   "fromManagerToken":props.managerid,
                   "type":"single"  
                  })
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
    };
    ;
    const handleClose = () => {
      setOpen(false);
     
    };
  
    return (
      <div>
  
          
     
        <Button variant="contained"  color="secondary" style={{marginLeft:"600px",fontSize:"12pt",height:"50px"}}  onClick={handleClickOpen}  >
              Share Grid</Button>
        <br />
        {status != null ? erroralert(message) : null}
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
            <h3>Share Grid </h3>
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
                    
                       
                            <h3 style={{color:"black"}}>FirstName</h3>
                          
                             <Field
                              as={TextField}
                              name="firstname"
                              className="dialog_input"
                              placeholder=" Enter a Firstname"
                              id="firstname"
                              variant="standard"
                            />
                          <br></br><br></br>
                            <h3 style={{color:"black"}}>lastName</h3>
                              <Field
                              as={TextField}
                              name="lastname"
                              className="dialog_input"
                              placeholder=" Enter a lastName"
                              id="lastname"
                              variant="standard"
                            /><br></br><br></br>
                            
                         <h3 style={{color:"black"}}>Company Email</h3>
                              <Field
                              as={TextField}
                              name="companyemail"
                              className="dialog_input"
                              placeholder=" Enter a Company Email"
                              id="companyemail"
                              variant="standard"/>
                              <br></br><br></br>
  
                       
  
                      
                        {formik.touched.firstname && formik.errors.firstname
                          ? erroralert(formik.errors.firstname)
                          : formik.touched.lastname && formik.errors.lastname
                            ? erroralert(formik.errors.lastname)
                            : formik.errors.companyemail
                            ? erroralert(formik.errors.companyemail)
                            : null}
{/*   
                        <Button
                          // id="dialog-cancel-btn"
                          onClick={handleClose}
                          variant="contained"
                          color="secondary"
                        >
                          Cancel
                        </Button> */}
                        <Button 
                          type="submit"
                       
                          onClick={() => {
                            setopenalert(true);
                          }}
                          variant="contained"
                          color="secondary"
                        >
                          Share
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
 
  export default InterviewShareGrid;
  