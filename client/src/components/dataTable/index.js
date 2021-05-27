import React from "react";
import DataTable from "react-data-table-component";

const AppoinmentDataTable = (props) => {
  return (
    <>
      <DataTable
        title={props.title}
        columns={props.columns}
        data={props.rowData}
        highlightOnHover={true}
        pagination={true}
        stiped={true}
        // progressPending={true}
      ></DataTable>
    </>
  );
};

export default AppoinmentDataTable;
