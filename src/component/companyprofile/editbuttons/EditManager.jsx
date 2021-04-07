import React, { useState } from "react";
import { Field, Formik, Form } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import CloseIcon from "@material-ui/icons/Close";
import Grid from "@material-ui/core/Grid";
import "../Company.css";
import { makeStyles } from "@material-ui/core";
import AlertBox from "../../alert/AlertBox";
import QuestionsCard from "../addbuttons/QuestionsCard";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { connect } from "react-redux";
import { editdeptdata, editjobdata,deletemanagerdata  } from "../../../redux/actions/companyprofile/companprofileAction";

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
 function EditManager(props) {
   console.log(props.id)
   console.log(props.editdata)
  //  console.log(props.editdata.department)

  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const [opendelete, setOpendelete] = useState(false);
  const [openalert, setopenalert] = useState(true);

  const initialValues = {
    jobtitle:props.editdata.jobtitle,
    department: props.editdata.department,
  };

  const onSubmit = (values) => {
    console.log(values);
    console.log(props.editdata)
    props.editjobdata(values,props.id)
    setOpen(false);
    console.log(props.editdata)
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
  const managerdata  = () => {
    props.deletemanagerdata(props.id);
    handleClose1()
  }

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
      
      <button id="delete_btn" onClick={handleClickOpen1}>
        <DeleteIcon />
      </button>
      <br />

      {/* delete manager */}

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
         variant="contained"  onClick={managerdata}  style={{ backgroundColor: "#dc3545",color:"white"}}  autoFocus>
          <h3>Delete</h3> 
          </Button>
        </DialogActions>
        </div>
      </Dialog>

{/* edit manager */}
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
                            as={TextField}
                            name="department"
                            className="dialog_input"
                            placeholder="department"
                            id="department"
                            variant="standard"
                            value={formik.values.department}
                          />
                        </Grid>
                        <Grid item xs={7}>
                          <h3>Default Question For Department</h3>
                        </Grid>
                        <Grid item xs={4}>
                          <h3>Time Allocated</h3>
                        </Grid>
                      </Grid>
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
                    <QuestionsCard />
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
const mapStateToProps = (state,ownprops)=>{
  // const data=state.companyprofile.deptdata.filter((item,index)=>{
  //   return index === ownprops.id
  // })
  return{
    editdata:state.companyprofile.jobdata[ownprops.id]
    
  }
}

const mapDispatchToProps= disptach =>{
  return {
    editjobdata:(data,id)=>{disptach(editjobdata(data,id))},
   deletemanagerdata:(id)=>{dispatch(deletemanagerdata(id))}
  }
}
export default connect (mapStateToProps,mapDispatchToProps)(EditManager)
