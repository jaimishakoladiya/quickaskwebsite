import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Typography from '@material-ui/core/Typography';
import Step1 from './component/interviews/steps/Step1';
import Step2 from './component/interviews/steps/Step2';
import Step3 from './component/interviews/steps/Step3';
import Step4 from './component/interviews/steps/Step4';
// import "./index.css"
import "./component/interviews/Interviews.css"
import GroupAddIcon from '@material-ui/icons/GroupAdd';
const mystyle = {
  backgroundColor:
  "#eef5f6" ,
  fontSize:"10000",
  marginLeft:"-10px",
   transform: "scale(1.0)",
   width: 50,
   height: 50,
   color:"black",
  
   borderRadius: '50%',
};
function getSteps() {
  
  return ['hhghg','jhhb','hggh','hh'];
  
}

function getStepContent(step) {
 
  switch (step) {
    case 0:
      return <Step1/>
    case 1:
      return <Step2/>
    case 2:
      return <Step3/>
    case 3:
     return <Step4/>           
    default:
      return 'Unknown step';
  }
}
function icon(step){
  switch (step) {
    case 0:
      return <GroupAddIcon  style={mystyle} />
    case 1:
      return <GroupAddIcon  style={mystyle} />
    case 2:
      return <GroupAddIcon  style={mystyle} />
    case 3:
     return <GroupAddIcon  style={mystyle} />           
    default:
      return 'Unknown step';
  }
}
function Intpra() {
  const steps = getSteps();

  
    
    return (
      <div className="main">
       <h4 className="main_h4">Create Interview</h4>
        <Stepper id="stepper" orientation="vertical">
          {steps.map((label, index) => {
            return (
              <div id="step">
              <Step  key={label} active={true}>
              <StepLabel>{icon(index)}</StepLabel>
                <Typography >{label}</Typography>
               
                <StepContent >
                  <Typography >{getStepContent(index)}</Typography>
                  
                </StepContent>
                
              </Step>
              </div>
            );
          })}
        </Stepper>
      </div>
    );
  
}
export default Intpra;