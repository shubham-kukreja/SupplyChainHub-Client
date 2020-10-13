import Button from "@material-ui/core/Button";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Stepper from "@material-ui/core/Stepper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import {
  Completed,
  Deployment,
  ProductDetails,
  SupplyChain,
  YourDetails,
} from "./Forms";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBack from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  fullPage: {
    width: "100%",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  floatRight: {
    float: "right",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    marginRight: theme.spacing(30),
  },
}));

function getSteps() {
  return [
    "Your Details",
    "Product Details",
    "Customize Supply Chain",
    "Deploy Smart Contract",
  ];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <YourDetails />;
    case 1:
      return <ProductDetails />;
    case 2:
      return <SupplyChain />;
    case 3:
      return <Deployment />;
    default:
      return "Please go to Your Details";
  }
}

export default function HorizontalLabelPositionBelowStepper() {
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
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Completed />
            <div className={classes.floatRight}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                startIcon={<ArrowBack color="primary" />}
                className={classes.backButton}
              >
                Back
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <div className={classes.fullPage}>{getStepContent(activeStep)}</div>
            <div className={classes.floatRight}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                startIcon={<ArrowBack color="primary" />}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                endIcon={<ArrowForwardIcon />}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
