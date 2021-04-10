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
  deletequestion,
  editjobdata,
  deletejobdata
} from "../../../redux/actions/companyprofile/companprofileAction";

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
  const [newque,setnewque]=useState(props.editdata.newque);
  const addquestion=(newq)=>{
      setnewque((olditem)=>{
        return[
          ...olditem,
          newq
        ]
      })
      props.editjobdata({...props.editdata,...props.editdata.newque.push(newq)},props.id)
  }
  const deletequestion=(id)=>{
    setnewque((olditem)=>{
      return olditem.filter((arr,index)=>{
        return index !== id;
      })
    })
    props.deletequestion("job",props.id,id)
  }
  const SelectItem=()=>{
    let items=[];
    props.data.deptdata.map((item,index)=>{
      items.push(<option value={item.department}>{item.department}</option>)
      
    })
    return items;
  }
  console.log(props.id);
  console.log(props.editdata);
  //  console.log(props.editdata.department)

  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const [opendelete, setOpendelete] = useState(false);
  const [openalert, setopenalert] = useState(true);
  const [Yesopen, SetYesopen] = useState(false);

  const initialValues = {
    jobtitle: props.editdata.jobtitle,
    department: props.editdata.department,
  };

  const onSubmit = (values) => {
    console.log(values);
    console.log(props.editdata);
    props.editjobdata({...values,newque }, props.id);
    setOpen(false);
    console.log(props.editdata);
  };

  const validationSchema = yup.object({
    jobtitle: yup.string().required("All fields are required"),
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
   props.deletejobdata(props.id)
   handleClose1()
   SetYesopen(false);
  
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
                            name="jobtitle"
                            className="dialog_input"
                            placeholder="jobtitle"
                            id="jobtitle"
                            variant="standard"
                            value={formik.values.jobtitle}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <Field
                            as={NativeSelect}
                            style={{ marginLeft: "10px", width: "350px" }}
                            name="department"
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
                      <DisplayQuestions question={props.editdata.newque} deletequestion={deletequestion}/>
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
    editdata: state.companyprofile.jobdata[ownprops.id],
    data:state.companyprofile
  };
};

const mapDispatchToProps = (disptach) => {
  return {
    editjobdata: (data, id) => { disptach(editjobdata(data, id))},
      deletejobdata: (id) => { disptach(deletejobdata(id))},
      
    
   
    deletequestion:(section,uid,qid)=>{disptach(deletequestion(section,uid,qid))}
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditJob);
