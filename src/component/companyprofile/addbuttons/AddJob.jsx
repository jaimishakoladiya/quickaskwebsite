import React, { useState } from "react";
import { Field, Formik, Form } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import CloseIcon from "@material-ui/icons/Close";
import Grid from "@material-ui/core/Grid";
import NativeSelect from "@material-ui/core/NativeSelect";
import "../Company.css";
import { makeStyles } from "@material-ui/core";
import AlertBox from "../../alert/AlertBox";
import QuestionsCard from "./QuestionsCard";
import { connect } from "react-redux"
import DisplayQuestions from "../DisplayQuestions";
import { addjobdata, addjobquestion, deletejobquestion } from "../../../redux/actions/companyprofile/companprofileAction"

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
function AddJob(props) {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const [openalert, setopenalert] = useState(true);
  const[newque,setnewque]=useState([])
  const SelectItem = () => {
    let items = [];
    props.data.deptdata.map((item,index)=>{
      items.push(<option value={item.department}>{item.department}</option>)
    })
    return items;
  };
  const addquestion=(newq)=>{
    setnewque((olditem)=>{
      return[
        ...olditem,
        newq
      ]
    })
   
    props.addjobquestion(newq)
  }
  const deletequestions =(id)=>{
    setnewque((olditem)=>{
      return olditem.filter((arr,index)=>{
        return index !== id;
      })
    })
  }
  const initialValues = {
    jobtitle: "",
    department: "",
  };

  const onSubmit = (values) => {
    // console.log(values)
   props.addjobdata({...values,newque});
    setOpen(false);
    setnewque([]);
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

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        type="button"
        style={{ marginBottom: "25px" }}
        variant="contained"
        color="secondary"
        onClick={handleClickOpen}
      >
        Add Job
      </Button>
      <br />

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        TransitionComponent={Transition}
        fullWidth={true}
        maxWidth="md"
        classes={{ paper: classes.dialogWrapper }}
      >
        <div className="AddJob_primaryHeader">
          <h3>Add Job </h3>
          <div className="AddJob_closeicon">
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
                          <h3>Job title</h3>
                        </Grid>
                        <Grid item xs={6}>
                          <h3>Department</h3>
                        </Grid>
                        <Grid item xs={6}>
                          <Field
                            as={TextField}
                            name="jobtitle"
                            className="dialog_input"
                            placeholder="Job title"
                            id="jobtitle"
                            variant="standard"
                          />
                        </Grid>
                        <Grid item xs={6}>
                        <Field as={NativeSelect}
                        style={{ marginLeft: "10px", width: "350px" }}
                        name='department'
                        
                      >
                        <option value="null">--Select Department--</option>
                        {SelectItem()}
                      </Field>
                        </Grid>
                        <Grid item xs={6}>
                          <h3>Default Question For Department</h3>
                        </Grid>
                        <Grid item xs={4}>
                          <h3>Time Allocated</h3>
                        </Grid>
                      </Grid>
                      <DisplayQuestions question={newque} deletequestion={deletequestions} />
                      <br />
                      {formik.touched.jobtitle && formik.errors.jobtitle
                        ? erroralert(formik.errors.jobtitle)
                        : formik.touched.department && formik.errors.department
                          ? erroralert(formik.errors.department)
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
                    <QuestionsCard question={props.data} addquestion={addquestion} />
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
const mapStateToProps = state => {
  return {
    data: state.companyprofile
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addjobquestion: (newquestion) => { dispatch(addjobquestion(newquestion)) },
    deletejobquestion: (id) => { dispatch(deletejobquestion(id)) },
    addjobdata:(data) =>{dispatch(addjobdata(data))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddJob)