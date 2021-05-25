import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Field, Formik, Form } from "formik";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputLabel from "@material-ui/core/InputLabel";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "../Company.css";
import AlertBox from "../../alert/AlertBox";
function QuestionsCard(props) {
  const [openalert, setopenalert] = useState(false);
  const [newquestion, setnewquestion] = useState({
    question: ''
  })
  const inputchange = (event) => {
    const { name, value } = event.target;
    setnewquestion((oldval) => {
      return {
        ...oldval,
        [name]: value,
      };
    });
    console.log(newquestion);
  };
  const initialValues = {
    question: ""
  };
  const onSubmit = (values, onSubmitProps) => {
    props.addquestion(newquestion);
    setnewquestion({
      question: ''
    })
    onSubmitProps.resetForm();
  };
  const validationSchema = yup.object({
    question: yup.string().required("Enter Default Question"),
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
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => {
          {/* console.log(formik); */}
          return (
            <>
              <Grid item xs={12}>
                <div className="questions_card1">
                  <Form>
                    <Field
                      as={TextField}
                      name="question"
                      style={{ marginLeft: "10px", width: "600px" }}
                      id="questions"
                      label="New Question"
                      variant="standard"
                      onInput={inputchange}
                    />
                    <br />
                    <br />
                    {formik.touched.question && formik.errors.question
                      ? erroralert(formik.errors.question)
                      : null}
                    <Button
                      onClick={() => setopenalert(true)}
                      variant="contained"
                      color="secondary"
                      type="submit"
                    >
                      Save
                    </Button>
                  </Form>
                </div>
              </Grid>
            </>
          );
        }}
      </Formik>
    </div>
  );
}
export default QuestionsCard;
