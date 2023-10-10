import React from "react";
import { CSVLink } from "react-csv";

const DownloadExcel = ({ Data }) => {
  console.log(Data);
  //   const csvData = Data?.map((item) => {
  //     return {
  //       Name: item?.name,
  //       Job: item?.job,
  //       Email: item?.email,
  //       Company: item?.company,
  //       phone: item?.phone,
  //       note: item?.note,
  //     };
  //   });

  return (
    <CSVLink
      data={Data}
      filename={`MyContacts.csv`}
      style={{ textDecoration: "none", color: "black" }}
    >
      Export via CSV
    </CSVLink>
  );
};

export default DownloadExcel;
