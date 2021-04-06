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
import "../Company.css";
import { makeStyles } from "@material-ui/core";
import AlertBox from "../../alert/AlertBox";
import QuestionsCard from "../addbuttons/QuestionsCard";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { connect } from "react-redux";
import { editdeptdata, deletequestion } from "../../../redux/actions/companyprofile/companprofileAction";
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
function EditDepartment(props) {
 
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const [openalert, setopenalert] = useState(true);
  const [newque, setnewque] = useState(props.editdata.newque)
  

  const addquestion = (newq) => {
    setnewque((olditem) => {
      return [...olditem, newq]
    })
    props.editdeptdata({ ...props.editdata, ...props.editdata.newque.push(newq) }, props.id)


  }

  const deletequestion = (id) => {
    console.log(id)
    setnewque((olditem) => {
      return olditem.filter((arr, index) => {
        return index !== id;
      })
    })

    props.deletequestion("dept", props.id, id)

  }

  const initialValues = {
    department: props.editdata.department,
    costcenter: props.editdata.costcenter,
  }

  const onSubmit = (values) => {

    props.editdeptdata({ ...values, newque }, props.id)
    setOpen(false);

  };

  const validationSchema = yup.object({
    department: yup.string().required("All fields are required"),
    costcenter: yup.string().required("All fields are required"),
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
      <button
        type="button"
        variant="contained"
        color="secondary"
        id="edit_btn"
        onClick={handleClickOpen}
      >
        <EditIcon />
      </button>
      <button id="delete_btn">
        <DeleteIcon />
      </button>
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
        <div className="AddDepartment_primaryHeader">
          <h3>Edit Department </h3>
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
                          <h3>Department</h3>
                        </Grid>
                        <Grid item xs={6}>
                          <h3>Cost Center</h3>
                        </Grid>
                        <Grid item xs={6}>
                          <Field
                            as={TextField}
                            name="department"
                            className="dialog_input"
                            placeholder="Department"
                            id="department"
                            variant="standard"
                            value={formik.values.department}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <Field
                            as={TextField}
                            name="costcenter"
                            className="dialog_input"
                            placeholder="Cost Center"
                            id="costcenter"
                            variant="standard"
                            value={formik.values.costcenter}
                          />
                        </Grid>
                        <Grid item xs={7}>
                          <h3>Default Question For Department</h3>
                        </Grid>
                        <Grid item xs={4}>
                          <h3>Time Allocated</h3>
                        </Grid>
                      </Grid>
                      <DisplayQuestions question={props.editdata.newque} deletequestion={deletequestion} />
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
    editdata: state.companyprofile.deptdata[ownprops.id]

  }
}

const mapDispatchToProps = disptach => {
  return {
    editdeptdata: (data, id) => { disptach(editdeptdata(data, id)) },
    deletequestion: (section, uid, qid) => { disptach(deletequestion(section, uid, qid)) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditDepartment)
