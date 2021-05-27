import React from "react";

import AppoinmentDataTable from "../../components/dataTable";

import "./style.css";

const BookingMeetingList = () => {
  const columns = [
    {
      name: "Title",
      selector: "title",
      center: true,
    },
    {
      name: "Meetings Date",
      selector: "meetingDate",
      center: true,
    },
    {
      name: "Meetings Slot",
      selector: "meetingSlot",
      center: true,
    },
    {
      name: "Username",
      selector: "userName",
      center: true,
    },
    {
      name: "Email",
      selector: "userEmail",
      center: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <>
          <button className="btn accept-btn">Accept</button>
          <button className="btn reject-btn">Reject</button>
        </>
      ),
      center: true,
    },
  ];

  const data = [
    {
      id: 1,
      title: "Project Discussion",
      meetingDate: "25/05/2021",
      meetingSlot: "9:00 PM - 10:00 PM",
      userName: "abvcdfr",
      userEmail: "abc@gmail.com",
    },
    {
      id: 2,
      title: "Project Discussion",
      meetingDate: "25/05/2021",
      meetingSlot: "9:00 PM - 10:00 PM",
      userName: "abvcdfr",
      userEmail: "abc@gmail.com",
    },
    {
      id: 3,
      title: "Project Discussion",
      meetingDate: "25/05/2021",
      meetingSlot: "9:00 PM - 10:00 PM",
      userName: "abvcdfr",
      userEmail: "abc@gmail.com",
    },
    {
      id: 4,
      title: "Project Discussion",
      meetingDate: "25/05/2021",
      meetingSlot: "9:00 PM - 10:00 PM",
      userName: "abvcdfr",
      userEmail: "abc@gmail.com",
    },
    {
      id: 5,
      title: "Project Discussion",
      meetingDate: "25/05/2021",
      meetingSlot: "9:00 PM - 10:00 PM",
      userName: "abvcdfr",
      userEmail: "abc@gmail.com",
    },
    {
      id: 6,
      title: "Project Discussion",
      meetingDate: "25/05/2021",
      meetingSlot: "9:00 PM - 10:00 PM",
      userName: "abvcdfr",
      userEmail: "abc@gmail.com",
    },
    {
      id: 7,
      title: "Project Discussion",
      meetingDate: "25/05/2021",
      meetingSlot: "9:00 PM - 10:00 PM",
      userName: "abvcdfr",
      userEmail: "abc@gmail.com",
    },
    {
      id: 8,
      title: "Project Discussion",
      meetingDate: "25/05/2021",
      meetingSlot: "9:00 PM - 10:00 PM",
      userName: "abvcdfr",
      userEmail: "abc@gmail.com",
    },
    {
      id: 9,
      title: "Project Discussion",
      meetingDate: "25/05/2021",
      meetingSlot: "9:00 PM - 10:00 PM",
      userName: "abvcdfr",
      userEmail: "abc@gmail.com",
    },
  ];
  return (
    <div>
      <AppoinmentDataTable
        title="Appoinment Bookings"
        columns={columns}
        rowData={data}
      ></AppoinmentDataTable>
    </div>
  );
};

export default BookingMeetingList;
