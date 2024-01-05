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
import { setOrgLogo } from "../../redux/profileInfoSlice";
import { BsBuildingsFill } from "react-icons/bs";

const Sidebar = () => {
  let navigate = useNavigate();
  let pathname = window.location.pathname;
  let dispatch = useDispatch();
  let vizzRole = localStorage.getItem("vizzRole");
  let [logoutmodal, setlogoutmodal] = useState(false);
  let handleLogoutModal = () => {
    setlogoutmodal(!logoutmodal);
  };

  let orgId = localStorage.getItem("orgId");
  console.log(orgId);
  let organisation = useSelector((state) => state.ApiSlice.organization);
  let organizationLogo = useSelector(
    (state) => state.profileInfoSlice.organizationLogo
  );
  useEffect(() => {
    dispatch(getOrganization());
  }, []);

  useEffect(() => {
    dispatch(setOrgLogo(organisation?.data?.logoUrl));
  }, [organisation]);

  let returnLogo = () => {
    if (vizzRole === "teamAdmin") {
      return organizationLogo
        ? organizationLogo
        : "https://placehold.co/110x110";
    } else {
      return vizzlogo;
    }
  };

  return (
    <div className="sidebar-main">
      <LogoutModal
        logoutmodal={logoutmodal}
        handleLogoutModal={handleLogoutModal}
      />
      <div className="logo-main">
        <div className="logo-inner">
          <img src={returnLogo()} alt="logo" />
        </div>
      </div>

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
          {vizzRole === "admin" ? (
            <BsBuildingsFill className="optionicon" />
          ) : (
            <BsPersonFill className="optionicon" />
          )}

          <p>{vizzRole === "teamAdmin" ? "Profiles" : "Companies"}</p>
        </div>
        {vizzRole === "teamAdmin" && (
          <>
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
          </>
        )}
      </div>
      <button className="logoutbtn" onClick={() => handleLogoutModal()}>
        <RiLogoutCircleLine className="logouticon" />
        <p>Logout</p>
      </button>
    </div>
  );
};

export default Sidebar;
