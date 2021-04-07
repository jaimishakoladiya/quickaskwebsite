import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import Button from "@material-ui/core/Button";
import Step1AddField from "./Step1AddField";
import * as yup from "yup";
import { Form, Formik, Field } from "formik";
import AlertBox from "../../alert/AlertBox";
import {addcandidatedata} from "../../../redux/actions/interview/InterviewAction"; 
import { connect } from "react-redux";
const Step1 = (props) => {
  const [openalert, setopenalert] = useState(false);
  const [Candidate, SetCandidate] = useState({
    firstname: "",
    lastname: "",
  });
  const [CandidateArray, SetCandidatearray] = useState([]);

  const inputChangeFunction = (event) => {
    const { name, value } = event.target;
    console.log(value);
    SetCandidate((oldvalue) => {
      return {
        ...oldvalue,
        [name]: value,
      };
    });
  };
  const addcandidate = (values) => {
    console.log(Candidate);
    SetCandidatearray((oldval) => {
      return [...oldval, Candidate];
    });

    console.log(CandidateArray);
  };

  const deletefunction = (id) => {
    return SetCandidatearray((oldval) => {
      return oldval.filter((arr, index) => {
        return index !== id;
      });
    });
  };
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    id: "",
  };
  const onSubmit = (values, onSubmitprops) => {
    console.log(values);
    props.addcandidatedata(values)
    addcandidate(values);
    SetCandidate({
      firstname: "",
      lastname: "",
    });
    onSubmitprops.resetForm();
   
    console.log(props.newdata);

  
  };
 
  const validationSchema = yup.object({
    firstname: yup.string().required("First Name Required!!"),
    lastname: yup.string().required("Last Name Required!!"),
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
          console.log(formik);
          return (
            <>
              <div className="step1">
                <Form>
                  <div className="inputfield">
                    <PersonIcon
                      style={{
                        marginBottom: "15px",
                        marginLeft: "30px",
                        color: "gray",
                      }}
                    />
                    <Field
                      as={TextField}
                      name="firstname"
                      id="firstname"
                      style={{ width: "160px" }}
                      onInput={inputChangeFunction}
                      //  value={FirstInputValue}
                      id="standard-basic"
                      placeholder="First Name"
                    />
                    <PersonIcon
                      style={{
                        marginBottom: "15px",
                        marginLeft: "30px",
                        color: "gray",
                      }}
                    />
                    <Field
                      as={TextField}
                      name="lastname"
                      id="lastname"
                      style={{ width: "160px" }}
                      onInput={inputChangeFunction}
                      // value={SecondInputValue}
                      id="standard-basic"
                      placeholder="Last Name"
                    />
                    <EmailIcon
                      style={{
                        marginBottom: "15px",
                        marginLeft: "30px",
                        color: "gray",
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
                        color: "gray",
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
                        type="submit"
                        onClick={() => {
                          setopenalert(true);
                        }}
                        variant="contained"
                        // onClick={AddRecords}
                        color="secondary"
                      >
                        ADD
                      </Button><br/><br/>
                     
                    </div>
                    <div>
                      
                       {
                         props.newdata.candidatedata.map((item,index)=>{
                           return(
                          <Step1AddField
                            id={index}
                            deletefunction={deletefunction}
                            newrecords={props.newdata.candidatedata[index]}
                          />
                          ) })}
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
const mapStateToProps = state =>{
  return{
  newdata:state.interview
  }
}
const mapDispatchToProps = dispatch => {
  return{
    addcandidatedata: (newdata) => {dispatch(addcandidatedata(newdata))}
  }

}
export default connect(mapStateToProps,mapDispatchToProps)(Step1);
