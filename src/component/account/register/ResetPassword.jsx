import React, { useState } from "react";
import image1 from "../../images/wave.png";
import image2 from "../../images/undraw_mobile_user_7oqo (3).svg";
import * as yup from "yup";
import image3 from "../../images/undraw_profile_pic_ic5t (2).svg";
import "./resetpass.css";
import { useHistory, useLocation } from "react-router-dom";
import LockIcon from "@material-ui/icons/Lock";
import { Field, Form, Formik } from "formik";
import AlertBox from "../../alert/AlertBox";
import axios from "axios";
function ResetPassword() {
  const location = useLocation();
  const history = useHistory();
  var id = new URLSearchParams(location.search).get("id");
  const [openalert, setopenalert] = useState(false);
  async function verifyemail() {
    let res = await axios.get(`http://localhost:2002/verifyemail?id=${id}`);
    console.log(res.data);
  }
  verifyemail();
  async function resetpassword(pass) {
    let data = { password: pass };
    let res = await axios.post(`http://localhost:2002/reset/${id}`, data);
    history.push("./login");
    console.log(res.data);
  }
  const initialValues = {
    password: "",
    cpassword: "",
  };
  const onSubmit = (values, onsubmitprops) => {
    resetpassword(values.password);
    onsubmitprops.resetForm();
  };
  const validationSchema = yup.object({
    password: yup.string().required("password Is Required"),
    cpassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
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
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <>
            <img alt="QuickAsk" src={image1} className="forgot-Wave"></img>
            <div className="forgot-container">
              <div className="img" id="img">
                <img
                  alt="QuickAsk"
                  src={image2}
                  className="img-fluid animated"
                ></img>
              </div>
              <div className="forpass-container">
                <Form className="forgot-form">
                  <img
                    alt="QuickAsk"
                    src={image3}
                    className="forgot-avatar"
                  ></img>
                  <div className="input-group">
                    <br />
                    <div className="for-inpput-div one focus">
                      <div className="i">
                        <LockIcon className="per" />
                      </div>
                      <div>
                        <h5>Password</h5>
                        <Field
                          type="password"
                          id="password"
                          name="password"
                          className="input"
                        />
                      </div>
                    </div>
                    <div className="for-inpput-div two focus">
                      <div className="i">
                        <LockIcon className="per" />
                      </div>
                      <div>
                        <h5> Confirm Password</h5>
                        <Field
                          type="password"
                          id="cpassword"
                          name="cpassword"
                          className="input"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    {formik.errors.password
                      ? erroralert(formik.errors.password)
                      : formik.errors.cpassword
                      ? erroralert(formik.errors.cpassword)
                      : null}
                    <input
                      type="submit"
                      onClick={() => setopenalert(true)}
                      className="tn"
                      value="Reset Password"
                    />
                  </div>
                  <br />
                </Form>
              </div>
            </div>
          </>
        );
      }}
    </Formik>
  );
}

export default ResetPassword;
