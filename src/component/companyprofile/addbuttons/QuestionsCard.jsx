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

<<<<<<< HEAD
function QuestionsCard() {
  const [openalert, setopenalert] = useState(false);
  const SelectItem = () => {
    let items = [];
    for (let i = 0; i <= 60; i++) {
      if (i <= 9) {
        items.push(
          <option key={i} value={i}>
            0{i}
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
    // minutes:'',
    // seconds:''
  };

  const onSubmit = (values, onSubmitProps) => {
    console.log(values);
    onSubmitProps.resetForm();
  };

  const validationSchema = yup.object({
    questions: yup.string().required("Enter Default Question"),
    // minutes:yup.string().required('All fields are required'),
    // seconds:yup.string().required('All fields are required')
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
=======
function QuestionsCard(props) {
  const [openalert, setopenalert] = useState(false);
  const [newQuestions, setnewQuestions] = useState({
    questions: ''
  })

  const inputchange = (event) => {
    const { name, value } = event.target;
    // console.log(value)
    setnewQuestions((oldval) => {
      return {
        ...oldval,
        [name]: value
      }
    })
    
  }
  const initialValues = {

    questions: '',
    minutes: '',
    seconds: ''
  }

  const onSubmit = (values, onSubmitProps) => {
    console.log(values);
    props.addquestions(newQuestions);
    setnewQuestions({
      questions:''
    })
    onSubmitProps.resetForm()

  }

  const validationSchema = yup.object({
    questions: yup.string().required('Enter Default Question'),
    // minutes:yup.string().required('All fields are required'),
    // seconds:yup.string().required('All fields are required')
  })

  const closealert = () => {
    setopenalert(false);
  }
  const erroralert = (error) => {
    return (
      <AlertBox setopenalert={openalert} closealert={closealert} error={error} />
    )
  }
>>>>>>> 9bc369de5ad2944782f3eec61b3012adbfb79952
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
<<<<<<< HEAD
        {(formik) => {
=======
        {formik => {

>>>>>>> 9bc369de5ad2944782f3eec61b3012adbfb79952
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
<<<<<<< HEAD
                    />

                    <FormControl style={{ marginLeft: "30px" }}>
                      <InputLabel htmlFor="demo-customized-select-native">
                        min
                      </InputLabel>
                      <NativeSelect
                        id="demo-customized-select-native"
                        className="Step4_Dropdown1">
                        {SelectItem()}
                      </NativeSelect>
                    </FormControl>
                    <FormControl style={{ marginLeft: "30px" }}>
                      <InputLabel htmlFor="demo-customized-select-native">
                        sec
                      </InputLabel>
                     <NativeSelect
                        id="demo-customized-select-native"
                        className="Step4_Dropdown1">
                        {SelectItem()}
                      </NativeSelect>
                    </FormControl>
                    <br />
                    <br />
                    {formik.errors.questions
                      ? erroralert(formik.errors.questions)
                      : null}
=======
                      onInput={inputchange}
                    />



                    <FormControl style={{ marginLeft: "30px" }}>
                      <InputLabel htmlFor="demo-customized-select-native">
                        min
                    </InputLabel>
                      <Field as={NativeSelect} id="demo-customized-select-native">
                        <option value="565">03</option>
                        <option value={20}>0</option>
                        <option value={30}>1</option>
                      </Field>
                    </FormControl>

                    <FormControl style={{ marginLeft: "30px" }}>
                      <InputLabel htmlFor="demo-customized-select-native">
                        sec
                    </InputLabel>
                      <Field as={NativeSelect} id="demo-customized-select-native">
                        <option value={10}>03</option>
                        <option value={20}>0</option>
                        <option value={30}>1</option>
                      </Field>
                    </FormControl>
                    <br />
                    <br />
                    {formik.errors.questions ? erroralert(formik.errors.questions) : null}
>>>>>>> 9bc369de5ad2944782f3eec61b3012adbfb79952
                    <Button
                      onClick={() => setopenalert(true)}
                      variant="contained"
                      color="secondary"
<<<<<<< HEAD
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
=======
                      type="submit">
                      Save
                  </Button>
                  </Form>
                </div>
              </Grid>
            </>)
        }}
      </Formik>
    </div>
  )
>>>>>>> 9bc369de5ad2944782f3eec61b3012adbfb79952
}

export default QuestionsCard;
