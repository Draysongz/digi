import { Step, Steps, useSteps } from "chakra-ui-steps";
import { VStack, Flex, Box, Button } from "@chakra-ui/react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

const Stepper = () => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

  return (
    <Box width="100%">
      <Steps activeStep={activeStep} variant={"circles-alt"} mb={5}>
        <Step label={"Take front Photo"} description={""} key={0}>
          <center>
            <Step1 />
          </center>
        </Step>
        <Step label={"Check Photo"} key={1}>
          <center>
            <Step2 />
          </center>
        </Step>
        <Step label={"Take back Photo"} key={2}>
          <center>
            <Step3 />
          </center>
        </Step>
        <Step label={"Check Photo"} key={3}>
          <center>
            <Step2 />
          </center>
        </Step>
        <Step label={"Confirm Photo"} key={4}>
          <center>
            <Step4 />
          </center>
        </Step>
      </Steps>
      <br />
      <Button
        onClick={() => {
          prevStep(1);
        }}
      >
        Previous
      </Button>
      <Button
        onClick={() => {
          nextStep(1);
        }}
      >
        Forward
      </Button>
    </Box>
  );
};

export default Stepper;
