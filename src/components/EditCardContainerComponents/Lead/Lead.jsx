import React from "react";
import "./Lead.scss";
import { Box, CircularProgress, Switch } from "@mui/material";
import {
  setFormHeader,
  setNameVisible,
  setEmailVisible,
  setCompanyVisible,
  setNoteVisible,
  setJobVisible,
  setPhoneVisible,
} from "../../../redux/profileInfoSlice";
import { useDispatch, useSelector } from "react-redux";
import { updateLead } from "../../../redux/ApisSlice";

const Lead = (userId) => {
  let dispatch = useDispatch();
  const formHeader = useSelector((state) => state.profileInfoSlice.formHeader);
  const nameVisible = useSelector(
    (state) => state.profileInfoSlice.nameVisible
  );
  const emailVisible = useSelector(
    (state) => state.profileInfoSlice.emailVisible
  );
  const companyVisible = useSelector(
    (state) => state.profileInfoSlice.companyVisible
  );
  const jobVisible = useSelector((state) => state.profileInfoSlice.jobVisible);
  const noteVisible = useSelector(
    (state) => state.profileInfoSlice.noteVisible
  );
  const phoneVisible = useSelector(
    (state) => state.profileInfoSlice.phoneVisible
  );

  let changeVisibility = (cb, value) => {
    if (value === 1) {
      dispatch(cb(0));
    } else {
      dispatch(cb(1));
    }
  };
  let updateLeadMode = () => {
    dispatch(
      updateLead({
        id: userId,
        formHeader,
        nameVisible,
        emailVisible,
        companyVisible,
        jobVisible,
        noteVisible,
        phoneVisible,
      })
    );
  };

  console.log(emailVisible);
  let loading = useSelector((state) => state.ApiSlice.submitLoading);
  return (
    <div className="lead-main">
      <div className="lead-inner">
        <div className="lead-direct">Lead Capture</div>
        <div className="disc-toggle">
          <div className="description">
            <h2>Lead Capture Mode</h2>
            <p>
              When lead capture mode is enabled, the lead form will popup as
              soon as your profile is shared
            </p>
          </div>
          <div className="toggle">
            <Switch defaultChecked size="large" />
          </div>
        </div>
        <div className="form-header">
          <h2 className="heading">Form Header</h2>
          <input
            type="text"
            onChange={(e) => dispatch(setFormHeader(e.target.value))}
            value={formHeader}
          />
        </div>
        <div className="description2">
          <h2 className="heading2">Input Fields</h2>
          <p className="paragraph">
            When lead capture mode is enabled, the lead form will popup as soon
            as your profile is shared
          </p>
        </div>
        <div className="form-input-options">
          <div
            className="option"
            onClick={() => changeVisibility(setNameVisible, nameVisible)}
            style={
              nameVisible === 1
                ? { backgroundColor: "rgba(222, 165, 39, 1)" }
                : null
            }
          >
            Full Name
          </div>
          <div
            className="option"
            onClick={() => changeVisibility(setEmailVisible, emailVisible)}
            style={
              emailVisible === 1
                ? { backgroundColor: "rgba(222, 165, 39, 1)" }
                : null
            }
          >
            Email
          </div>
          <div
            className="option"
            onClick={() => changeVisibility(setPhoneVisible, phoneVisible)}
            style={
              phoneVisible === 1
                ? { backgroundColor: "rgba(222, 165, 39, 1)" }
                : null
            }
          >
            Phone Number
          </div>
          <div
            className="option"
            onClick={() => changeVisibility(setJobVisible, jobVisible)}
            style={
              jobVisible === 1
                ? { backgroundColor: "rgba(222, 165, 39, 1)" }
                : null
            }
          >
            Job Title
          </div>
          <div
            className="option"
            onClick={() => changeVisibility(setCompanyVisible, companyVisible)}
            style={
              companyVisible === 1
                ? { backgroundColor: "rgba(222, 165, 39, 1)" }
                : null
            }
          >
            Company
          </div>
          <div
            className="option"
            onClick={() => changeVisibility(setNoteVisible, noteVisible)}
            style={
              noteVisible === 1
                ? { backgroundColor: "rgba(222, 165, 39, 1)" }
                : null
            }
          >
            Note
          </div>
        </div>

        <div className="btns-main">
          <div className="btns-inner">
            <button className="cancel">Cancel</button>
            <button
              className="update"
              onClick={() => {
                !loading ? updateLeadMode() : null;
              }}
            >
              {loading ? (
                <Box sx={{ color: "white" }}>
                  <CircularProgress color="inherit" size={27} />{" "}
                </Box>
              ) : (
                " Update"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lead;
