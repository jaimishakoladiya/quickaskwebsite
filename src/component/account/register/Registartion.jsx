import React, { useState } from "react";
import image1 from "../../images/wave.png";
import image2 from "../../images/undraw_mobile_user_7oqo (3).svg";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import image3 from "../../images/undraw_profile_pic_ic5t (2).svg";
// import Loginpage from './Loginpage';
import { Field, Formik, Form } from "formik";
import "./registarion.css";
import { Route, Switch, useHistory } from "react-router-dom";
import * as yup from "yup";
import PersonIcon from "@material-ui/icons/Person";
import axios from 'axios';
import AlertBox from "../../alert/AlertBox";

function Registration() {
  const [openalert, setopenalert] = useState(false);
  async function makePostRequest(data){
    let res=await axios.post("http://localhost:2002/register",data)
    console.log(res.data)
  }

 
  const history = useHistory();

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
  const initialValues = {
    email:"",
    firstname: "",
    lastname: "",
    companyemail: "",
  };
  const onSubmit = (values, onsubmitprops) => {
    // onsubmitprops.resetForm();
    makePostRequest(values);
    console.log(values);
    history.push("/login")

  };

  const validationSchema = yup.object({
    email: yup.string().required("email is required"),
   firstname: yup.string().required("Firstname is required"),
    lastname: yup.string().required("Lastname is required"),
    companyemail: yup
      .string()
      .email("Enter valid email")
      .required("Email is required"),
  });
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <>
            <img src={image1} className="registration-wave"></img>
            <div className="registration-container">
              <div className="reimg" id="img">
                <img
                  src={image2}
                  className="img-fluid animated"
                  alt="images"
                ></img>
              </div>
              <div className="reg2-container">
                <Form className="registation-form">
                  <br />
                  <img src={image3} className="registration-face"></img>
                  <br />
                 
                  <br></br>

                  <div className="input-group">
                  <div className="registation-div one focus">
                   
                      <div className="icons">
                        <MailOutlineIcon className="person" />
                      </div>
                      <div>
                        <h5>Email.</h5>
                        <Field type="text" name="email" className="input" />
                      </div>
                    </div>
                    <div className="registation-div one focus">
                   
                      <div className="icons">
                        <PersonIcon className="person" />
                      </div>
                      <div>
                        <h5>Firstname.</h5>
                        <Field type="text" name="firstname" className="input" />
                      </div>
                    </div>

                    <div className="registation-div two focus">
                      <div className="icons">
                        <PersonIcon className="local" />
                      </div>
                      <div>
                        <h5>Lastname.</h5>
                        <Field type="text" name="lastname" className="input" />
                      </div>
                    </div>
                    <div className="registation-div two focus">
                      <div className="icons">
                        <MailOutlineIcon className="local" />
                      </div>
                      <div>
                        <h5>Company Email.</h5>
                        <Field
                          type="text"
                          name="companyemail"
                          className="input"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    {formik.errors.firstname
                      ? erroralert(formik.errors.firstname)
                      : formik.errors.lastname
                      ? erroralert(formik.errors.lastname)
                      : formik.errors.companyemail
                      ? erroralert(formik.errors.companyemail)
                      : null}
                    <input
                      type="submit"
                      className="tn"
                     onClick={() => setopenalert(true)}
                      value="Sign Up"
                    />
                  </div>
                  <br />

                  <input
                    type="button"
                    onClick={() => history.push("/login")}
                    className="btn"
                    value="Back To Sign In"
                  />
                </Form>
              </div>
            </div>
          </>
        );
      }}
    </Formik>
  );
}

export default Registration;
