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
    questions: '',
    minutes: "0" + 3,
    seconds: "0" + 0
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

  const SelectItem = () => {
    let items = [];
    for (let i = 0; i <= 60; i++) {
      if (i <= 9) {
        items.push(
          <option key={i} value={"0" + i}>
            {"0" + i}
          </option>
        );
      } else {
        items.push(
          <option key={i} value={i}>
            {i}
          </option>
        );
      }
    }
    return items;
  };
  const initialValues = {
    questions: "",
    minutes: "",
    seconds: "",
  };

  const onSubmit = (values, onSubmitProps) => {
    
    props.addquestion(newquestion);
  
    setnewquestion({
      questions: '',
      minutes: "0" + 3,
      seconds: "0" + 0
    })
    onSubmitProps.resetForm();
  };

  const validationSchema = yup.object({
    questions: yup.string().required("Enter Default Question"),
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
                      name="questions"
                      style={{ marginLeft: "10px", width: "500px" }}
                      id="questions"
                      label="New Question"
                      variant="standard"
                      onInput={inputchange}
                    />

                    <FormControl style={{ marginLeft: "30px" }}>
                      <InputLabel htmlFor="demo-customized-select-native">
                        min
                      </InputLabel>
                      <Field as={NativeSelect}
                        value={newquestion.minutes}
                        name='minutes'
                        onChange={inputchange}
                      >
                        <option value=""></option>
                        {SelectItem()}
                      </Field>
                    </FormControl>
                    <FormControl style={{ marginLeft: "30px" }}>
                      <InputLabel htmlFor="demo-customized-select-native">
                        sec
                      </InputLabel>
                      <Field as={NativeSelect}
                        value={newquestion.seconds}
                        name='seconds'
                        onChange={inputchange}
                      >
                        <option value=""></option>
                        {SelectItem()}
                      </Field>
                    </FormControl>
                    <br />
                    <br />
                    {formik.touched.questions && formik.errors.questions
                      ? erroralert(formik.errors.questions)
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
