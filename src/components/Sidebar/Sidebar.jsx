import React, { useEffect, useState } from "react";
import "./Sidebar.scss";
import vizzlogo from "../../imgs/vizzlogo.png";
import { BsPersonFill, BsPersonVcardFill } from "react-icons/bs";
import { SiGoogleanalytics } from "react-icons/Si";
import { IoMdSettings } from "react-icons/io";
import { RiLogoutCircleLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  closeCustomModal,
  openCustomModal,
  openModal,
} from "../../redux/Modalslice";
import CustomModal from "../Modals/CustomModal/CustomModal";
import LogoutModal from "../Modals/LogoutModal/LogoutModal";
import { getOrganization } from "../../redux/ApisSlice";

const Sidebar = () => {
  let navigate = useNavigate();
  let pathname = window.location.pathname;
  let dispatch = useDispatch();
  let [logoutmodal, setlogoutmodal] = useState(false);
  let handleLogoutModal = () => {
    setlogoutmodal(!logoutmodal);
  };

  useEffect(() => {
    dispatch(getOrganization());
  }, []);

  let organisation = useSelector((state) => state.ApiSlice.organization);

  return (
    <div className="sidebar-main">
      <LogoutModal
        logoutmodal={logoutmodal}
        handleLogoutModal={handleLogoutModal}
      />
      <img
        src={
          organisation?.data?.logoUrl
            ? organisation?.data?.logoUrl
            : "https://placehold.co/70x66"
        }
        alt="logo"
      />
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
          onClick={() => navigate("/analyticsPage")}
          style={
            pathname === "/analyticsPage"
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
      <button className="logoutbtn" onClick={() => handleLogoutModal()}>
        <RiLogoutCircleLine className="logouticon" />
        <p>Logout</p>
      </button>
    </div>
  );
};

export default Sidebar;
