import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import Button from "@material-ui/core/Button";
import Step1AddField from "./Step1AddField";
import * as yup from "yup";
import { Form , Formik , Field } from "formik";
import AlertBox from "../../alert/AlertBox";

const Step1 = () => {
  const [openalert,setopenalert] = useState(false)
  const [FirstInputValue, SetFirstInput] = useState("");
  const [SecondInputValue, SetSecondInput] = useState("");
  const [Records, SetRecords] = useState([]);

  // const FirstInputFunction = (event) => {
  //   SetFirstInput(event.target.value);
  // };
  // const SecondInputFunction = (event) => {
  //   SetSecondInput(event.target.value);
  // };
  const AddRecords = () => {
    SetRecords((OldRecords) => {
      return [...OldRecords, `${FirstInputValue}  ${SecondInputValue}`];
    });
    console.log(Records);
    // SetFirstInput("");
    // SetSecondInput("");
  };

  const DeleteRecords = () => {
    return console.log("deleted");
  };
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    id: "",
  };
  const onSubmit = (values) => {
    console.log(values);
    // console.log(values.firstname)
    SetFirstInput(values.firstname);
    SetSecondInput(values.lastname);
    // console.log(FirstInputValue)
    AddRecords();

  };
  const validationSchema = yup.object({
    firstname: yup.string().required("First Name Required!!"),
    lastname: yup.string().required("Last Name Required!!"),
    email: yup.string().email("Enter valid Email-id ").required("Email Required!!"),
    id: yup.string().required("id Required!!")
  });
  const closealert =()=>{
    setopenalert(false);
  }
const erroralert =(error)=>{
  return( 
        <AlertBox setopenalert={openalert} closealert={closealert} error={error} />
     );
}
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {formik=> {
          console.log(formik)
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
                      // onChange={FirstInputFunction}
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
                      // onChange={SecondInputFunction}
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
                    {formik.errors.firstname?erroralert(formik.errors.firstname):
                    formik.errors.lastname?erroralert(formik.errors.lastname):
                    formik.errors.email?erroralert(formik.errors.email):
                    formik.errors.id?erroralert(formik.errors.id):
                    null }
                    <div className="Add">
                      <Button
                        type="submit"
                        onClick={()=>{setopenalert(true)
                                 }}
                        variant="contained"
                        // onClick={AddRecords}
                        color="secondary"
                      >
                        ADD
                      </Button>
                    </div>
                    <div>
                      {Records.map((recordsValue, index) => {
                        return (
                          <Step1AddField
                            Records={recordsValue}
                            key={index}
                            id={index}
                            onSelect={DeleteRecords}
                          />
                        );
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
export default Step1;
