import { useContext, useState } from "react";
import "./Progress.css";
import Researchinfo from "../Researchinfo/Researchinfo";
import UserInfo from "../UserInfo/UserInfo";
import { UserForm } from "../Usecontext/UserForm/UserForm";

const CheckoutStepper = ({ stepsConfig = [] }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [handleSubmit] = useContext(UserForm);

  const handleNext = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === stepsConfig.length) {
        setIsComplete(false);
        return prevStep - 1;
      } else {
        return prevStep + 1;
      }
    });
  };

  
  const ActiveComponent = stepsConfig[currentStep - 1]?.Component;

  return (
    <>
      <div className="text-white w-screen px-10">
        <div className="flex mb-10 justify-center ">
          {stepsConfig.map((step, index) => {
            return (
              <div
                key={step.name}
                className={`step w-[30%] ${
                  currentStep > index + 1 || isComplete ? "complete" : ""
                } ${currentStep === index + 1 ? "active" : ""} `}
              >
                <div className="step-number">
                  {currentStep > index + 1 || isComplete ? (
                    <span>&#10003;</span>
                  ) : (
                    index + 1
                  )}
                </div>
                <div className="step-name ml-5 flex flex-col text-white mt-2 text-xl">
                  {step.name}
                </div>
                <div className="w-52 text-center mt-4 text-lg ">
                  {currentStep === index + 1 ? <ActiveComponent /> : null}
                </div>
              </div>
            );
          })}

          {!isComplete && (
            <button
              className="  gap-5 flex items-center justify-center"
              onClick={handleNext}
            >
              <span className=" bg-blue-600  px-3 py-2 rounded-md  w-24 h-fit text-center gap-5 ">
                {currentStep === stepsConfig.length ? "Previous" : "Next"}
              </span>
              <span
                className={` ${
                  currentStep === stepsConfig.length ? "bg-blue-600" : null
                }  px-3 py-2 rounded-md  w-24 h-fit text-center gap-5 `}
              >
                {currentStep === stepsConfig.length ? (
                  <button type="reset" onSubmit={handleSubmit}>
                    Submit
                  </button>
                ) : null}
              </span>
            </button>
          )}
        </div>

        <div>{currentStep === 1 ? <UserInfo /> : <Researchinfo />}</div>
      </div>
    </>
  );
};

export default CheckoutStepper;
