import React,{useEffect, useState} from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Typography from '@material-ui/core/Typography';
import Step1 from './steps/Step1';
import axios from 'axios';
import {connect} from "react-redux";
import Button from "@material-ui/core/Button";
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { getmanager ,emptydata, setdisabled} from "../../redux/actions/interview/InterviewAction";

// import "./index.css"
import PeopleIcon from '@material-ui/icons/People';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import "./Interviews.css"

import EditIcon from '@material-ui/icons/Edit';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import CompanyFooter from '../companyprofile/CompanyFooter';

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
  
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
  
    backgroundColor:"darkcyan",
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundColor:"darkcyan",
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <GroupAddIcon/>,
    2: <PersonAddIcon />,
    3: <PeopleIcon />,
    4: <ContactSupportIcon/>
  };

  return (
    <div 
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >

      {icons[String(props.icon)]}
    </div>
  );
}
function getSteps() {
  
  return ["Candidates",
  "Organization Info",
  "Panel Participant",
  "Interview Quetions"];
  
}


function AddInterview(props) {
  // const [disabled,setdisabled]=useState(false);
  function getStepContent(step) {
 
    switch (step) {
      case 0:
        return <Step1/>
      case 1:
        return <Step2 />
      case 2:
        return <Step3/>
      case 3:
       return <Step4/>           
      default:
        return 'Unknown step';
    }
  }
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.token;
  const steps = getSteps();
 const addinterview=async ()=>{
   var data;

  data={
    candidate:props.data.candidate,
    managers:props.data.orginfo,
    panel:props.data.panel,
    question_bank:{
      department:props.data.orginfo[0].department,
      test:props.data.interviewque
    }
  }
  console.log(data)
 var res=await axios({
   method:'post',
   url:'http://localhost:2002/manager-added-interview',
   data:data,
   headers:{
     Authorization:token
   }
 })
  console.log(res.data)
  props.setdisabled(false)
  props.emptydata()
 }
 const resetForm=()=>{
  props.setdisabled(false)

   props.emptydata();
 }
    return (
      <div className="main">
       <div className="Interview_formheader">
     <h4 className="Interview-info-title">
            Create Interview
          </h4>
          </div><br/>
        <Stepper id="stepper" orientation="vertical">
          {steps.map((label, index) => {
            return (
              
              <Step  key={label} active={true}>
              <StepLabel StepIconComponent={ColorlibStepIcon}><h3>{label}</h3></StepLabel>
              
               
                <StepContent >
                  <Typography >{getStepContent(index)}</Typography>
                  
                </StepContent>
                
              </Step>
              
            );
          })}
          <div>
          <Button style={{backgroundColor: "darkcyan",
                        fontWeight: "bold",
                        width:"75px",
                        marginLeft:"700px",
                        height:"40px",
                        color:"black"
                      }}
                      onClick={addinterview}>Submit</Button>
                      <Button
                      style={{
                        color: "darkcyan",
                        backgroundColor: "black",
                        fontWeight: "bold",
                        height:"40px",
                        width:"75px",
                        marginLeft:"20px"
                      }}
                      onClick={resetForm}
                      >Reset</Button>
      </div></Stepper></div>
      
    );
  
}
const mapStateToProps=state=>{
  return {
    data:state.interview
  }
}
const mapDispatchToProps=dispatch=>{
  return{
    getmanager:(data)=>{dispatch(getmanager(data))},
    emptydata:()=>{dispatch(emptydata())},
    setdisabled:(data)=>{dispatch(setdisabled(data))}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddInterview);