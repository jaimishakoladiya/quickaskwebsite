import React, { useState } from 'react'
import Grid from "@material-ui/core/Grid";
import { Field, Formik,Form } from "formik";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputLabel from "@material-ui/core/InputLabel";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import '../Company.css';
import AlertBox from '../../alert/AlertBox';


function QuestionsCard() {
    const [openalert,setopenalert]=useState(false);
    const initialValues={
        
        questions:'',
        // minutes:'',
        // seconds:''
      }
    
      const onSubmit=(values,onSubmitProps)=>{
        console.log(values);
        onSubmitProps.resetForm()
    }
      
      const validationSchema=yup.object({
        questions:yup.string().required('Enter Default Question'),
        // minutes:yup.string().required('All fields are required'),
        // seconds:yup.string().required('All fields are required')
      })

      const closealert=()=>{
        setopenalert(false);
      }
      const erroralert=(error)=>{
          return (
              <AlertBox setopenalert={openalert} closealert={closealert} error={error}/>
          )
      }
    return (
        <div>
        <Formik
        initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          >
           {formik=>{
               return(
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
                  />
               
                  <FormControl style={{ marginLeft: "30px" }}>
                    <InputLabel htmlFor="demo-customized-select-native">
                      min
                    </InputLabel>
                    <Field as={NativeSelect} id="demo-customized-select-native">
                      <option value={10}>03</option>
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
                    {formik.errors.questions?erroralert(formik.errors.questions):null}
                  <Button
                  onClick={()=>setopenalert(true)}
                    variant="contained"
                    color="secondary"
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
}

export default QuestionsCard
