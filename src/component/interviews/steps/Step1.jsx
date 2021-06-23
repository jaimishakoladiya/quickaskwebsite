import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import Button from "@material-ui/core/Button";
import Step1AddField from "./Step1AddField";
import * as yup from "yup";
import { Form, Formik, Field } from "formik";
import AlertBox from "../../alert/AlertBox";
import { addcandidatedata, deletecandidatedata } from "../../../redux/actions/interview/InterviewAction";
import { connect } from "react-redux";
const Step1 = (props) => {
  const [openalert, setopenalert] = useState(false);
  const [Candidate, SetCandidate] = useState({
    first_name: "",
    last_name: "",
  });
  const [CandidateArray, SetCandidatearray] = useState([]);
  const inputChangeFunction = (event) => {
    const { name, value } = event.target;
    SetCandidate((oldvalue) => {
      return {
        ...oldvalue,
        [name]: value,
      };
    });
  };
  const deletefunction = (id) => {
    props.deletecandidatedata(id)
  };
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    id: "",
  };
  const onSubmit = (values, onSubmitprops) => {
    props.addcandidatedata(values)
    onSubmitprops.resetForm();
  };
  const validationSchema = yup.object({
    first_name: yup.string().required("First Name Required!!"),
    last_name: yup.string().required("Last Name Required!!"),
    email: yup
      .string()
      .email("Enter valid Email-id ")
      .required("Email Required!!"),
    id: yup.string().required("id Required!!"),
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
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => {
          return (
            <>
              <div className="step1">
                <Form>
                  <div className="inputfield">
                    <PersonIcon
                      style={{
                        marginBottom: "15px",
                        marginLeft: "30px",
                        color: "darkcyan",
                      }}
                    />
                    <Field
                      as={TextField}
                      name="first_name"
                      id="firstname"
                      style={{ width: "160px" }}
                      onInput={inputChangeFunction}
                      id="standard-basic"
                      placeholder="First Name"
                    />
                    <PersonIcon
                      style={{
                        marginBottom: "15px",
                        marginLeft: "30px",
                        color: "darkcyan",
                      }}
                    />
                    <Field
                      as={TextField}
                      name="last_name"
                      id="lastname"
                      style={{ width: "160px" }}
                      onInput={inputChangeFunction}
                      id="standard-basic"
                      placeholder="Last Name"
                    />
                    <EmailIcon
                      style={{
                        marginBottom: "15px",
                        marginLeft: "30px",
                        color: "darkcyan",
                      }}
                    />
                    <Field
                      as={TextField}
                      name="email"
                      id="email"
                      style={{ width: "160px" }}
                      id="standard-basic"
                      placeholder="Email-Id"
                    />
                    <PersonIcon
                      style={{
                        marginBottom: "15px",
                        marginLeft: "30px",
                        color: "darkcyan",
                      }}
                    />
                    <Field
                      as={TextField}
                      name="id"
                      id="id"
                      style={{ width: "160px" }}
                      id="standard-basic"
                      placeholder="Id"
                    />
                    <br />

                    {formik.errors.firstname
                      ? erroralert(formik.errors.firstname)
                      : formik.touched.lastname && formik.errors.lastname
                        ? erroralert(formik.errors.lastname)
                        : formik.touched.email && formik.errors.email
                          ? erroralert(formik.errors.email)
                          : formik.touched.id && formik.errors.id
                            ? erroralert(formik.errors.id)
                            : null}
                    <div className="Add">
                      <Button
                        style={{ marginLeft: "30px", marginTop: "20px" }}
                        type="submit"
                        onClick={() => {
                          setopenalert(true);
                        }}
                        variant="contained"
                        color="secondary"
                      >
                        ADD
                      </Button><br /><br />

                    </div>
                    <div>
                      {
                        props.newdata.candidate.map((item, index) => {
                          return (
                            <Step1AddField
                              id={index}
                              deletefunction={deletefunction}
                              newrecords={props.newdata.candidate[index]}
                            />
                          )
                        })}
                    </div>
                  </div>
                </Form>
              </div>
            </>
          );
        }}
      </Formik>
    </>
  );
};
const mapStateToProps = state => {
  return {
    newdata: state.interview
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addcandidatedata: (newdata) => { dispatch(addcandidatedata(newdata)) },
    deletecandidatedata: (id) => { dispatch(deletecandidatedata(id)) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Step1);
