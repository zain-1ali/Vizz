import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { BiSearchAlt } from "react-icons/bi";
import "./Analytics.scss";
import { PiWarningCircleThin } from "react-icons/pi";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const Analytics = () => {
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

            {/* <div className="searchbar">
            <input type="text" placeholder="Search" />
            <BiSearchAlt className="searchicon" />
          </div> */}
            <div className="sortbtn">
              <select name="" id="">
                <option value="">Select User</option>
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
                      Recent Activity{" "}
                      <PiWarningCircleThin
                        style={{ fontSize: "13px", cursor: "pointer" }}
                      />
                    </span>
                    <span></span>
                  </div>
                  <div className="time">
                    <MdKeyboardArrowLeft
                      style={{ fontSize: "15px", cursor: "pointer" }}
                    />{" "}
                    March 2023{" "}
                    <MdKeyboardArrowRight
                      style={{ fontSize: "15px", cursor: "pointer" }}
                    />
                  </div>
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

export default Analytics;
