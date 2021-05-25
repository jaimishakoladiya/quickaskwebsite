import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import CloseIcon from "@material-ui/icons/Close";
import Grid from "@material-ui/core/Grid";
import QuestionsCard from "./QuestionsCard";
import { makeStyles } from "@material-ui/core";
import { Field, Formik, Form } from "formik";
import * as yup from "yup";
import AlertBox from "../../alert/AlertBox";
import DisplayQuestions from "../DisplayQuestions";
import { addmanagerquestion, getmanagerdata, deletemanagerquestion, fetchdata } from "../../../redux/actions/companyprofile/companprofileAction";
import { connect } from "react-redux";
import axios from 'axios'
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
function AddManager({ data, fetchdata }) {
  const user = JSON.parse(localStorage.getItem('user'));
  const token = user.token;
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const [openalert, setopenalert] = useState(false);
  const [status, setstatus] = useState(null);
  const [message, setmessage] = useState();
  const [question, setnewque] = useState([]);
  useEffect(() => {
    fetchdata()
  }, [])
  const initialValues = {
    firstname: '',
    lastname: '',
    email: ''
  }
  async function savemanager(data) {
    var res = await axios({
      method: 'post',
      url: "http://localhost:2002/save-manager",
      data: data,
      headers: {
        Authorization: token
      }
    })
    console.log(res.data)
    fetchdata()
    setstatus(res.data.status);
    setmessage(res.data.message);
  }
  const addquestion = (newq) => {
    setnewque((oldval) => {
      return [
        ...oldval,
        newq
      ]
    })
  }
  const deletequestion = () => {
  }
  const onSubmit = (values) => {
    savemanager({ ...values, question })
    setnewque([]);
    setOpen(false);
  };
  const validationSchema = yup.object({
    firstname: yup.string().required("All Fields Are Required"),
    lastname: yup.string().required("All Fields Are Required"),
    email: yup
      .string()
      .email("Enter Valid Email")
      .required("All Fields Are Required"),
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
        style={{ marginBottom: "25px" }}
        variant="contained"
        color="secondary"
        onClick={handleClickOpen}
      >
        Add Manager
      </Button>
      <br />
      {status != null ? erroralert(message) : null}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        TransitionComponent={Transition}
        fullWidth={true}
        maxWidth="md"
        classes={{ paper: classes.dialogWrapper }}
      >
        <div className="AddManager_primaryHeader">
          <h2>Add Manager </h2>
          <div className="AddManager_closeicon">
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
                      <Grid container spacing={3}>
                        <Grid
                          container
                          spacing={3}
                          style={{ marginLeft: "10px" }}
                        >
                          <Grid item xs>
                            <h3>First Name</h3>
                          </Grid>
                          <Grid item xs>
                            <h3>Last Name</h3>
                          </Grid>
                          <Grid item xs>
                            <h3>Email</h3>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          spacing={3}
                          style={{ marginLeft: "10px" }}
                        >
                          <Grid item xs>
                            <Field
                              as={TextField}
                              name="firstname"
                              placeholder="Enter FirstName"
                              id="firstname"
                              variant="standard"
                            />
                          </Grid>
                          <Grid item xs>
                            <Field
                              as={TextField}
                              name="lastname"
                              placeholder="Enter LastName"
                              id="lastname"
                              variant="standard"
                            />
                          </Grid>
                          <Grid item xs>
                            <Field
                              as={TextField}
                              name="email"
                              placeholder="Enter Email"
                              id="email"
                              variant="standard"
                            />
                          </Grid>
                        </Grid>

                        <Grid item xs={6}>
                          <h3>Default Question For Department</h3>
                        </Grid>
                      </Grid>
                      <DisplayQuestions question={question} deletequestion={deletequestion} />
                      <br />
                      {formik.errors.firstname
                        ? erroralert(formik.errors.firstname)
                        : formik.errors.lastname
                          ? erroralert(formik.errors.lastname)
                          : formik.errors.email
                            ? erroralert(formik.errors.email)
                            : null}
                      <Button
                        onClick={handleClose}
                        id="dialog-cancel-btn"
                        variant="contained"
                        color="primary"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        onClick={() => setopenalert(true)}
                        id="dialog-save-btn"
                        variant="contained"
                        color="secondary"
                      >
                        Save
                      </Button>
                    </Form>
                  </>
                );
              }}
            </Formik>
            <QuestionsCard addquestion={addquestion} />
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
    addmanagerquestion: (newquestion) => { dispatch(addmanagerquestion(newquestion)) },
    deletemanagerquestion: (id) => { dispatch(deletemanagerquestion(id)) },
    getmanagerdata: (data) => { dispatch(getmanagerdata(data)) },
    fetchdata: () => { dispatch(fetchdata()) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddManager)