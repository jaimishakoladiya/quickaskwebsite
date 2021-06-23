import React ,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import "./Interviews.css";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import { connect } from "react-redux";
import AlertBox from "../alert/AlertBox";
import { emptydata } from "../../redux/actions/interview/InterviewAction";
const CreateInterview = (props) => {
  var data;
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
      float: "right",
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
  }));
  function getSteps() {
    return [
      "Candidates",
      "Organization info",
      "panel Participant",
      "Interview Quetions",
    ];
  }
  function getStepContent(step) {
    switch (step) {
      case 0:
        
        return <Step1 key={step}/>;
      case 1:
        return <Step2 key={step}/>;
      case 2:
        return <Step3 key={step}/>;
      default:
        return <Step4 key={step}/>;
    }
  }
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const [openalert, setopenalert] = useState(false);
  const closealert = () => {
    setopenalert(false);
  };
  const handleNext = () => {
   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
const box=()=>{
  return  <AlertBox
  setopenalert={openalert}
  closealert={closealert}
  error='Enter All Fields' />
}
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
const senddata=()=>{
 props.emptydata();
}
  const handleReset = () => {
 props.emptydata();
};
  return (
    <div className="interview-Mainbox">
      <div id="stepper_font" className={classes.root}>
        <Stepper
          id="stepper_css"
          activeStep={activeStep}
          orientation="vertical"
        > 
        {openalert?box():null}
          {steps.map((label, index) => (
            <Step key={label}>
              <StepContent id="stepper_font">
                <Typography key={index}>{getStepContent(index)}</Typography>
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      style={{
                        color: "darkcyan",
                        backgroundColor: "black",
                        fontWeight: "bold",
                      }}
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    {activeStep!="3"?<Button
                      style={{ marginRight: "50px" }}
                      variant="contained"
                      // color="primary"
                      id="btn_color"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      Next
                    </Button>:<>
                    <Button
                      style={{ marginRight: "50px" }}
                      variant="contained"
                      // color="primary"
                      id="btn_color"
                      onClick={senddata}
                      className={classes.button}
                    >
                     submit
                    </Button> <Button
                      style={{ marginRight: "50px" }}
                      variant="contained"
                      // color="primary"
                      id="btn_color"
                      onClick={handleReset}
                      className={classes.button}
                    >
                     reset
                    </Button></>}
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper
            square
            elevation={0}
            className={classes.resetContainer}
          ></Paper>
        )}
      </div>
    </div>
  );
};
const mapStateToProps=state=>{
  return {
    data:state.interview
  }
}
const mapDispatchToProps=dispatch=>{
  return{
    emptydata:()=>{dispatch(emptydata())}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CreateInterview);
