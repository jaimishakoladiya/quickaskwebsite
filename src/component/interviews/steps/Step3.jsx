import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import Button from "@material-ui/core/Button";
import * as yup from "yup";
import AlertBox from "../../alert/AlertBox";
import { Form, Formik, Field } from "formik";
import Step1AddField from "./Step1AddField";
import {addpaneldata} from "../../../redux/actions/interview/InterviewAction";
import { connect } from "react-redux";
const Step3 = (props) => {
  const [open, setopenalert] = useState(false);
  const [panelcandidate , setpanelcandidate] = useState({
  firstname:"",
  lastname:""
})
const [panelArray,setpanelArray] = useState([]);
  const inputChangeFunction =(event)=>{
    const { name , value} = event.target;
    setpanelcandidate ((oldvalue)=>{
      return {
        ...oldvalue,
        [name] : value
      }
    })
}
const AddpanelCandidate =(values)=>{
  setpanelArray((oldvalue)=>{
    return [ ...oldvalue , panelcandidate]
  })
}
const deletefunction=(id)=>{
    return setpanelArray((oldval)=>{
      return oldval.filter((arr,index)=>{
        return index !== id ;
      })
    })
}
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
  };
  const onSubmit = (values, onSubmitprops) => {
    console.log(values);
    props.addpaneldata(values);
    AddpanelCandidate();
    onSubmitprops.resetForm();
  };
  const validationSchema = yup.object({
    firstname: yup.string().required("firstname Requierd!!"),
    lastname: yup.string().required("lastname Requierd!!"),
    email: yup.string().email("enter valid email").required("email Requierd!!"),
  });
  const closealert = () => {
    setopenalert(false);
  };

  const erroralert = (error) => {
    return (
      <AlertBox setopenalert={open} closealert={closealert} error={error} />
    );
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <>
            <div className="step3">
              <Form>
                <div className="inputfield">
                  <PersonIcon
                    style={{
                      marginTop: "9px",
                      marginBottom: "13px",
                      marginLeft: "60px",
                      marginRight: "2px",
                      color: "gray",
                      fontSize: "20px",
                    }}
                  />
                  <Field
                    as={TextField}
                    name="firstname"
                    style={{ width: "160px" }}
                    id="firstname"
                    onInput={inputChangeFunction}
                    placeholder="First Name"
                  />
                  <PersonIcon
                    style={{
                      marginBottom: "13px",
                      marginLeft: "60px",
                      marginRight: "2px",
                      color: "gray",
                      fontSize: "20px",
                    }}
                  />
                  <Field
                    as={TextField}
                    name="lastname"
                    style={{ width: "160px" }}
                    id="lastname"
                    onInput={inputChangeFunction}
                    placeholder="Last Name"
                  />
                  <EmailIcon
                    style={{
                      marginBottom: "13px",
                      marginLeft: "60px",
                      marginRight: "2px",
                      color: "gray",
                      fontSize: "20px",
                    }}
                  />
                  <Field
                    as={TextField}
                    name="email"
                    style={{ width: "160px" }}
                    id="email"
                    placeholder="Email-Id"
                  />
                  {formik.touched.firstname && formik.errors.firstname
                    ? erroralert(formik.errors.firstname)
                    : formik.touched.firstname && formik.errors.lastname
                    ? erroralert(formik.errors.lastname)
                    : formik.touched.firstname && formik.errors.email
                    ? erroralert(formik.errors.email)
                    : null}

                  <div className="step3-Add">
                    <Button
                      type="submit"
                      onClick={() => setopenalert(true)}
                      variant="contained"
                      color="secondary"
                    >
                      ADD
                    </Button>
                  </div>
                  <div>
                   
                           {
                             props.newdata.paneldata.map((item,index)=>{
                               return(
                             <Step1AddField newrecords={panelcandidate}
                           deletefunction={deletefunction}
                           newrecords={props.newdata.paneldata[index]}
                           id={index}/>)
                         })}
                    
                  </div>
                </div>
              </Form>
            </div>
          </>
        );
      }}
    </Formik>
  );
};
const mapStateToProps = state =>{
  return{
    newdata:state.interview
  }
}
const mapDispatchToProps = dispatch => {
  return{
    addpaneldata: (newdata) => {dispatch(addpaneldata(newdata))}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Step3);
