import React from "react";
import ScheduleForm from "../../components/ScheduleForm";
import "./style.css";

function AppointmentSchedule() {
  return (
    <div className="schedule-container">
      <label className="appointment-txt">Appointment Scheduling</label>
      <ScheduleForm></ScheduleForm>
    </div>
  );
}

export default AppointmentSchedule;
