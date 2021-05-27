import React from "react";
import { DatePicker, Button, Space } from "antd";

const ScheduleDate = (props) => {
  return (
    <div className="step-1-class">
      <Space direction="vertical">
        <DatePicker
          style={{ margin: "7px 5px" }}
          onChange={props.onDateChange}
        />
        <Button type="primary" onClick={props.onClick}>
          {props.value}
        </Button>
      </Space>
    </div>
  );
};

export default ScheduleDate;
