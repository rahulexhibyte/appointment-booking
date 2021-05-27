import React from "react";
import { Space, Radio } from "antd";

const ScheduleTime = (props) => {
  return (
    <div className="timeslot-radio-grp">
      <Radio.Group onChange={props.onChange} value={props.value}>
        <Space direction="vertical">
          {props.timing.map((time, index) => {
            return (
              <Radio value={index + 1} key={index}>
                {time}
              </Radio>
            );
          })}
        </Space>
      </Radio.Group>
    </div>
  );
};

export default ScheduleTime;
