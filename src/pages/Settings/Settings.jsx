import React from "react";
import "./Settings.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import { BiHelpCircle } from "react-icons/bi";

const Settings = () => {
  return (
    <div className="settings-main">
      <Sidebar />
      <div className="settings-inner">
        <div className="settings-innerII">
          <div className="settings-header">
            <div className="profilebtn">
              <p>Settings</p>
            </div>

            <div className="sortbtn">
              <BiHelpCircle
                style={{
                  color: "#353535",
                  fontSize: "22px",
                  marginRight: "6px",
                }}
              />
              Help
            </div>
          </div>

          <div className="custom-heading">Account Settings</div>

          <div className="account-setting-form">
            <div className="form-content">
              <div className="name-fields">
                <div className="singlefield">
                  First name
                  <input type="text" className="nameinput" />
                </div>

                <div className="singlefield">
                  Last name
                  <input type="text" className="nameinput" />
                </div>
              </div>

              <div className="email-field">
                <div className="singlefieldII">
                  Email
                  <input type="text" className="emailinput" />
                </div>
              </div>

              <div className="account-security">
                <div className="singlefieldIII">
                  Account Security
                  <div className="reset-btn">Reset</div>
                  <input type="text" className="emailinput" />
                </div>
              </div>
            </div>
          </div>

          <div className="custom-heading">Organization</div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
