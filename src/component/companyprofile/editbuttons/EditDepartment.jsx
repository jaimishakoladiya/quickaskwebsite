import React, { useState,useEffect } from "react";
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
import Grid from "@material-ui/core/Grid";
import "../Company.css";
import { makeStyles } from "@material-ui/core";
import AlertBox from "../../alert/AlertBox";
import QuestionsCard from "../addbuttons/QuestionsCard";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { connect } from "react-redux";
import { editdeptdata, deletequestion ,deletedeptdata, fetchdata } from "../../../redux/actions/companyprofile/companprofileAction";
import DisplayQuestions from "../DisplayQuestions";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
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
function EditDepartment(props) {
  
  const user=JSON.parse(localStorage.getItem("user"));
  const token=user.token;
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const [opendelete, setOpendelete] = useState(false);
  const [openalert, setopenalert] = useState(true);
  const [questions, setnewque] = useState(props.editdata.questions)
  const [Yesopen, SetYesopen] = useState(false);
  const[message,setmess]=useState();
  const[status,setstatus]=useState(null);

  
  async function deletedepartment(){
       
      var res=await axios({
      method: 'post',
      url: `http://localhost:2002/delete-department/${props.editdata.departmentId}`,

      headers: {
        Authorization: token
      }
    })
    props.fetchdata()

  }

  async function updatedepartment(data){
    console.log(data)
    console.log(props.editdata.departmentId)
    var res=await axios({
      method:'post',
      url:`http://localhost:2002/update-department/${props.editdata.departmentId}`,
      data:data,
      headers:{
        Authorization:token
      }
    })
    setmess(res.data.message);
    setstatus(res.data.status);
    props.fetchdata()
  }
  const addquestion = (newq) => {
    setnewque((olditem) => {
    })
    // props.editdeptdata({ ...props.editdata, ...props.editdata.newque.push(newq) }, props.id)


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

  const deletedata=()=>{
    handleClose1();
    SetYesopen(false);
    // props.deletedeptdata(props.id)
     deletedepartment(props.id)

    
  }
  const YesFunction = () => {
    SetYesopen(true);
  };

  const initialValues = {
    name: props.editdata.name,
    costCenter: props.editdata.cost_center,
  }

  const onSubmit = (values) => {
console.log({...values,questions})
    // props.editdeptdata({ ...values, newque }, props.id)
     updatedepartment({...values,questions})
    setOpen(false);
  

  };

  const validationSchema = yup.object({
    name: yup.string().required("All fields are required"),
    costCenter: yup.string().required("All fields are required"),
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

  
  const handleClickOpen1 = () => {
    setOpendelete(true);
  };

  const handleClose1 = () => {
  
    setOpendelete(false);
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
      <button id="delete_btn"  onClick={handleClickOpen1}>
        <DeleteIcon />
      </button>
      <br />
{/* delete department */}
{status!=null?erroralert(message):null}

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
      <h4>Are you sure you want to delete the department record? </h4>
          </DialogContentText>
        </DialogContent>
        <DialogActions>

        
          <Button  onClick={handleClose1}
         variant="contained" style={{ backgroundColor: "black",color:"white"}}  autoFocus>
          <h3>Cancel</h3> 
          </Button>
          <Button onClick={YesFunction}
         variant="contained" style={{ backgroundColor: "#dc3545",color:"white"}}  >
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
                onClick={deletedata}
                variant="contained"
                style={{ backgroundColor: "darkcyan",color:"white" ,fontSize:"20px"}} >
                OK
              </Button>
            </Dialog>
      </Dialog>



 {/* edit department */}
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
                            value={formik.values.name}
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
                            value={formik.values.costCenter}
                          />
                        </Grid>
                        <Grid item xs={7}>
                          <h3>Default Question For Department</h3>
                        </Grid>
                        <Grid item xs={4}>
                          <h3>Time Allocated</h3>
                        </Grid>
                      </Grid>
                      <DisplayQuestions  question={props.editdata.questions} deletequestion={deletequestion} />
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
const mapStateToProps = (state, ownprops) => {
  // const data=state.companyprofile.deptdata.filter((item,index)=>{
  //   return index === ownprops.id
  // })
  return {
    editdata: state.companyprofile.users[ownprops.id]

  }
}

const mapDispatchToProps = disptach => {
  return {
    editdeptdata: (data, id) => { disptach(editdeptdata(data, id)) },
    deletequestion: (section, uid, qid) => { disptach(deletequestion(section, uid, qid)) },
    deletedeptdata:(id) =>{disptach(deletedeptdata(id))},
    fetchdata:()=>{disptach(fetchdata())}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditDepartment)
