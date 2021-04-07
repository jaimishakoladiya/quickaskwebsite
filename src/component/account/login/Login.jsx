import React, { useState } from "react";
import image1 from "../../images/wave.png";
import image2 from "../../images/undraw_mobile_user_7oqo (3).svg";
import image4 from "../../images/undraw_Bookmarks_re_mq1u.svg";
import image3 from "../../images/undraw_profile_pic_ic5t (2).svg";
import "./login.css";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import * as yup from "yup";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import AlertBox from "../../alert/AlertBox";
import { useHistory } from "react-router-dom";

// import Registration from './Registartion';
const useStyles = makeStyles((theme) => ({
  customWidth: {
    maxWidth: 350,
    fontSize: 18,

    zIndex: 9999,
    lineHeight: 1.4,
    color: "#eef5f6",
    cursor: "default",

    webkitFontSmoothing: "antialiased",
    webkitTransition: "opacity 0.3s 0.3s",
    transition: "opacity 0.3s 0.3s",
  },
}));

function Login() {
  const [openalert, setopenalert] = useState(false);
  const history = useHistory();
  const initialValues = {
    username: "",
    password: "",
  };

  const onSubmit = (values, onSubmitprops) => {
    console.log(values);
    onSubmitprops.resetForm();
    history.push("/innernavbar")
  };

  const validationSchema = yup.object({
    username: yup
      .string()
      .email("Enter valid email")
      .required("Username is requied"),
    password: yup.string().required("Enter password"),
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

  const classes = useStyles();

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
            <img src={image1} className="Wave1"></img>
            <div className="login-container">
              <img src={image1} className="Wave1"></img>
              <div className="img1" id="img">
                <img src={image2} className="img-fluid animated"></img>
              </div>
              <div className="main-login-container">
                <Form className="login-form1">
                  <img src={image3} className="login-avtar"></img>
                  <h2>Welcome..</h2>
                  <br />
                  <div className="inpput-div1 one focus">
                    <div className="i">
                      <PersonIcon className="per" />
                    </div>
                    <div>
                      <h5>UserName.</h5>
                      <Field name="username" type="text" className="input" />
                    </div>
                  </div>
                  <div className="inpput-div1 two focus">
                    <div className="i">
                      <LockIcon className="loc" />
                    </div>
                    <div>
                      <h5>Password.</h5>
                      <Field
                        name="password"
                        type="password"
                        className="input"
                      />
                    </div>
                  </div>

                  <a
                    onClick={() => history.push("/forgotpassword")}
                    style={{ fontSize: "20px" }}
                  >
                    Forget Password..?
                  </a>
                  {formik.errors.username
                    ? erroralert(formik.errors.username)
                    : formik.errors.password
                    ? erroralert(formik.errors.password)
                    : null}

                  <input
                    type="submit"
                    onClick={() => setopenalert(true)}
                    className="btn-login"
                    value="login"
                  />
                  <br />

                  {/* <input type="submit" className="button"  value="Create Account" /> */}

                  <Tooltip
                    classes={{ tooltip: classes.customWidth }}
                    title="Click Here When You Are Ready To Create Your Full Profile And Start Saving Time"
                    placement="top"
                  >
                    {/* <NavLink to="/Registration" > */}
                    <div
                      className="caccount"
                      onClick={() => history.push("/registartion")}
                    >
                      {/* <a href={<Registartion/>} value="Create Account">CreateAccount</a><br /><br /> */}

                      <h1 className="anker">CreateAccount</h1>

                      <img src={image4} className="anker-image" />
                    </div>
                    {/* </NavLink> */}
                  </Tooltip>
                  {/* <NavLink to="/" className="navlink" className="a">home  </NavLink><br /><br /> */}

                  {/* <input type="submit" className="tn" value="Craete Account"/> */}
                </Form>
              </div>
            </div>
          </>
        );
      }}
    </Formik>
  );
}

export default Login;
