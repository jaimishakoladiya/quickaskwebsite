import React, { useState, useEffect } from "react";
import { Field, Formik, Form } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";

import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
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
import { editdeptdata, editjobdata, deletemanagerdata, editmanagerdata, fetchdata } from "../../../redux/actions/companyprofile/companprofileAction";
import DisplayQuestions from "../DisplayQuestions"
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import axios from 'axios';

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
  useEffect(() => {
    getque();
  }, [])
  const user = JSON.parse(localStorage.getItem('user'));
  const token = user.token;

  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const [opendelete, setOpendelete] = useState(false);
  const [openalert, setopenalert] = useState(true);
  const [Yesopen, SetYesopen] = useState(false);
  const [question, setnewque] = useState([])
  const[message,setmess]=useState();
  const[status,setstatus]=useState(null);
  async function addquestion  (newq) {
    setnewque((olditem) => {
      return [
        ...olditem,
        newq
      ]
    })
    
    var res = await axios({
      method: "post",
      url: `http://localhost:2002/manager/save-question/${props.editdata.manager_token}`,
      data:{...newq},
      headers: {
        Authorization: token
      }
    })
    console.log(res.data)
    setmess(res.data.message);
    setstatus(res.data.status);
  }
async function   deletequestion (id){
    setnewque((olditem) => {
      return olditem.filter((arr, index) => {
        return index != id;
      })
    })
    var id=question[id].id;
    console.log(id);
    var res = await axios({
      
      method: "get",
      url: `http://localhost:2002/remove-department-question/${props.editdata.manager_token}/${id}`,
      headers: {
        Authorization: token
      }
    })
    console.log(res.data)
  };
  async function deletemanager() {
    var res = await axios({
      method: "post",
      url: `http://localhost:2002/delete-manager/${props.editdata.manager_token}/true`,
      headers: {
        Authorization: token
      }
    })
    props.fetchdata();
  }
  async function getque() {
    var resq = await axios({
      method: 'get',
      url: `http://localhost:2002/view-manager-question/${props.editdata.manager_token}`,
      headers: {
        Authorization: token
      }
    })
    console.log(resq.data)
    setnewque(resq.data.data)
  }
 
  const initialValues = {
    firstname: props.editdata.firstname,
    lastname: props.editdata.lastname,
    email: props.editdata.email,
  };

  const onSubmit = (values) => {
    console.log(values);
   props.editjobdata(values, props.id)
    setOpen(false);
  
   
  };

  const validationSchema = yup.object({
    firstname: yup.string().required("All fields are required"),
    lastname: yup.string().required("All fields are required"),
    email: yup.string().email("email invalid ").required("All fields are required"),

  });
 
  const erroralert = (error) => {
    return (
      <AlertBox
        setopenalert={openalert}
        closealert={closealert}
        error={error}
      />
    );
  };
  const closealert = () => {
    setopenalert(false);
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
  const YesFunction = () => {
    SetYesopen(true);
  };
  const managerdata = () => {
    // props.deletemanagerdata(props.id);
    deletemanager();
    SetYesopen(false);
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

      {status!=null?erroralert(message):null}
      <Dialog
        open={opendelete}
        onClose={handleClose1}
        aria-labelledby="max-width-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div style={{ borderTop: "10px solid darkcyan" }}>
          <DialogTitle id="max-width-dialog-title"><h3>PLEASE CONFIRM</h3></DialogTitle>
          <DialogContent style={{ width: "400px" }}>
            <DialogContentText>
              <h4>Are You Want To Sure Delete Data? </h4>
            </DialogContentText>
          </DialogContent>
          <DialogActions>


            <Button onClick={handleClose1}
              variant="contained" style={{ backgroundColor: "black", color: "white" }} autoFocus>
              <h3>Cancel</h3>
            </Button>
            <Button
              variant="contained" onClick={YesFunction} style={{ backgroundColor: "#dc3545", color: "white" }} autoFocus>
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
              <CheckCircleIcon style={{ color: "green" }} />
            </DialogContentText>
          </DialogContent>
          <Button
            onClick={managerdata}
            variant="contained"
            style={{ backgroundColor: "darkcyan", color: "white", fontSize: "20px" }} >
            OK
              </Button>
        </Dialog>
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
        <div className="AddManager_primaryHeader">
          <h2>Edit Manager </h2>
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
                              values={formik.values.firstname}
                              InputProps={{
                                readOnly: true,
                              }}
                            />
                          </Grid>
                          <Grid item xs>
                            <Field
                              as={TextField}
                              name="lastname"
                              placeholder="Enter LastName"
                              id="lastname"
                              variant="standard"
                              values={formik.values.lastname}
                              InputProps={{
                                readOnly: true,
                              }}
                            />
                          </Grid>
                          <Grid item xs>
                            <Field
                              as={TextField}
                              name="email"
                              placeholder="Enter Email"
                              id="email"
                              variant="standard"
                              values={formik.values.email}
                              InputProps={{
                                readOnly: true,
                              }}
                            />
                          </Grid>
                        </Grid>

                        <Grid item xs={6}>
                          <h3>Default Question For Department</h3>
                        </Grid>
                        <Grid item xs={4}>
                          <h3>Time Allocated</h3>
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
                        // onClick={() => setopenalert(true)}
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
const mapStateToProps = (state, ownprops) => {
  // const data=state.companyprofile.deptdata.filter((item,index)=>{
  //   return index === ownprops.id
  // })
  return {

    editdata: state.companyprofile.manager[ownprops.id]

  }
}

const mapDispatchToProps = dispatch => {
  return {
    editjobdata: (data, id) => { dispatch(editjobdata(data, id)) },
    deletemanagerdata: (id) => { dispatch(deletemanagerdata(id)) },
    editmanagerdata: (data, id) => { dispatch(editmanagerdata(data, id)) },
    fetchdata: () => { dispatch(fetchdata()) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditManager)
