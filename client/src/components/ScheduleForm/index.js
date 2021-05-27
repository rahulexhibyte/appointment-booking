import React, { useState } from "react";
import { Steps, Alert } from "antd";
import "./style.css";
import ScheduleDate from "./components/ScheduleDate";
import ScheduleTime from "./components/ScheduleTime";
import ScheduleInfo from "./components/ScheduleInfo";
const { Step } = Steps;

function ScheduleForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [timeSlotValue, setTimeSlotValue] = useState(0);
  const dayTiming = [
    "09:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "12:00 PM - 01:00 PM",
    "01:00 PM - 02:00 PM",
    "02:00 PM - 03:00 PM",
    "03:00 PM - 04:00 PM",
    "04:00 PM - 05:00 PM",
  ];

  const stepsHandler = (current) => {
    setCurrentStep(current);
  };

  const nextStepsHandler = () => {
    setCurrentStep(currentStep + 1);
  };

  const scheduleMeetHandler = () => {};
  const onTimeChange = (e) => {
    nextStepsHandler();
    setTimeSlotValue(e.target.value);
  };

  const dateChangeHandler = (date, datestring) => {
    setStartDate(datestring);
  };

  return (
    <div className="schedule-form">
      <Alert
        style={{ margin: " 0 1rem 2rem 0" }}
        message="Informational Notes"
        description={
          <>
            You schedule an <span>1 hour</span> appointment on{" "}
            <span>
              {startDate !== ""
                ? new Date(startDate).toLocaleString("default", {
                    month: "long",
                    day: "2-digit",
                    weekday: "long",
                  })
                : "______"}
            </span>{" "}
            at{" "}
            <span>
              {timeSlotValue !== 0 ? dayTiming[timeSlotValue - 1] : "______"}
            </span>
          </>
        }
        type="info"
        showIcon
      ></Alert>
      <Steps
        current={currentStep}
        direction="vertical"
        size="small"
        onChange={stepsHandler}
      >
        <Step
          title="Choose available day for Your Appointment"
          description={
            currentStep === 0 ? (
              <ScheduleDate
                onClick={nextStepsHandler}
                value="Next"
                onDateChange={dateChangeHandler}
              />
            ) : null
          }
        ></Step>
        <Step
          title="Choose an available Time for Your Appointment"
          description={
            currentStep === 1 ? (
              <ScheduleTime
                onChange={onTimeChange}
                value={timeSlotValue}
                timing={dayTiming}
              />
            ) : null
          }
        ></Step>
        <Step
          title="Share your Contact Information with us"
          description={
            currentStep === 2 ? (
              <ScheduleInfo onSchedule={scheduleMeetHandler}></ScheduleInfo>
            ) : null
          }
        ></Step>
      </Steps>
    </div>
  );
}

export default ScheduleForm;
