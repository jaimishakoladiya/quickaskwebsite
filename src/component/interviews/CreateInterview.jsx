import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import "./Interviews.css";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";

const CreateInterview = () => {
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
        return <Step1 />;
      case 1:
        return <Step2 />;
      case 2:
        return <Step3 />;
      default:
        return <Step4 />;
    }
  }

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="interview-Mainbox">
      <div id="stepper_font" className={classes.root}>
        <Stepper
          id="stepper_css"
          activeStep={activeStep}
          orientation="vertical"
        >
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent id="stepper_font">
                <Typography>{getStepContent(index)}</Typography>

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
                    <Button
                      style={{ marginRight: "50px" }}
                      variant="contained"
                      // color="primary"
                      id="btn_color"
                      onClick={handleNext}
                      className={classes.button}
                    
                    >
                      {activeStep === steps.length - 1 ? "submit" : "Next"}
                    </Button>
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
export default CreateInterview;
