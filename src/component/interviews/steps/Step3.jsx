import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import Button from "@material-ui/core/Button";
import * as yup from "yup";
import AlertBox from "../../alert/AlertBox";
import { Form, Formik, Field } from "formik";
import Step1AddField from "./Step1AddField";
import { addpaneldata, deletepaneldata } from "../../../redux/actions/interview/InterviewAction";
import { connect } from "react-redux";
import Step3AddPanel from "./Step3AddPanel";
const Step3 = (props) => {
  const [open, setopenalert] = useState(false);
  const [panelcandidate, setpanelcandidate] = useState({
    firstName: "",
    lastName: ""
  })
  const [panelArray, setpanelArray] = useState([]);
  const inputChangeFunction = (event) => {
    const { name, value } = event.target;
    setpanelcandidate((oldvalue) => {
      return {
        ...oldvalue,
        [name]: value
      }
    })
  }
  const AddpanelCandidate = (values) => {
    setpanelArray((oldvalue) => {
      return [...oldvalue, panelcandidate]
    })
  }
  const deletefunction = (id) => {
    // return setpanelArray((oldval)=>{
    //   return oldval.filter((arr,index)=>{
    //     return index !== id ;
    //   })
    // })
    props.deletepaneldata(id)
  }
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
  };
  const onSubmit = (values, onSubmitprops) => {
    props.addpaneldata(values);
    AddpanelCandidate();
    onSubmitprops.resetForm();
  };
  const validationSchema = yup.object({
    firstName: yup.string().required("firstName Requierd!!"),
    lastName: yup.string().required("lastName Requierd!!"),
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
                      color: "darkcyan",
                      fontSize: "20px",
                    }}
                  />
                  <Field
                    as={TextField}
                    name="firstName"
                    style={{ width: "160px" }}
                    id="firstName"
                    onInput={inputChangeFunction}
                    placeholder="First Name"
                  />
                  <PersonIcon
                    style={{
                      marginBottom: "13px",
                      marginLeft: "60px",
                      marginRight: "2px",
                      color: "darkcyan",
                      fontSize: "20px",
                    }}
                  />
                  <Field
                    as={TextField}
                    name="lastName"
                    style={{ width: "160px" }}
                    id="lastName"
                    onInput={inputChangeFunction}
                    placeholder="Last Name"
                  />
                  <EmailIcon
                    style={{
                      marginBottom: "13px",
                      marginLeft: "60px",
                      marginRight: "2px",
                      color: "darkcyan",
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
                  {formik.touched.firstName && formik.errors.firstName
                    ? erroralert(formik.errors.firstName)
                    : formik.touched.firstName && formik.errors.lastName
                      ? erroralert(formik.errors.lastName)
                      : formik.touched.firstName && formik.errors.email
                        ? erroralert(formik.errors.email)
                        : null}

                  <div className="step3-Add">
                    <Button
                      style={{ marginLeft: "30px", marginTop: "20px" }}
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
                      props.newdata.panel.map((item, index) => {
                        return (
                          <Step3AddPanel newrecords={panelcandidate}
                            deletefunction={deletefunction}
                            newrecords={props.newdata.panel[index]}
                            id={index} />)
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
const mapStateToProps = state => {
  return {
    newdata: state.interview
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addpaneldata: (newdata) => { dispatch(addpaneldata(newdata)) },
    deletepaneldata: (id) => { dispatch(deletepaneldata(id)) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Step3);
