import React from "react";
import "./Sidebar.scss";
import vizzlogo from "../../imgs/vizzlogo.png";
import { BsPersonFill, BsPersonVcardFill } from "react-icons/bs";
import { SiGoogleanalytics } from "react-icons/Si";
import { IoMdSettings } from "react-icons/io";
import { RiLogoutCircleLine } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className="sidebar-main">
      <img src={vizzlogo} alt="logo" />
      <div className="sidebar-option-main">
        <div className="single-option">
          <BsPersonFill className="optionicon" />
          <p>Profiles</p>
        </div>
        <div className="single-option">
          <BsPersonVcardFill className="optionicon" />
          <p>Contacts</p>
        </div>
        <div className="single-option">
          <SiGoogleanalytics className="optionicon" />
          <p>Analytics</p>
        </div>
        <div className="single-option">
          <IoMdSettings className="optionicon" />
          <p>Settings</p>
        </div>
      </div>
      <button className="logoutbtn">
        <RiLogoutCircleLine className="logouticon" />
        <p>Logout</p>
      </button>
    </div>
  );
};

export default Sidebar;
