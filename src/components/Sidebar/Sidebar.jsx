import React from "react";
import "./Sidebar.scss";
import vizzlogo from "../../imgs/vizzlogo.png";
import { BsPersonFill, BsPersonVcardFill } from "react-icons/bs";
import { SiGoogleanalytics } from "react-icons/Si";
import { IoMdSettings } from "react-icons/io";
import { RiLogoutCircleLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  closeCustomModal,
  openCustomModal,
  openModal,
} from "../../redux/Modalslice";
import CustomModal from "../Modals/CustomModal/CustomModal";

const Sidebar = () => {
  let navigate = useNavigate();
  let pathname = window.location.pathname;
  let dispatch = useDispatch();
  return (
    <div className="sidebar-main">
      <CustomModal name="logoutWarning" />
      <img src={vizzlogo} alt="logo" />
      <div className="sidebar-option-main">
        <div
          className="single-option"
          onClick={() => navigate("/home")}
          style={
            pathname === "/home"
              ? { backgroundColor: "rgba(47, 47, 47, 1)" }
              : null
          }
        >
          <BsPersonFill className="optionicon" />
          <p>Profiles</p>
        </div>
        <div
          className="single-option"
          onClick={() => navigate("/contacts")}
          style={
            pathname === "/contacts"
              ? { backgroundColor: "rgba(47, 47, 47, 1)" }
              : null
          }
        >
          <BsPersonVcardFill className="optionicon" />
          <p>Contacts</p>
        </div>
        <div
          className="single-option"
          onClick={() => navigate("/analytics")}
          style={
            pathname === "/analytics"
              ? { backgroundColor: "rgba(47, 47, 47, 1)" }
              : null
          }
        >
          <SiGoogleanalytics className="optionicon" />
          <p>Analytics</p>
        </div>
        <div
          className="single-option"
          onClick={() => navigate("/settings")}
          style={
            pathname === "/settings"
              ? { backgroundColor: "rgba(47, 47, 47, 1)" }
              : null
          }
        >
          <IoMdSettings className="optionicon" />
          <p>Settings</p>
        </div>
      </div>
      <button className="logoutbtn" onClick={() => dispatch(openCustomModal())}>
        <RiLogoutCircleLine className="logouticon" />
        <p>Logout</p>
      </button>
    </div>
  );
};

export default Sidebar;
