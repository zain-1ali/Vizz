import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { BiSearchAlt } from "react-icons/bi";
import "./Analytics.scss";

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
                <div className="stat-info"></div>
                <div className="pi-chart"></div>
              </div>
            </div>
            <div className="single-stats"></div>
            <div className="single-stats"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
