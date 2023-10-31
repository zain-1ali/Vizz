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
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { FiRefreshCcw } from "react-icons/fi";

const AnalyticsPage = () => {
  let dispatch = useDispatch();
  let theDate = new Date();
  let analyticsLoading = useSelector(
    (state) => state.ApiSlice.analyticsLoading
  );
  let [userType, setUserType] = useState("employee");
  let employeeList = useSelector((state) => state.ApiSlice.employeeList);
  let analyticsData = useSelector((state) => state.ApiSlice.analyticsData);
  let [empName, setEmpName] = useState("");
  let [value, setValue] = useState({
    startDate: `${theDate.getFullYear()}-${
      theDate.getMonth() + 1
    }-${theDate.getDate()}`,
    endDate: `${theDate.getFullYear()}-${
      theDate.getMonth() + 1
    }-${theDate.getDate()}`,
  });
  console.log(
    // `${theDate.getFullYear()}-${theDate.getMonth() + 1}-${theDate.getDate()}`
    value
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
    console.log(theadmin);
    setEmpName(theadmin?.id);
    dispatch(
      getAnalytics({
        id: theadmin?.id,
        startDate: value?.startDate,
        endDate: value?.endDate,
        type: "organization",
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

  let isAdmin = (id) => {
    let adminOrNot = employeeList?.data?.some((elm) => {
      if (id === elm?.id) {
        return elm?.isAdmin === 1;
      }
    });
    return adminOrNot;
  };

  // console.log(isAdmin(1));

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

  // ---------------------------Chart Js--------------------------------------------
  // let randomString = "0%";
  // let b = randomString.slice(0, -1);
  // console.log(b);

  let removeLastWord = (str) => {
    return str?.slice(0, -1);
  };

  ChartJs.register(ArcElement);

  let returnGraphData = (val) => {
    const data = {
      datasets: [
        {
          data: [removeLastWord(val), "100"],
          backgroundColor: ["#000000", "#DEA527"],
        },
      ],
    };
    return data;
  };

  // console.log(returnAdminVal()?.id);
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

            <div className="calender-box">
              <div className="date-picker-upper">
                <p>Start Date</p>
                <input
                  type="date"
                  id="start"
                  name="start"
                  value={value.startDate}
                  onChange={(e) => {
                    setValue({ ...value, startDate: e.target.value }),
                      dispatch(
                        getAnalytics({
                          id: empName,
                          startDate: e.target.value,
                          endDate: value?.endDate,
                          type: isAdmin(empName) ? "organization" : "employee",
                        })
                      );
                  }}
                  className="date-picker"
                />
              </div>
              <div className="date-picker-upper">
                <p>End Date</p>
                <input
                  type="date"
                  id="end"
                  name="end"
                  // min="2023-01-05"
                  value={value.endDate}
                  // value="2023-10-23"
                  onChange={(e) => {
                    setValue({ ...value, endDate: e.target.value }),
                      dispatch(
                        getAnalytics({
                          id: empName,
                          startDate: value?.endDate,
                          endDate: e.target.value,
                          type: isAdmin(empName) ? "organization" : "employee",
                        })
                      );
                  }}
                  className="date-picker"
                />
              </div>
              <div className="date-picker-upper">
                {/* <p>End Date</p> */}
                <div
                  className="refresh"
                  onClick={() =>
                    dispatch(
                      getAnalytics({
                        id: empName,
                        startDate: value?.startDate,
                        endDate: value?.endDate,
                        type: isAdmin(empName) ? "organization" : "employee",
                      })
                    )
                  }
                >
                  Refresh <FiRefreshCcw style={{ marginLeft: "5px" }} />
                </div>
              </div>
            </div>
            <div className="sortbtn">
              <select
                name=""
                id=""
                onChange={(e) => {
                  setEmpName(e.target.value),
                    dispatch(
                      getAnalytics({
                        id: e.target.value,
                        startDate: value?.startDate,
                        endDate: value?.endDate,
                        type: isAdmin(e.target.value)
                          ? "organization"
                          : "employee",
                      })
                    );
                }}
              >
                <option
                  value={returnAdminVal()?.id}
                  // onChange={() => setUserType("organization")}
                  // onClick={() => setUserType("organization")}
                >
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
                        {analyticsData?.data?.contactPercStatus === "inc" ? (
                          <RiArrowUpSFill style={{ fontSize: "18px" }} />
                        ) : (
                          <RiArrowDownSFill style={{ fontSize: "18px" }} />
                        )}
                        <p>
                          {analyticsData?.data?.contactPercentage
                            ? analyticsData?.data?.contactPercentage
                            : "0%"}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <div className="pi-chart">
                    <div className="circle"></div>
                  </div> */}
                  <div className="pi-chart">
                    <div
                      className="h-[75px]  w-[75px] mt-1"
                      style={{
                        height: "90px",
                        width: "90px",
                        border: "5px",
                      }}
                    >
                      <Doughnut
                        data={returnGraphData(
                          analyticsData?.data?.contactPercentage
                        )}
                      ></Doughnut>
                    </div>
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
                        {analyticsData?.data?.clickPercStatus === "inc" ? (
                          <RiArrowUpSFill style={{ fontSize: "18px" }} />
                        ) : (
                          <RiArrowDownSFill style={{ fontSize: "18px" }} />
                        )}
                        <p>
                          {analyticsData?.data?.clickPercentage
                            ? analyticsData?.data?.clickPercentage
                            : "0%"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pi-chart">
                    <div
                      className="h-[75px]  w-[75px] mt-1"
                      style={{
                        height: "90px",
                        width: "90px",
                        border: "5px",
                      }}
                    >
                      <Doughnut
                        data={returnGraphData(
                          analyticsData?.data?.clickPercentage
                        )}
                      ></Doughnut>
                    </div>
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
                        {analyticsData?.data?.viewPercStatus === "inc" ? (
                          <RiArrowUpSFill style={{ fontSize: "18px" }} />
                        ) : (
                          <RiArrowDownSFill style={{ fontSize: "18px" }} />
                        )}

                        <p>
                          {analyticsData?.data?.viewPercentage
                            ? analyticsData?.data?.viewPercentage
                            : "0%"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pi-chart">
                    <div
                      className="h-[75px]  w-[75px] mt-1"
                      style={{
                        height: "90px",
                        width: "90px",
                      }}
                    >
                      <Doughnut
                        data={returnGraphData(
                          analyticsData?.data?.viewPercentage
                        )}
                      ></Doughnut>
                    </div>
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
