import React, { useState } from "react";
import { Field, Formik, Form } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from '@material-ui/core/DialogActions';
import Slide from "@material-ui/core/Slide";
import CloseIcon from "@material-ui/icons/Close";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Grid from "@material-ui/core/Grid";
import NativeSelect from "@material-ui/core/NativeSelect";
import "../Company.css";
import { makeStyles } from "@material-ui/core";
import AlertBox from "../../alert/AlertBox";
import QuestionsCard from "../addbuttons/QuestionsCard";
import DisplayQuestions from '../DisplayQuestions';
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import { connect } from "react-redux";
import {
  
  fetchdata
} from "../../../redux/actions/companyprofile/companprofileAction";
import axios from "axios";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
const useStyle = makeStyles((theme) => ({
  dialogWrapper: {
    position: "absolute",
    top: theme.spacing(0),
    backgroundColor: "#eef5f6",
  },
}));
function EditJob(props) {
  const [questions,setnewque]=useState(props.editdata.questions);
  const addquestion=(newq)=>{
      setnewque((olditem)=>{
        return[
          ...olditem,
          newq
        ]
      })

  }
  const deletequestion=(id)=>{
    setnewque((olditem)=>{
      return olditem.filter((arr,index)=>{
        return index !== id;
      })
    })

  }
  const SelectItem=()=>{
    let items=[];
    props.data.users.map((item,index)=>{
      items.push(<option value={item.name}>{item.name}</option>)
      
    })
    return items;
  }
  
  
  const user=JSON.parse(localStorage.getItem("user"));
  const token=user.token;
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const [opendelete, setOpendelete] = useState(false);
  const [openalert, setopenalert] = useState(true);
  const[message,setmess]=useState();
  const[status,setstatus]=useState(null);
  const [Yesopen, SetYesopen] = useState(false);

  async function deletjobdata(){
    console.log(props.editdata.job_detail_id);
    var res = await axios({
      method:'post',
      url:`http://localhost:2002/delete-job-detail/${props.editdata.job_detail_id}`,
      headers:{
        Authorization:token
      }
    })
  props.fetchdata()
  }
  async function updatejobdata(data){
    console.log(data);
    console.log(props.editdata.job_detail_id)
    var res=await axios({
      method:'post',
      url:`http://localhost:2002/update-job-detail/${props.editdata.job_detail_id}`,
      data:data,
      headers:{
        Authorization:token
      }
    })
    setmess(res.data.message);
    setstatus(res.data.status);
    props.fetchdata()
  }
  const initialValues = {
    title: props.editdata.title,
    department: props.editdata.department,
  };

  const onSubmit = (values) => {
    console.log({...values,questions})
    //props.editjobdata({...values,newque }, props.id);
    updatejobdata({...values,questions})
    setOpen(false);
    
  };

  const validationSchema = yup.object({
    title: yup.string().required("All fields are required"),
    department: yup.string().required("All fields are required"),
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
  const handleClickOpen1 = () => {
    
    setOpendelete(true);
  };
  const handleClose = () => {
    setOpen(false);
   
  };
  const handleClose1 = () => {
 
    setOpendelete(false);
  };
 const deletejob = () => {
  // props.deletejobdata(props.id)
 
   handleClose1()
   SetYesopen(false);
   deletjobdata(props.id)
 }
 const YesFunction = () => {
  SetYesopen(true);
};

  return (
    <div>
      <button
        type="button"
        variant="contained"
        color="secondary"
        id="edit_btn"
        onClick={handleClickOpen}
      >
        <EditIcon />
      </button>
      <button id="delete_btn"
      onClick={handleClickOpen1}>
    <DeleteIcon />
      </button>
      <br />
      {status!=null?erroralert(message):null}
{/* delete job */}
<Dialog
        open={opendelete}
        onClose={handleClose1}
        aria-labelledby="max-width-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div style={{borderTop:"10px solid darkcyan"}}>
        <DialogTitle id="max-width-dialog-title"><h3>PLEASE CONFIRM</h3></DialogTitle>
        <DialogContent style={{ width: "400px" }}>
          <DialogContentText>
      <h4>Are You Want To Sure Delete Data? </h4>
          </DialogContentText>
        </DialogContent>
        <DialogActions>

        
          <Button onClick={handleClose1}
         variant="contained" style={{ backgroundColor: "black",color:"white"}}  autoFocus>
          <h3>Cancel</h3> 
          </Button>
          <Button
         variant="contained" onClick={YesFunction} style={{ backgroundColor: "#dc3545",color:"white"}}   autoFocus>
          <h3>Delete</h3> 
          </Button>
        </DialogActions>
        </div>
     
      <Dialog
              open={Yesopen}
            onClose={handleClose1}
              aria-labelledby="max-width-dialog-title"
            >
              <DialogTitle id="max-width-dialog-title">
              <h3> Data Deleted Successfully</h3>
           
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  <CheckCircleIcon style={{ color: "green"}} />
                </DialogContentText>
              </DialogContent>
              <Button
                onClick={deletejob}
                variant="contained"
                style={{ backgroundColor: "darkcyan",color:"white" ,fontSize:"20px"}} >
                OK
              </Button>
            </Dialog>
      </Dialog>


{/* //edit job */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        TransitionComponent={Transition}
        fullWidth={true}
        maxWidth="md"
        classes={{ paper: classes.dialogWrapper }}
      >
        <div className="AddDepartment_primaryHeader">
          <h3>Edit Job </h3>
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
                console.log(formik);

                return (
                  <>
                    <Form>
                      <Grid container spacing={3}>
                        <Grid item xs={6}>
                          <h3>JOB TITLE</h3>
                        </Grid>
                        <Grid item xs={6}>
                          <h3>DEPARTMENT</h3>
                        </Grid>
                        <Grid item xs={6}>
                          <Field
                            as={TextField}
                            name="title"
                            className="dialog_input"
                            placeholder="Jobtitle"
                            id="title"
                            variant="standard"
                            value={formik.values.title}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <Field
                            as={NativeSelect}
                            style={{ marginLeft: "10px", width: "350px" }}
                            name="department"
                            value={formik.values.department}
                          >
                          
                            <option value="null">--Select Department--</option>
                            {SelectItem()}
                          </Field>
                        </Grid>
                        <Grid item xs={7}>
                          <h3>Default Question For Department</h3>
                        </Grid>
                        <Grid item xs={4}>
                          <h3>Time Allocated</h3>
                        </Grid>
                      </Grid>
                      <DisplayQuestions question={questions} deletequestion={deletequestion}/> 
                      <br />
                      {formik.touched.department && formik.errors.department
                        ? erroralert(formik.errors.department)
                        : formik.touched.costcenter && formik.errors.costcenter
                        ? erroralert(formik.errors.costcenter)
                        : null}

                      <Button
                        id="dialog-cancel-btn"
                        onClick={handleClose}
                        variant="contained"
                        color="secondary"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        id="dialog-save-btn"
                        onClick={() => {
                          setopenalert(true);
                        }}
                        variant="contained"
                        color="primary"
                      >
                        Save
                      </Button>
                    </Form>
                    <QuestionsCard addquestion={addquestion} />
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
const mapStateToProps = (state, ownprops) => {
  // const data=state.companyprofile.deptdata.filter((item,index)=>{
  //   return index === ownprops.id
  // })
  return {
    editdata: state.companyprofile.job[ownprops.id],
    data:state.companyprofile
  };
};

const mapDispatchToProps = (disptach) => {
  return {
   fetchdata:()=>{disptach(fetchdata())}
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditJob);
