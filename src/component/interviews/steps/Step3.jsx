import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import Button from "@material-ui/core/Button";
import * as yup from "yup";
import AlertBox from "../../alert/AlertBox";
import { Form, Formik, Field } from "formik";

const Step3 = () => {
  const [open, setopenalert] = useState(false);
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
  };
  const onSubmit = (values, onSubmitprops) => {
    console.log(values);
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
                  {formik.errors.firstname
                    ? erroralert(formik.errors.firstname)
                    : formik.errors.lastname
                    ? erroralert(formik.errors.lastname)
                    : formik.errors.email
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
                </div>
              </Form>
            </div>
          </>
        );
      }}
    </Formik>
  );
};
export default Step3;
