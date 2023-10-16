import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { BiSearchAlt } from "react-icons/bi";
import "./AnalyticsPage.scss";
import { PiWarningCircleThin } from "react-icons/pi";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getAnalytics, getEmpNames } from "../../redux/ApisSlice";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField } from "@mui/material";

const AnalyticsPage = () => {
  let dispatch = useDispatch();
  let leadsLoading = useSelector((state) => state.ApiSlice.leadsLoading);
  let employeeList = useSelector((state) => state.ApiSlice.employeeList);
  let analyticsData = useSelector((state) => state.ApiSlice.analyticsData);
  useEffect(() => {
    dispatch(getEmpNames());
    dispatch(getAnalytics());
    // setfiltered(leads);
  }, []);

  let [value, setValue] = useState("2023-01");
  console.log(employeeList?.data);
  let returnAdminVal = () => {
    let theadmin = employeeList?.data?.find((elm) => {
      return elm?.isAdmin === 1;
    });
    return theadmin;
  };
  return (
    <div className="analytics-main">
      <Sidebar />
      <div className="analytics-inner">
        {/*-------------------------------header section-------------------------------------*/}
        <div className="analytics-header-main">
          <div className="analytics-header">
            <div className="profilebtn">
              <p>Analytics</p>
            </div>
            <input
              type="month"
              id="start"
              name="start"
              min="2023-01"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="date-picker"
            />
            <div className="sortbtn">
              <select name="" id="">
                <option value={returnAdminVal()?.id}>
                  {returnAdminVal()?.name}
                </option>
                {employeeList?.data?.map((elm) => {
                  return (
                    <option
                      value={elm?.id}
                      style={elm?.isAdmin === 1 ? { display: "none" } : null}
                    >
                      {elm?.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>

        <div className="tripple-stats-main">
          <div className="tripple-stats">
            <div className="single-stats">
              <div className="single-stats-inner">
                <div className="stat-info">
                  <h2 className="leads-gen">Leads Generated</h2>
                  <h2 className="numeric-value">75</h2>
                </div>
                <div className="pi-chart">
                  <div className="circle"></div>
                </div>
              </div>
            </div>
            <div className="single-stats">
              <div className="single-stats-inner">
                <div className="stat-info">
                  <h2 className="leads-gen">Link taps</h2>
                  <h2 className="numeric-value">515</h2>
                </div>
                <div className="pi-chart">
                  <div className="circle"></div>
                </div>
              </div>
            </div>
            <div className="single-stats">
              <div className="single-stats-inner">
                <div className="stat-info">
                  <h2 className="leads-gen">Card Views</h2>
                  <h2 className="numeric-value">723</h2>
                </div>
                <div className="pi-chart">
                  <div className="circle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="graph-recent-main">
          <div className="graph-recent">
            <div className="graph"></div>
            <div className="recent-activity">
              <div className="recent-activity-inner">
                <div className="heading-time">
                  <div className="heading">
                    <span>
                      Link Clicked{" "}
                      <PiWarningCircleThin
                        style={{ fontSize: "13px", cursor: "pointer" }}
                      />
                    </span>
                  </div>
                  {/* <div className="time">
                    <MdKeyboardArrowLeft
                      style={{ fontSize: "15px", cursor: "pointer" }}
                    />{" "}
                    March 2023{" "}
                    <MdKeyboardArrowRight
                      style={{ fontSize: "15px", cursor: "pointer" }}
                    />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
};

export default AnalyticsPage;
