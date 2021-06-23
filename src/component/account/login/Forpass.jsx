import React, { useState } from "react";
import image1 from "../../images/wave.png";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import image2 from "../../images/undraw_mobile_user_7oqo (3).svg";
import * as yup from "yup";
import image3 from "../../images/undraw_profile_pic_ic5t (2).svg";
import "./forpass.css";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import AlertBox from "../../alert/AlertBox";
function Forpass() {
  const [openalert, setopenalert] = useState(false);
  const initialValues = {
    email: "",
  };
  async function makePostRequest(data) {
    var res = await axios.post("http://localhost:2002/forgot", data);
    console.log(res.data);
  }
  const onSubmit = (values, onsubmitprops) => {
    onsubmitprops.resetForm();
    makePostRequest(values);
  };
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Enter Valid Email")
      .required("Email Is Required"),
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
        console.log(formik);
        return (
          <>
            <img alt="QuickAsk" src={image1} className="forgot-Wave"></img>
            <div className="forgot-container">
              <div className="img" id="img">
                <img
                  src={image2}
                  className="img-fluid animated"
                  alt="images"
                ></img>
              </div>
              <div className="forpass-container">
                <Form className="forgot-form">
                  <br />
                  <img
                    alt="QuickAsk"
                    src={image3}
                    className="forgot-avatar"
                  ></img>
                  <div className="input-group">
                    <br />
                    <br />
                    <div className="for-inpput-div one focus">
                      <div className="i">
                        <MailOutlineIcon className="per" />
                      </div>
                      <div>
                        <h5>Email</h5>
                        <Field
                          type="text"
                          id="email"
                          name="email"
                          className="input"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    {formik.errors.email
                      ? erroralert(formik.errors.email)
                      : null}
                    <input
                      type="submit"
                      onClick={() => setopenalert(true)}
                      className="tn"
                      value="Forgot Password"
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
export default Forpass;
