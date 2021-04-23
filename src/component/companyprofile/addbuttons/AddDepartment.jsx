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
import "../Company.css";
import { makeStyles } from "@material-ui/core";
import AlertBox from "../../alert/AlertBox";
import QuestionsCard from "./QuestionsCard";
import { adddeptdata, adddeptquestion, deletedeptquestion, fetchdept, getdeptdata } from "../../../redux/actions/companyprofile/companprofileAction";
import { connect } from "react-redux"
import DisplayQuestions from "../DisplayQuestions";

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
function AddDepartment({fetchdept}) {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.token;
  const [message,setmessage]=useState();
  const [status,setstatus]=useState(null);
  // useEffect(() => {
  //   async function getData() {
  //     const result = await axios({
  //       method: 'get',
  //       url: "http://localhost:2002/get-department",

  //       headers: {
  //         Authorization: token
  //       }
  //     })
       
  //     props.getdeptdata(result.data.result)

  //    }
  //    getData();
  //  })
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const [openalert, setopenalert] = useState(true);
  const [questions, setnewque] = useState([])
  const initialValues = {
    name: "",
    costCenter: "",

  };

  async function savedepartment(data) {

    var res = await axios({
      method: 'post',
      url: "http://localhost:2002/save-department",
      data: data,
      headers: {
        Authorization: token
      }
    })
    const result = await axios({
      method: 'get',
      url: "http://localhost:2002/get-department",

      headers: {
        Authorization: token
      }
    })
     
    // props.getdeptdata(result.data.result)

   
    setstatus(res.data.status);
    setmessage(res.data.message)

    // const result = await axios({
    //   method: 'get',
    //   url: "http://localhost:2002/get-department",

    //   headers: {
    //     Authorization: token
    //   }
    // })
     
    // props.getdeptdata(result.data.result)

   
  }


  const onSubmit = (values) => {
    // props.adddeptdata({ ...values, questions })
    savedepartment({ ...values, questions });

    
    setnewque([])
    setOpen(false);
  };

  const validationSchema = yup.object({
    name: yup.string().required("All fields are required"),
    costCenter: yup.string().required("All fields are required"),
  });

  const addquestion = (newq) => {

    setnewque((olditem) => {
      return [...olditem,
        newq]
    })
    // props.adddeptquestion(newq)
  }
  const deletedeptquestion = (id) => {
    setnewque((olditem) => {
      return olditem.filter((item, index) => {
        return index !== id
      })
    })
  }
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
    setnewque([])
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
        Add Department
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
        <div className="AddDepartment_primaryHeader">
          <h3>Add Department </h3>
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
                      <Grid container spacing={3}>
                        <Grid item xs={6}>
                          <h3>Department</h3>
                        </Grid>
                        <Grid item xs={6}>
                          <h3>Cost Center</h3>
                        </Grid>
                        <Grid item xs={6}>
                          <Field
                            as={TextField}
                            name="name"
                            className="dialog_input"
                            placeholder="Department"
                            id="name"
                            variant="standard"
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <Field
                            as={TextField}
                            name="costCenter"
                            className="dialog_input"
                            placeholder="Cost Center"
                            id="costCenter"
                            variant="standard"
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <h3>Default Question For Department</h3>
                        </Grid>
                        <Grid item xs={4}>
                          <h3>Time Allocated</h3>
                        </Grid>

                      </Grid>

                      <DisplayQuestions question={questions} deletequestion={deletedeptquestion} />

                      <br />
                      {formik.touched.name && formik.errors.name
                        ? erroralert(formik.errors.name)
                        : formik.touched.costCenter && formik.errors.costCenter
                          ? erroralert(formik.errors.costCenter)
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
const mapStateToProps = state => {
  return {
    data: state.companyprofile

  }
}

const mapDispatchToProps = dispatch => {
  return {
    // adddeptquestion: (newquestion) => { dispatch(adddeptquestion(newquestion)) },
    // deletedeptquestion: (id) => { dispatch(deletedeptquestion(id)) },
    // adddeptdata: (data) => { dispatch(adddeptdata(data)) },
    getdeptdata: (data) => { dispatch(getdeptdata(data)) },
    fetchdept:()=>{dispatch(fetchdept())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDepartment)
