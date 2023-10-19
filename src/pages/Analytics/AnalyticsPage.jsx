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
import { CircularProgress, TextField } from "@mui/material";
import { returnIcons } from "../../assets/ReturnSocialIcons";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";

const AnalyticsPage = () => {
  let dispatch = useDispatch();
  let theDate = new Date();
  let analyticsLoading = useSelector(
    (state) => state.ApiSlice.analyticsLoading
  );
  let employeeList = useSelector((state) => state.ApiSlice.employeeList);
  let analyticsData = useSelector((state) => state.ApiSlice.analyticsData);
  let [empName, setEmpName] = useState("");
  let [value, setValue] = useState(
    `${theDate.getFullYear()}-${theDate.getMonth() + 1}`
  );
  useEffect(() => {
    dispatch(getEmpNames());
    // dispatch(getAnalytics());
    // setfiltered(leads);
  }, []);

  useEffect(() => {
    let theadmin = employeeList?.data?.find((elm) => {
      return elm?.isAdmin === 1;
    });
    dispatch(
      getAnalytics({
        userId: theadmin?.id,
        month: returnSplitMonth(value),
        year: returnSplitYear(value),
      })
    );
  }, [employeeList]);

  // console.log(analyticsData);
  let returnAdminVal = () => {
    let theadmin = employeeList?.data?.find((elm) => {
      return elm?.isAdmin === 1;
    });
    return theadmin;
  };

  let returnSplitMonth = (dateString) => {
    let theDateArray = dateString?.split("-");
    let theMonthPart = theDateArray[1];
    if (theMonthPart?.charAt(0) === "0") {
      return theMonthPart?.slice(1);
    } else {
      return theMonthPart;
    }
  };

  let returnSplitYear = (dateString) => {
    let theDateArray = dateString?.split("-");
    return theDateArray[0];
  };
  console.log(analyticsData);
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
              onChange={(e) => {
                setValue(e.target.value),
                  dispatch(
                    getAnalytics({
                      userId: empName,
                      month: returnSplitMonth(e.target.value),
                      year: returnSplitYear(e.target.value),
                    })
                  );
              }}
              className="date-picker"
            />
            <div className="sortbtn">
              <select
                name=""
                id=""
                onChange={(e) => {
                  setEmpName(e.target.value),
                    dispatch(
                      getAnalytics({
                        userId: e.target.value,
                        month: returnSplitMonth(value),
                        year: returnSplitYear(value),
                      })
                    );
                }}
              >
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
              {analyticsLoading ? (
                <div style={{ color: "#eba21e" }}>
                  <CircularProgress color="inherit" size={30} />
                </div>
              ) : (
                <div className="single-stats-inner">
                  <div className="stat-info">
                    <h2 className="leads-gen">Leads Generated</h2>
                    <div className="numeric-value-main">
                      <h2 className="numeric-value">
                        {analyticsData?.data?.contacts === undefined
                          ? 0
                          : analyticsData?.data?.contacts}
                      </h2>
                      <div className="percentage-main">
                        <RiArrowDownSFill style={{ fontSize: "18px" }} />
                        <p>
                          {analyticsData?.data?.contactPercentage
                            ? analyticsData?.data?.contactPercentage
                            : "0%"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pi-chart">
                    <div className="circle"></div>
                  </div>
                </div>
              )}
            </div>
            <div className="single-stats">
              {analyticsLoading ? (
                <div style={{ color: "#eba21e" }}>
                  <CircularProgress color="inherit" size={30} />
                </div>
              ) : (
                <div className="single-stats-inner">
                  <div className="stat-info">
                    <h2 className="leads-gen">Link taps</h2>
                    <div className="numeric-value-main">
                      <h2 className="numeric-value">
                        {" "}
                        {analyticsData?.data?.clicks === undefined
                          ? 0
                          : analyticsData?.data?.clicks}
                      </h2>
                      <div className="percentage-main">
                        <RiArrowDownSFill style={{ fontSize: "18px" }} />
                        <p>
                          {analyticsData?.data?.clickPercentage
                            ? analyticsData?.data?.clickPercentage
                            : "0%"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pi-chart">
                    <div className="circle"></div>
                  </div>
                </div>
              )}
            </div>
            <div className="single-stats">
              {analyticsLoading ? (
                <div style={{ color: "#eba21e" }}>
                  <CircularProgress color="inherit" size={30} />
                </div>
              ) : (
                <div className="single-stats-inner">
                  <div className="stat-info">
                    <h2 className="leads-gen">Card Views</h2>
                    <div className="numeric-value-main">
                      <h2 className="numeric-value">
                        {" "}
                        {analyticsData?.data?.views === undefined
                          ? 0
                          : analyticsData?.data?.views}
                      </h2>
                      <div className="percentage-main">
                        <RiArrowDownSFill style={{ fontSize: "18px" }} />
                        <p>
                          {analyticsData?.data?.viewPercentage
                            ? analyticsData?.data?.viewPercentage
                            : "0%"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pi-chart">
                    <div className="circle"></div>
                  </div>
                </div>
              )}
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
                <div className="links-container">
                  {analyticsLoading ? (
                    <div style={{ color: "#eba21e" }}>
                      <CircularProgress color="inherit" size={30} />
                    </div>
                  ) : analyticsData?.data?.links?.length > 0 ? (
                    <div className="links-inner">
                      {analyticsData?.data?.links?.map((elm) => {
                        return (
                          <div className="single-link">
                            <div className="icon-section">
                              <div className="icon">
                                {returnIcons(elm?.linkName, 20)}
                              </div>
                              <div className="text-area">
                                <h2>{elm?.linkName}</h2>
                                <p>{elm?.clicks} times user click on that.</p>
                              </div>
                            </div>
                            <div className="number-section">
                              <div className="digit-number">{elm?.clicks}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="notfound-text">No links to show</div>
                  )}
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
