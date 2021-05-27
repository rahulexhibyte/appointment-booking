import React from "react";
import { Input, Button } from "antd";

const ScheduleInfo = (props) => {
  return (
    <div className="info-step">
      <Input
        className="info-inputs"
        placeholder="First Name"
        style={{ margin: "5px 0" }}
      />
      <Input
        className="info-inputs"
        placeholder="Last Name"
        style={{ margin: "5px 0" }}
      />
      <Input
        className="info-inputs"
        placeholder="Email Address"
        style={{ margin: "5px 0" }}
      />
      <Input
        className="info-inputs"
        placeholder="Phone Number"
        style={{ margin: "5px 0 1rem 0" }}
      />
      <Button type="primary" shape="round" onClick={props.onSchedule}>
        schedule a meeting
      </Button>
    </div>
  );
};

export default ScheduleInfo;
