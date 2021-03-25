
import React from 'react'
import image1 from '../../images/wave.png';
import image2 from '../../images/undraw_mobile_user_7oqo (3).svg';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import image3 from '../../images/undraw_profile_pic_ic5t (2).svg';
// import Loginpage from './Loginpage';
import { Field, Formik,Form } from "formik";
import './registarion.css';
import {Route,Switch,useHistory} from 'react-router-dom';
import * as yup from "yup";
import PersonIcon from '@material-ui/icons/Person';
import * as yup from "yup"
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import LockIcon from '@material-ui/icons/Lock';
import { colors } from '@material-ui/core';
function Registration()
 {
  const history=useHistory();

  const initialValues={
    firstname:'',
    lastname:'',
    companyemail:''

  }

  const onSubmit=(values)=>
  {
    console.log(values);
  }

  const validationSchema=yup.object({
    firstname:yup.string().required("firstname is required"),
    lastname:yup.string().required('lastname is required'),
    companyemail:yup.string().email("Enter valid email").required("email is required")


  })
  return (
   
  
    <Formik 
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}>
    
  

      {formik=>{
        return(
          <>
        
      <img src={image1} className="registration-wave"></img>
      <div className="registration-container">
        <div className="reimg" id="img">
          <img src={image2} className="img-fluid animated" alt="images"></img>
        </div>
        <div className="reg2-container">
         <Form className="registation-form"><br/>
          <img src={image3} className="face"></img><br/>
          <h2 style={{fontFamily:"DIN"}}>Register...</h2><br></br>
          
          <div className="input-group">
          <div className="registation-div one focus">
            <div className="icons">
             <PersonIcon className="person" />
            </div>
            <div>
              <h5>Firstname.</h5>
              <Field type="text" name="firstname" className="input"/>
            </div>
          </div>
          
          <div className="registation-div two focus">
            <div className="icons">
             <PersonIcon className="local"/>
            </div>
            <div>
              <h5>Lastname.</h5>
              <Field type="text" name="lastname" className="input"/>
            </div>
          </div>
          <div className="registation-div two focus">
            <div className="icons">
             <MailOutlineIcon className="local"/>
            </div>
            <div>
              <h5>Company Email.</h5>
              <Field type="email"  name="companyemil" className="input"/>
            </div>
          </div> 
           
            </div>
            <div>
            {formik.errors.firstname?<div>{formik.errors.firstname}</div>:
            formik.errors.lastname?<div>{formik.errors.lastname}</div>:
            formik.errors.companyemail?<div>{formik.errors.companyemail}</div>
            :null}
            <input type="submit" className="tn" value="Sign Up"/>
            </div>
           <br/>
      
         <input type="submit" className="btn"   value="Back To Signin" />
      </Form>
        </div>
      </div>
      </>
        )
      }}
    </Formik>
   

  )
}

export default Registration;

